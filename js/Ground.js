class Ground extends THREE.Object3D{
	constructor(){
		super();
		this.create();
	}

	create(){
		const shape = new THREE.Shape();
		const x = -2.5;
		const y = -5;
		/*
		shape.moveTo(x + 2.5, y + 2.5);
		shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
		shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
		shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
		shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
		shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
		shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
		*/

		shape.moveTo(x + 2.5, y + 2.5);
		shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
		shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
		shape.bezierCurveTo(x - 3, y + 5.5, x - 1.0, y + 7.7, x + 2.5, y + 9.5);
		shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 5.5, x + 8, y + 3.5);
		shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
		shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
		
		const extrudeSettings = {
		  steps: 2,
		  depth: 50,
		  bevelEnabled: true,
		  bevelThickness: 4,
		  bevelSize: 4,
		  bevelSegments: 8,
		};
		

		var geometry = new THREE.ExtrudeBufferGeometry( shape, extrudeSettings );
		var material = new THREE.MeshStandardMaterial( { color: 0x009900 } );
		var mesh = new THREE.Mesh( geometry, material ) ;
		this.add( mesh );
				mesh.castShadow = true;
		mesh.receiveShadow = true;

	}
}