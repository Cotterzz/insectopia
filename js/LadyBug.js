
class LadyBug extends THREE.Object3D{
	constructor(radius=10, detail=32, shellColor, spotColor, skinColor){
		super();
		this.radius = radius;
		this.detail = detail;
		this.spotColor = spotColor;
		this.shellColor = shellColor;
		this.skinColor = skinColor;
		var ipx = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAgACADAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EABgBAQEBAQEAAAAAAAAAAAAAAAABAwQC/9oADAMBAAIQAxAAAAHvvkohceVqkjXF1RCksoBP/8QAGRAAAgMBAAAAAAAAAAAAAAAAABEBEiAw/9oACAEBAAEFAsWGMccf/8QAFxEBAQEBAAAAAAAAAAAAAAAAEQAgMP/aAAgBAwEBPwHBERx//8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERIDD/2gAIAQIBAT8BxUUqKuP/xAAUEAEAAAAAAAAAAAAAAAAAAABA/9oACAEBAAY/Agf/xAAaEAACAwEBAAAAAAAAAAAAAAAAEQEgURBh/9oACAEBAAE/IaIKIenFAowUZX//2gAMAwEAAgADAAAAENCOTxZUl//EABgRAQEBAQEAAAAAAAAAAAAAABEAIAEQ/9oACAEDAQE/EMKUpeHI1//EABoRAAIDAQEAAAAAAAAAAAAAAAARASBhEFH/2gAIAQIBAT8QpsJ6aG3HI5HNf//EAB0QAQEAAgIDAQAAAAAAAAAAAAEAITFBYRBxkaH/2gAIAQEAAT8Q1Pk7fkVjyhdSQdhDGQsmBLcJcR61+21bm//Z";
		var inx = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAgACADAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAED/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEEA//aAAwDAQACEAMQAAAB30cSolSBQMOkAtkBR//EABkQAAMAAwAAAAAAAAAAAAAAAAABERAgMP/aAAgBAQABBQLSoqLicP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8BB//EABcRAQEBAQAAAAAAAAAAAAAAABEAIDD/2gAIAQIBAT8BwzMzw//EABQQAQAAAAAAAAAAAAAAAAAAAED/2gAIAQEABj8CB//EABkQAAIDAQAAAAAAAAAAAAAAAAARAVFhIP/aAAgBAQABPyHjY2EHFiUKKFFCzn//2gAMAwEAAgADAAAAECNABGbP8v/EABcRAAMBAAAAAAAAAAAAAAAAAAABESD/2gAIAQMBAT8QxGRkZGRERCLP/8QAGBEBAQEBAQAAAAAAAAAAAAAAEQABIFH/2gAIAQIBAT8Q4EIQl7Ozs7z/AP/EAB8QAAIBBAIDAAAAAAAAAAAAAAABESFBUZExYXGh8P/aAAgBAQABPxCSWTlskaHDgQWsTL+jrDtroS3RNHQ8EMNFyuEL5nMo/9k=";
		var ipy = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAgACADAREAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAECAwT/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQMC/9oADAMBAAIQAxAAAAHfvksAKQJVgS0lg68u8LP/xAAZEAACAwEAAAAAAAAAAAAAAAABAwAREjD/2gAIAQEAAQUC7JAjq1//xAAWEQEBAQAAAAAAAAAAAAAAAAAAAjD/2gAIAQMBAT8B2lT/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAjD/2gAIAQIBAT8B2tD/xAAWEAADAAAAAAAAAAAAAAAAAAAAITD/2gAIAQEABj8Cuj//xAAaEAEAAQUAAAAAAAAAAAAAAAABABEgMDFB/9oACAEBAAE/IcQVs6NwCH//2gAMAwEAAgADAAAAEESYTiciS//EABcRAAMBAAAAAAAAAAAAAAAAAAABETD/2gAIAQMBAT8Q2gRU/8QAGREBAAIDAAAAAAAAAAAAAAAAAQARICEw/9oACAECAQE/EOV4JjU3P//EABoQAQEAAwEBAAAAAAAAAAAAAAEAEBEhMWH/2gAIAQEAAT8QmMsSZTwbkTjhm7dH6hToKdC//9k=";
		var iny = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAgACADAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EABcBAQEBAQAAAAAAAAAAAAAAAAABAwT/2gAMAwEAAhADEAAAAe/PqAQoJFoCRdEAP//EABQQAQAAAAAAAAAAAAAAAAAAAED/2gAIAQEAAQUCB//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8BB//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8BB//EABQQAQAAAAAAAAAAAAAAAAAAAED/2gAIAQEABj8CB//EABoQAAICAwAAAAAAAAAAAAAAAAARECABQVH/2gAIAQEAAT8hpoVHKnHT/9oADAMBAAIAAwAAABB7PZ7b5LL/xAAYEQACAwAAAAAAAAAAAAAAAAABEBEgMP/aAAgBAwEBPxChxl//xAAUEQEAAAAAAAAAAAAAAAAAAABA/9oACAECAQE/EAf/xAAgEAEAAwABAwUAAAAAAAAAAAABABEhQTFRYYGRobHw/9oACAEBAAE/EC1iDr7xvrYEotqGcvMADi/UF4vJWr8x9M6w4PMBuqZq322WWrqvEqm38Q0aM7yxaSvD0n//2Q==";
		var ipz = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAgACADAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EABcBAQEBAQAAAAAAAAAAAAAAAAABBAP/2gAMAwEAAhADEAAAAe+jiWwMxAC4tJSUSgg//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAEREBIg/9oACAEBAAEFAssG6UqKdImT1//EABcRAQEBAQAAAAAAAAAAAAAAABEAIDD/2gAIAQMBAT8BwREcf//EABkRAAIDAQAAAAAAAAAAAAAAAAABERIgEP/aAAgBAgEBPwHFkSiyJXZ1/8QAFBABAAAAAAAAAAAAAAAAAAAAQP/aAAgBAQAGPwIH/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERUWEQIP/aAAgBAQABPyHxM1TGNWyNOxJ0IwiwjPr/2gAMAwEAAgADAAAAEDNH+7Gcm//EABkRAAMBAQEAAAAAAAAAAAAAAAABEVEQIP/aAAgBAwEBPxDicG6XhWFYVhEQi9f/xAAaEQACAwEBAAAAAAAAAAAAAAAAARExYRAg/9oACAECAQE/EONJ2JJUaGxobEslkifP/8QAHxAAAwAABgMAAAAAAAAAAAAAAAERECExQVFhcYGR/9oACAEBAAE/ENs8LRJ9FMmzrDUMm0cBypRK2fCLqT0RcIeUbFrp4wfZ/9k=";
		var inz = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAgACADAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EABgBAQEBAQEAAAAAAAAAAAAAAAABAwQC/9oADAMBAAIQAxAAAAHvvkohceVqkjXF1RCksoBP/8QAGRAAAgMBAAAAAAAAAAAAAAAAABEBEiAw/9oACAEBAAEFAsWGMccf/8QAFxEBAQEBAAAAAAAAAAAAAAAAEQAgMP/aAAgBAwEBPwHBERx//8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERIDD/2gAIAQIBAT8BxUUqKuP/xAAUEAEAAAAAAAAAAAAAAAAAAABA/9oACAEBAAY/Agf/xAAaEAACAwEBAAAAAAAAAAAAAAAAEQEgURBh/9oACAEBAAE/IaIKIenFAowUZX//2gAMAwEAAgADAAAAENCOTxZUl//EABgRAQEBAQEAAAAAAAAAAAAAABEAIAEQ/9oACAEDAQE/EMKUpeHI1//EABoRAAIDAQEAAAAAAAAAAAAAAAARASBhEFH/2gAIAQIBAT8QpsJ6aG3HI5HNf//EAB0QAQEAAgIDAQAAAAAAAAAAAAEAITFBYRBxkaH/2gAIAQEAAT8Q1Pk7fkVjyhdSQdhDGQsmBLcJcR61+21bm//Z";

		this.envloader = new THREE.CubeTextureLoader();
		this.textureCube = this.envloader.load( [ipx, inx, ipy, iny, ipz, inz], () => { this.create()} );
	}

