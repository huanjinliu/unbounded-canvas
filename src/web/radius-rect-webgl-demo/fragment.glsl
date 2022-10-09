precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_firstPointPosition;
varying vec2 v_position;
uniform float u_size;
uniform float u_gap;

varying vec4 v_color;

void main() {
  vec2 position = v_position * u_resolution - u_firstPointPosition;

  float unitSize = u_size + u_gap;
  float sizeRatio = u_size / unitSize;

  // vec2 unitSize = vec2(unitSize) / u_resolution;

  if ((position.y - (floor(position.y / unitSize) * unitSize)) / unitSize > sizeRatio) discard;
  if ((position.x - (floor(position.x / unitSize) * unitSize)) / unitSize > sizeRatio) discard;

  gl_FragColor = v_color;
}