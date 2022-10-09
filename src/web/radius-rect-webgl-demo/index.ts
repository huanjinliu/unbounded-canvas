import UnboundedCanvas from '../../unbounded-canvas/index.class';
import vertex from './vertex.glsl';
import fragment from './fragment.glsl';
import pixelated from '../../utils/pixelated';

/** 格子大小 */
const GRID_SIZE = 5;
/** 格子间隔 */
const GRID_GAP = 1;
/** 最小格子尺寸 */
const GRID_MIN_SIZE = 3;
/** 最大格子尺寸 */
const GRID_MAX_SIZE = 500;

/**
 * 创建并生成着色器
 */
const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
  // 创建着色器对象
  const shader = gl.createShader(type);
  if (!shader) throw Error('shader create error!');
  // 提供着色器执行代码段
  gl.shaderSource(shader, source);
  // 编译生成着色器
  gl.compileShader(shader);
  // 判断着色器的生成状态
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) return shader;
  // 如果创建失败输出着色器信息并删除着色器
  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
};

/**
 * 创建着色程序
 */
const createWebGLProgram = (gl: WebGLRenderingContext, vertexSource: string, fragmentSource: string) => {
  // 创建着色程序
  const program = gl.createProgram();
  if (!program) throw Error('create program error!')
  // 创建顶点着色器
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
  // 创建片段着色器
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  // 关联着色器 + 链接着色器
  gl.attachShader(program, vertexShader!);
  gl.attachShader(program, fragmentShader!);
  gl.linkProgram(program);
  // 判断链接的状态
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) return program;
  // 如果链接失败输出信息并删除程序
  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

/**
 * 注入着色缓冲属性
 */
const createAttributeInjector = (
  gl: WebGLRenderingContext,
  program: WebGLProgram,
  attributeName: string
) => {
  const attributeLocation = gl.getAttribLocation(program, attributeName);
  // 属性从缓冲中获取数据，创建缓冲
  const positionBuffer = gl.createBuffer();

  return (size: number, dataArray: number[], options: {
    type?: number;
    normalize?: boolean;
  } = {}) => {
    const { type = gl.FLOAT, normalize = false } = options
    // 绑定位置信息缓冲，后续可以通过引用绑定点指向信息数据源
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    // 启用对应顶点属性
    gl.enableVertexAttribArray(attributeLocation);
    // 注入数据
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(dataArray), gl.STATIC_DRAW);
    /** 告诉属性如何从缓冲中读取数据 */
    // const size = 2;          // 每次迭代运行提取两个单位数据
    // const type = gl.FLOAT;   // 每个单位的数据类型是32位浮点型
    // const normalize = false; // 不需要归一化数据
    const stride = 0;        // 0 = 移动单位数量 * 每个单位占用内存（sizeof(type), 每次迭代运行运动多少内存到下一个数据开始点
    const offset = 0;        // 从缓冲起始位置开始读取
    gl.vertexAttribPointer(attributeLocation, size, type, normalize, stride, offset)
  }
}

const createWebGLDemo = async () => {
  const _canvas: HTMLCanvasElement | null = document.querySelector('#_canvas');
  if (!_canvas) return;

  const unbounedCanvas = new UnboundedCanvas(_canvas, {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
    unit: {
      size: GRID_SIZE,
      gap: GRID_GAP,
      // sticky: true,
    },
    zoom: {
      min: GRID_MIN_SIZE / GRID_SIZE,
      max: GRID_MAX_SIZE / GRID_SIZE,
    }
  });

  let program: WebGLProgram | undefined;
  let locationInjector: any;
  let colorInjector: any;

  const layerCanvas = unbounedCanvas.addWebGLLayer((gl) => {
    /** 创建并使用着色程序 */
    program = createWebGLProgram(gl, vertex, fragment);
    if (!program) return;
    gl.useProgram(program);

    /** 全局属性设置 */
    const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);

    locationInjector = createAttributeInjector(gl, program, 'a_position');
    colorInjector = createAttributeInjector(gl, program, 'a_color');
  })

  await pixelated('./assets/test.png', {
    size: 5,
    gap: 0,
    mode: 'use-most-related',
  })
    .then(imageData => {
      console.dir(imageData)
      if (!imageData) return;
      const { rows, cols, points } = imageData;
      layerCanvas
        .addRender((gl) => {
          if (!program) return;
          const { width, height, unitSize, unitGap, contentCenter } = unbounedCanvas.getOptions();
          const size = unitSize + unitGap;
          const halfSize = unitSize / 2;
          const unitFirstPoint = unbounedCanvas.getUnitFirstPoint(contentCenter);

          const rectData: number[] = [];
          const colorData: number[] = [];
          /**
           * 绘制方块
           */
          const fillRect = (
            x: number,
            y: number,
            w: number,
            h: number,
            fill: {
              r: number,
              g: number,
              b: number,
              a?: number,
            }
          ) => {
            const a = fill.a ?? 1;
            rectData.push(
              x, y,
              x + w, y,
              x, y + h,
              x + w, y,
              x, y + h,
              x + w, y + h,
            )
            colorData.push(
              fill.r / 255, fill.g / 255, fill.b / 255, a,
              fill.r / 255, fill.g / 255, fill.b / 255, a,
              fill.r / 255, fill.g / 255, fill.b / 255, a,
              fill.r / 255, fill.g / 255, fill.b / 255, a,
              fill.r / 255, fill.g / 255, fill.b / 255, a,
              fill.r / 255, fill.g / 255, fill.b / 255, a,
            )
          }

          const firstUniformLocation = gl.getUniformLocation(program, "u_firstPointPosition");
          gl.uniform2f(firstUniformLocation, unitFirstPoint.x, unitFirstPoint.y);
          const sizeUniformLocation = gl.getUniformLocation(program, "u_size");
          gl.uniform1f(sizeUniformLocation, unitSize);
          const gapUniformLocation = gl.getUniformLocation(program, "u_gap");
          gl.uniform1f(gapUniformLocation, unitGap);
          // console.dir(height * width / (size ** 2))
          // for (let y = unitFirstPoint.y; y < height + size; y += size) {
          //   for (let x = unitFirstPoint.x; x < width + size; x += size) {
          //     fillRect(x, y, unitSize, unitSize, { r: 242, g: 242, b: 242, a: 1 });
          //   }
          // };

          // console.log(unitFirstPoint.x, unitFirstPoint.y, width, height)
          fillRect(
            0,
            0,
            width,
            height,
            { r: 242, g: 242, b: 242, a: 1 }
          );

          // points.forEach(({ col, row, fill }) => {
          //   if (
          //     (fill.r === 255 && fill.g === 255 && fill.b === 255) ||
          //     fill.a === 0
          //   ) return;
          //   const point = [Math.floor(- cols / 2) + col, Math.floor(- rows / 2) + row - 10];
          //   fillRect(
          //     contentCenter.x * devicePixelRatio + point[0] * size - halfSize,
          //     contentCenter.y * devicePixelRatio + point[1] * size - halfSize,
          //     unitSize,
          //     unitSize,
          //     fill,
          //   );
          // })

          locationInjector(2, rectData);
          colorInjector(4, colorData);
      
          /** 开始着色 */
          // 三角形图元
          const primitiveType = gl.TRIANGLES;
          // 读取起始位置
          const first = 0;
          // 顶点着色器将运行次数
          const count = rectData.length / 2;
          gl.drawArrays(primitiveType, first, count);
        })
        .renderAll()
    })

  const button = document.querySelector('#back_center');
  if (button) button.addEventListener('click', () => {
    unbounedCanvas?.focus([0, 0]);
  })
};

createWebGLDemo();