	create(){
		this.createEyes();
		this.createShell();
		this.createHead();
		this.createBody();

		this.castShadow = true;
		this.receiveShadow = true;
	}

	createBody(){
		this.body1 = new Body(12, 32,this.skinColor );this.add(this.body1);
		this.body2 = new Body(12, 32,this.skinColor );this.add(this.body2);
		this.body3 = new Body(12, 32,this.skinColor );this.add(this.body3);


		this.body1.scale.z = this.body2.scale.z = this.body3.scale.z = 0.9;
		this.body1.scale.y = this.body2.scale.y = this.body3.scale.y = 1.8;
		this.body1.scale.x =  this.body3.scale.x = 1.3; this.body2.scale.x = 1.5;
		this.body1.rotation.x = -0.1;
		this.body3.rotation.x = 0.1;
		this.body1.position.z = 4;
		this.body2.position.z = 3;
		this.body3.position.z = 2;
		this.body1.position.y = this.radius*-0.3;
		this.body2.position.y = this.radius*-0.65;
		this.body3.position.y = this.radius*-1;
	}

	createHead(){
		this.head = new Head(6, 32,this.skinColor);
		this.add(this.head);
		this.head.position.y = this.radius*1.2;
		this.head.position.z =-2;
		this.head.castShadow = true;
		this.head.receiveShadow = true;
	}


