class GrassBlade extends THREE.Object3D{
	constructor(radius=1, detail=16, color="#00ff00"){
		super();
		this.radius = radius;
		this.detail = detail;
		this.color = color;

		var texdata = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QDcRXhpZgAASUkqAAgAAAAHABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAADEBAgAMAAAAcgAAADIBAgAUAAAAfgAAAGmHBAABAAAAkgAAAAAAAABIAAAAAQAAAEgAAAABAAAAR0lNUCAyLjguMTQAMjAxOTowOTowOSAyMjoyMzoxMQAFAACQBwAEAAAAMDIyMACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgAwABAAAAgAAAAAOgAwABAAAAgAAAAAAAAAD/4QhiaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pgo8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHhtbG5zOmV4aWY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvJz4KICA8ZXhpZjpJbWFnZVdpZHRoPjIzMDA8L2V4aWY6SW1hZ2VXaWR0aD4KICA8ZXhpZjpJbWFnZUxlbmd0aD4yMzAwPC9leGlmOkltYWdlTGVuZ3RoPgogIDxleGlmOkJpdHNQZXJTYW1wbGU+OCwgOCwgODwvZXhpZjpCaXRzUGVyU2FtcGxlPgogIDxleGlmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+UkdCPC9leGlmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgPGV4aWY6T3JpZW50YXRpb24+VG9wLWxlZnQ8L2V4aWY6T3JpZW50YXRpb24+CiAgPGV4aWY6U2FtcGxlc1BlclBpeGVsPjM8L2V4aWY6U2FtcGxlc1BlclBpeGVsPgogIDxleGlmOlhSZXNvbHV0aW9uPjcyLjAwMDA8L2V4aWY6WFJlc29sdXRpb24+CiAgPGV4aWY6WVJlc29sdXRpb24+NzIuMDAwMDwvZXhpZjpZUmVzb2x1dGlvbj4KICA8ZXhpZjpSZXNvbHV0aW9uVW5pdD5JbmNoPC9leGlmOlJlc29sdXRpb25Vbml0PgogIDxleGlmOlNvZnR3YXJlPkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKTwvZXhpZjpTb2Z0d2FyZT4KICA8ZXhpZjpEYXRlVGltZT4yMDE4OjExOjAzIDEwOjA3OjIxPC9leGlmOkRhdGVUaW1lPgogIDxleGlmOkZsYXNoUGl4VmVyc2lvbj5GbGFzaFBpeCBWZXJzaW9uIDEuMDwvZXhpZjpGbGFzaFBpeFZlcnNpb24+CiAgPGV4aWY6T3JpZW50YXRpb24+VG9wLWxlZnQ8L2V4aWY6T3JpZW50YXRpb24+CiAgPGV4aWY6WFJlc29sdXRpb24+NzI8L2V4aWY6WFJlc29sdXRpb24+CiAgPGV4aWY6WVJlc29sdXRpb24+NzI8L2V4aWY6WVJlc29sdXRpb24+CiAgPGV4aWY6UmVzb2x1dGlvblVuaXQ+SW5jaDwvZXhpZjpSZXNvbHV0aW9uVW5pdD4KICA8ZXhpZjpTb2Z0d2FyZT5HSU1QIDIuOC4xNDwvZXhpZjpTb2Z0d2FyZT4KICA8ZXhpZjpEYXRlVGltZT4yMDE5OjA4OjE4IDA0OjMyOjM5PC9leGlmOkRhdGVUaW1lPgogIDxleGlmOkZsYXNoUGl4VmVyc2lvbj5GbGFzaFBpeCBWZXJzaW9uIDEuMDwvZXhpZjpGbGFzaFBpeFZlcnNpb24+CiAgPGV4aWY6SW1hZ2VXaWR0aD4yMzAwPC9leGlmOkltYWdlV2lkdGg+CiAgPGV4aWY6SW1hZ2VMZW5ndGg+MjMwMDwvZXhpZjpJbWFnZUxlbmd0aD4KICA8ZXhpZjpCaXRzUGVyU2FtcGxlPjgsIDgsIDg8L2V4aWY6Qml0c1BlclNhbXBsZT4KICA8ZXhpZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPlJHQjwvZXhpZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogIDxleGlmOk9yaWVudGF0aW9uPlRvcC1sZWZ0PC9leGlmOk9yaWVudGF0aW9uPgogIDxleGlmOlNhbXBsZXNQZXJQaXhlbD4zPC9leGlmOlNhbXBsZXNQZXJQaXhlbD4KICA8ZXhpZjpYUmVzb2x1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"
		var loader = new THREE.TextureLoader();
		this.loadedTexture;
		loader.load( texdata, ( texture ) => {
			this.loadedTexture = texture;
			this.create();
		});

	}

	para(v, u, target) {
  		//u *= Math.PI;
  		//v *= 2 * Math.PI;
  		//u = u * 2;
		//
  		//let x;
  		//let z;
		//
  		//if (u < Math.PI) {
  		//    x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(u) * Math.cos(v);
  		//    z = -8 * Math.sin(u) - 2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v);
  		//} else {
  		//    x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(v + Math.PI);
  		//    z = -8 * Math.sin(u);
  		//}
		//
  		//const y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v);

  		const z = v*1*(1-u)
  		var reach;

  		

  		//const y = Math.sin((u-1)*3.1416) + Math.cos((u-1)*3.1416);
  		var doublecurve;
  		if(v>0.5){
  			doublecurve = Math.sin((v*4.7124)-1.57)*(1-u);
  		} else {
  			doublecurve = Math.cos((v*4.7124)-1.57)*(1-u);
  		}
  		var heightcurve;
  		//var cutoff = 2;
  		//if (u<cutoff){
  			//heightcurve = Math.sin((1-u)+2)
  			//reach = cutoff*10 - (cutoff-u)/10;
  		//} else {
			heightcurve = Math.cos((u*2)-1.57);
			reach = u*10;
  		//}
  		const x = reach;//Math.sin(u*1.5);
		const y = (heightcurve*10)+(doublecurve/10);

  		target.set(x, y, z);
  		//target.set(x, y, z).multiplyScalar(0.75);
	}

	create(){
				
		//this.loadedTexture.wrapS = THREE.RepeatWrapping;
    	//this.loadedTexture.wrapT = THREE.RepeatWrapping;
		//this.loadedTexture.repeat.set(1,1);
		//this.loadedTexture.needsUpdate = true;
		
		const slices = 10;
		const stacks = 100;
		const geometry = new THREE.ParametricBufferGeometry(this.para, slices, stacks);

		var material = new THREE.MeshStandardMaterial( {
			//transparent:true,
			//opacity: this.transparency,
			side: THREE.DoubleSide,
			map: this.loadedTexture,
			bumpMap : this.loadedTexture,
			metalness: 0.5,
			//blending:THREE.SubtractiveBlending,
			roughness : 0.4,

			color: this.color 
		} );

		this.body = new THREE.Mesh( geometry, material );
		this.body.scale.x = this.body.scale.y = this.body.scale.z = this.radius;
		this.add(this.body);
		this.body.castShadow = true;
		this.body.receiveShadow = true;
		this.castShadow = true;
		this.receiveShadow = true;
	}
}