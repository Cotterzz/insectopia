class UpperArm extends THREE.Object3D{
	constructor(){
		super();
		this.create();
	}

	create(){
		var points = [[],[],[],[]];


		points[0].push(new THREE.Vector2(0, 0));
		points[0].push(new THREE.Vector2(2, 1));
		points[0].push(new THREE.Vector2(3, 3));
		points[0].push(new THREE.Vector2(3, 5));
		points[0].push(new THREE.Vector2(2, 7));
		points[0].push(new THREE.Vector2(1, 10));
		points[0].push(new THREE.Vector2(0, 10));

		points[1].push(new THREE.Vector2(0, 0));
		points[1].push(new THREE.Vector2(1, 1));
		points[1].push(new THREE.Vector2(2, 3));
		points[1].push(new THREE.Vector2(2, 5));
		points[1].push(new THREE.Vector2(1, 7));
		points[1].push(new THREE.Vector2(0.5, 10));
		points[1].push(new THREE.Vector2(0, 10));

		points[2].push(new THREE.Vector2(0, 0));
		points[2].push(new THREE.Vector2(2, 1));
		points[2].push(new THREE.Vector2(4, 3));
		points[2].push(new THREE.Vector2(5, 5));
		points[2].push(new THREE.Vector2(3, 7));
		points[2].push(new THREE.Vector2(1, 10));
		points[2].push(new THREE.Vector2(0, 10));

		points[3].push(new THREE.Vector2(0, 0));
		points[3].push(new THREE.Vector2(1, 1));
		points[3].push(new THREE.Vector2(2, 3));
		points[3].push(new THREE.Vector2(2, 5));
		points[3].push(new THREE.Vector2(1, 7));
		points[3].push(new THREE.Vector2(0.5, 10));
		points[3].push(new THREE.Vector2(0, 10));

		var geometry = new VariLatheBufferGeometry( points , 10);
		/*
		var material3 = new THREE.MeshPhysicalMaterial( {

			clearCoat : 0.2,
			clearCoatRoughness : 0.1,
			reflectivity : 0.7,
			envMap : this.reflection,
			envMapIntensity : 0.7,
			metalness: 0.5,

			bumpScale : 0.2,

			roughness : 0.4,

			color: 0x0000ff ,

		} );
		var lens = new THREE.Mesh( geometry3, material3 );
		this.add( lens );

		lens.position.y = this.radius*-0.85;
		lens.scale.y=-1;
		const shape = new THREE.Shape();
		const x = -2.5;
		const y = -5;
		
		shape.moveTo(x + 2.5, y + 2.5);
		shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
		shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
		shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
		shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
		shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
		shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
		

		shape.moveTo(x + 2.5, y + 2.5);
		shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
		shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
		shape.bezierCurveTo(x - 3, y + 5.5, x - 1.0, y + 7.7, x + 2.5, y + 9.5);
		shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 5.5, x + 8, y + 3.5);
		shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
		shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
		
		const extrudeSettings = {
		  steps: 2,
		  depth: 2,
		  bevelEnabled: true,
		  bevelThickness: 2,
		  bevelSize: 2,
		  bevelSegments: 4,
		};
		*/

		var material = new THREE.MeshStandardMaterial( { color: 0x0033ff } );
		var mesh = new THREE.Mesh( geometry, material ) ;
		this.add( mesh );

	}
}