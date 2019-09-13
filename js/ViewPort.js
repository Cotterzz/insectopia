class ViewPort extends THREE.Object3D{
    constructor() {
        super();
        this.scene = new THREE.Scene();
        //this.container = document.getElementById("container");
        this.renderer = new THREE.WebGLRenderer({canvas:document.getElementById("canvas3d"),antialias:true});

        //document.getElementById("canvas3d").style = 'transform: rotate(90deg)';
        this.renderer.physicallyCorrectLights = true;
    	this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type =THREE.PCFSoftShadowMap; //THREE.BasicShadowMap; //// THREE.PCFShadowMap; 
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    	this.scene.background = new THREE.Color( 0x7799ff );
    	//this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera = new THREE.OrthographicCamera(window.innerWidth/-2, window.innerWidth/2, window.innerHeight/2, window.innerHeight/-2, -10000, 50000);
    	this.scene.add(this.camera);
    	this.camera.position.set(0, 0,100);
    	//this.camera.near = 0.0001;
    	this.camera.lookAt(this.scene.position);
    	this.orbitcontrols = new THREE.OrbitControls(this.camera, document.getElementById("canvas3d"));
        this.plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(500, 500, 8, 8), new THREE.MeshBasicMaterial({color: 0xff00ff}));

        this.lights = new THREE.Object3D();

        //THREE.RectAreaLightUniformsLib.init();

        //var width = 300;
		//var height = 100;
		//var intensity = 0.5;
		//var rectLight = new THREE.RectAreaLight( 0x00ff00, intensity,  width, height );
		//rectLight.position.set( 0, -100, 50 );
		//rectLight.lookAt( 0, 0, 0 );
		//this.lights.add( rectLight )
		
		//rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
		//rectLight.add( rectLightHelper );

    	this.light = new THREE.AmbientLight("#ffffff", 2);
    	this.lights.add(this.light);

        this.light1 = new THREE.PointLight("#00ff00",400,0,2);
        this.light1.position.set(-50, -200, 100);
        this.lights.add(this.light1);

        this.light2 = new THREE.PointLight("#ffffff",500,0,1);
        this.light2.position.set(100, 200, 100);
        this.lights.add(this.light2);

        //this.light1.castShadow = true;
        this.light2.castShadow = true;
        this.light2.receiveShadow = true;
        //this.light1.receiveShadow = true;
        this.scene.add(this.lights)

        global.camera = this.camera;
        global.viewport = this;
        
        window.addEventListener( 'resize', (event) => { this.onWindowResize(event) }, false );
        document.addEventListener( 'mousemove', (event) => {this.onDocumentMouseMove(event)}, false );
       

    	if(global.VR){
            this.renderer.vr.enabled = true;
            document.body.appendChild( WEBVR.createButton( this.renderer ) );
    		this.vranimate()}
    	else {
    		this.animate();
			this.plane.visible = false;
			this.scene.add(this.plane);
    	};
    }

    onDocumentMouseMove(event){
        global.shaderLayer.mousemove( event.pageX, event.pageY);
    }

    onWindowResize(event){
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.dispatchEvent({ type: "resize" });
    }

    animate(){ requestAnimationFrame(() => { this.animate() } ); this.render(); } // in normal mode, this is called every frame, and calls the render function for every frame

	vranimate(){ this.renderer.setAnimationLoop( () => { this.render() } )} // in VR mode, this is called once, and render is called every frame

    render(){ // this is called every frame, in both VR and standard mode, and the code is shared by both
        this.renderer.render(this.scene, this.camera);
        this.dispatchEvent({ type: "enterframe" });
    }
}