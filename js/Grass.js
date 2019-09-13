class Grass extends THREE.Object3D{
	constructor(radius=1, detail=16, color="#00ff00", amount=30){
		super();
		this.radius = radius;
		this.detail = detail;
		this.color = color;
		this.amount = amount;
		this.blades = [];
		this.create();


	}


	create(){

				
		for (var i = 0; i < this.amount; i++) { 
			var newblade = new GrassBlade((this.radius/3)+(Math.random()*this.radius*0.66), this.detail, this.color)
			this.blades.push(newblade);
			this.add(newblade);
			newblade.rotation.y = Math.random()*6.283;
			newblade.position.z = Math.random()*this.radius;
			newblade.position.x = Math.random()*this.radius;

		}	
		

		
	}
}