window.global = new Global();
screenLog.init();
var viewport = new ViewPort();
viewport.addEventListener("enterframe", enterframe);
viewport.addEventListener("resize", resize)

var ladyBug = new LadyBug(20,32,"#ff0000", "#000000", "#111155");
viewport.scene.add(ladyBug);
ladyBug.rotation.y =3.141
ladyBug.position.y = 40;

ladyBug.scale.x=ladyBug.scale.y=ladyBug.scale.z= 1.3;

ladyBug.castShadow = true;
ladyBug.receiveShadow = true;

var shaderLayer = new ShaderLayer();
viewport.scene.add(shaderLayer);
global.shaderLayer = shaderLayer;



function resize(){
	global.shaderLayer.resize(window.innerWidth, window.innerHeight);
}

function enterframe(){
	global.shaderLayer.update();
}
