uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_tiles;
uniform sampler2D u_tilemap;

void main() {
  float offsetx = 0.00;
  float offsety = 0.00;

  offsetx = u_mouse.x;
  offsety = u_mouse.y;

  float tilex = (gl_FragCoord.x+offsetx)/16384.00;
  float tiley = (gl_FragCoord.y+offsety)/16384.00;

  vec4 tile = texture2D(u_tilemap, vec2(tilex,tiley));

  float tilenumx = (3.00-(tile.g*256.00))/4.00;
  float tilenumy = (3.00-(tile.b*256.00))/4.00;

  if(tile.r<0.5) discard;

  float fracx = floor(mod(gl_FragCoord.x+offsetx, 64.00));
  float fracy = floor(mod(gl_FragCoord.y+offsety, 64.00));

  vec4 col = texture2D(u_tiles, vec2(tilenumx+fracx/256.00,tilenumy+fracy/256.00));

  gl_FragColor = vec4(col.r, col.g, col.b, col.a);
}