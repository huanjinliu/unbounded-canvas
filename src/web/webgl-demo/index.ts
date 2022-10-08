import UnboundedCanvas from '../../unbounded-canvas/index.class';
import vertex from './vertex.glsl';
import fragment from './fragment.glsl';

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

const createWebGLDemo = async () => {
  const _canvas: HTMLCanvasElement | null = document.querySelector('#_canvas');
  if (!_canvas) return;

  const unbounedCanvas = new UnboundedCanvas(_canvas, {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
  });

  unbounedCanvas.addWebGLLayer((gl) => {
    /** 创建并使用着色程序 */
    const program = createWebGLProgram(gl, vertex, fragment);
    if (!program) return;
    gl.useProgram(program);

    /** 使用缓冲中的数据 */
    // 获取属性值位置
    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    const colorUniformLocation = gl.getUniformLocation(program, "u_color");
    // 属性从缓冲中获取数据，创建缓冲
    const positionBuffer = gl.createBuffer();
    // 启用对应顶点属性
    gl.enableVertexAttribArray(positionAttributeLocation);
    // 绑定位置信息缓冲，后续可以通过引用绑定点指向信息数据源
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    /** 调整画布视图 */
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  
    /** 提供着色数据 */
    const positions = [
      10, 20,
      80, 20,
      10, 30,
      10, 30,
      80, 20,
      80, 30,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
    gl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), 1);

    /** 告诉属性如何从缓冲中读取数据 */
    const size = 2;          // 每次迭代运行提取两个单位数据
    const type = gl.FLOAT;   // 每个单位的数据类型是32位浮点型
    const normalize = true; // 不需要归一化数据
    const stride = 0;        // 0 = 移动单位数量 * 每个单位占用内存（sizeof(type), 每次迭代运行运动多少内存到下一个数据开始点
    const offset = 0;        // 从缓冲起始位置开始读取
    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

    /** 开始着色 */
    // 三角形图元
    const primitiveType = gl.TRIANGLES;
    // 读取起始位置
    const first = 0;
    // 顶点着色器将运行次数
    const count = 6;
    gl.drawArrays(primitiveType, first, count);
  })

  const button = document.querySelector('#back_center');
  if (button) button.addEventListener('click', () => {
    unbounedCanvas?.focus([0, 0]);
  })
};

createWebGLDemo();