	createEyes(){

		this.eyeL = new EyeBall(this.radius/5, this.detail, "#8888ff", this.textureCube);
		this.eyeR = new EyeBall(this.radius/5, this.detail, "#8888ff", this.textureCube);
		this.eyeL.position.y = this.eyeR.position.y = this.radius*1.2;
		this.eyeL.position.x = this.radius * 0.25;
		this.eyeR.position.x = this.radius * -0.25;
		this.eyeL.rotation.x = this.eyeR.rotation.x = 1.57
		this.eyeL.position.z = this.eyeR.position.z = this.radius/-3;
		//this.eyeL.rotation.z = 0.2;
		//this.eyeR.rotation.z = -0.2;
		this.add(this.eyeL);
		this.add(this.eyeR);
	}

	createShell(){
		var shellcanvas = document.createElement('canvas');
		shellcanvas.width = this.detail*16;
		shellcanvas.height = this.detail*16;
		var ctx = shellcanvas.getContext('2d');
		ctx.fillStyle = "#ffffff";//this.shellColor;
		ctx.fillRect(0, 0, shellcanvas.width, shellcanvas.height);
		//console.log(ctx);
		ctx.fillStyle = this.spotColor;
		ctx.arc(shellcanvas.width*0.2, shellcanvas.height*0.4, shellcanvas.height/10, (Math.PI/180)*0, (Math.PI/180)*360, false);
		ctx.arc(shellcanvas.width*0.4, shellcanvas.height*0.8, shellcanvas.height/20, (Math.PI/180)*0, (Math.PI/180)*360, false);
		ctx.fill();
		var texture = new THREE.Texture(shellcanvas);
		var geometry = new THREE.SphereGeometry( this.radius, this.detail, this.detail , 0, 1.57, 0, 2.6);
		var material = new THREE.MeshPhysicalMaterial( {
			map: texture,
			side: THREE.DoubleSide,
			//clearCoat : 0.2,
			//clearCoatRoughness : 0.1,
			reflectivity : 0.7,
			envMap : this.textureCube,
			envMapIntensity : 0.7,
			metalness: 0.5,
			metalnessMap: texture,
			bumpMap: texture,
			bumpScale : 0.2,
			color: this.shellColor,
			roughness : 0.4,
			roughnessMap : texture,

		} );
		texture.wrapS = THREE.RepeatWrapping;
    	texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set(0.5,1);
		texture.needsUpdate = true;
		this.shellL = new THREE.Mesh( geometry, material);
		this.shellR = this.shellL.clone();
		this.add(this.shellL);
		this.add(this.shellR);
		this.shellL.rotation.z = this.shellR.rotation.z = 3.1416;
		this.shellL.rotation.x = this.shellR.rotation.x = -0.1416;
		this.shellR.scale.x = -1;

		this.shellR.castShadow = true;
		//this.shellR.receiveShadow = true;
		this.shellL.castShadow = true;
		//this.shellL.receiveShadow = true;
	}
}