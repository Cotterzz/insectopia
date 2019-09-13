class Body extends THREE.Object3D{
	constructor(radius=1, detail=16, color="#ffcc44"){
		super();
		this.radius = radius;
		this.detail = detail;
		this.color = color;
		this.create();

	}

	create(){
		var points = [];
		points.push(new THREE.Vector2(0, this.radius));
		points.push(new THREE.Vector2(this.radius*0.7, this.radius));
		points.push(new THREE.Vector2(this.radius, this.radius*0.8));
		points.push(new THREE.Vector2(this.radius*0.9, this.radius*0.5));
		points.push(new THREE.Vector2(this.radius*0.5, this.radius*0.2));


		points.push(new THREE.Vector2(0, 0));


		var geometry = new THREE.LatheBufferGeometry( points , this.detail);
		var material = new THREE.MeshStandardMaterial( {

			side: THREE.DoubleSide,

			metalness: 0.2,

			roughness : 0.8,

			color: this.color 
		} );

		this.body = new THREE.Mesh( geometry, material );
		this.add(this.body);
	}
}