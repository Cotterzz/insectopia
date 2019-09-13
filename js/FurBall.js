class EyeBall extends THREE.Object3D{
	constructor(radius=1, detail=16, irisColor="#ffcc44", reflection){
		super();
		this.reflection = reflection;
		this.radius = radius;
		this.detail = detail;
		this.irisColor = irisColor;

		var irisData = "data:image/jpeg;base64,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";
		var loader = new THREE.TextureLoader();
		this.loadedTexture;
		loader.load( irisData, ( texture ) => {
			this.loadedTexture = texture;
			this.create();
		});

	}

	create(){
		var geometry = new THREE.SphereGeometry( this.radius, this.detail, this.detail, 0, 6.283, 0, 2.6);
		var material = new THREE.MeshStandardMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
		this.white = new THREE.Mesh( geometry, material);
		this.add(this.white);
		var geometry2 = new THREE.RingBufferGeometry( this.radius*0.2, this.radius*0.57, this.detail, this.detail );
		var material2 = new THREE.MeshStandardMaterial( {
			map: this.loadedTexture,
			color:this.irisColor,
			//side: THREE.DoubleSide,
			alphaMap: this.loadedTexture,
			alphaTest:0.2,
			bumpMap: this.loadedTexture,
			bumpScale : 0.2
		} );
		this.iris = new THREE.Mesh( geometry2, material2 );
		this.add( this.iris );

		this.iris.rotation.x = 1.57;
		this.iris.rotation.z = 3.1416;
		this.iris.position.y = this.radius*-0.7;

		//this.iris.scale.z =this.iris.scale.y=this.iris.scale.x = 2;

		var geometry4 = new THREE.CircleBufferGeometry( this.radius*0.75, this.detail );
		var material4 = new THREE.MeshBasicMaterial( { color: 0x000000 } );
		this.pupil = new THREE.Mesh( geometry4, material4 );
		this.add( this.pupil );
		this.pupil.rotation.x = 1.57;
		this.pupil.position.y = this.radius*-0.6;


		var points = [];
		points.push(new THREE.Vector2(0, 0.4));
		points.push(new THREE.Vector2(this.radius*0.2, 0.4));
		points.push(new THREE.Vector2(this.radius*0.3, 0.39));
		points.push(new THREE.Vector2(this.radius*0.4, 0.37));
		points.push(new THREE.Vector2(this.radius*0.45, 0.3));
		points.push(new THREE.Vector2(this.radius*0.52, 0.2));
		points.push(new THREE.Vector2(this.radius*0.54, 0));

		var geometry3 = new THREE.LatheBufferGeometry( points , this.detail);
		var material3 = new THREE.MeshPhysicalMaterial( {

			side: THREE.DoubleSide,
			clearCoat : 0.2,
			clearCoatRoughness : 0.1,
			reflectivity : 0.7,
			envMap : this.reflection,
			envMapIntensity : 0.7,
			metalness: 0.5,

			bumpScale : 0.2,

			roughness : 0.4,

			color: 0x000000 ,
			blending:THREE.AdditiveBlending
		} );
		var lens = new THREE.Mesh( geometry3, material3 );
		this.add( lens );

		lens.position.y = this.radius*-0.85;
		lens.scale.y=-1;

		//var geometry5 = new THREE.SphereGeometry( this.radius*1.2, this.detail, this.detail, 0, 5, 0, 3.14);
		//var material5 = new THREE.MeshStandardMaterial( {color: "#332211", side: THREE.DoubleSide} );
		//this.mesh5 = new THREE.Mesh( geometry5, material5);
		//this.add(this.mesh5);
		//this.mesh5.rotation.z = 1.57;
		//this.mesh5.rotation.x = -0.7;



	}
}