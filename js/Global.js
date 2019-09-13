class Global {
    constructor() {
		this.VR = false;
		this.originX = 0;
		this.originZ = 0;
		this.originY = 0;
		this.unit = 1;
		if(this.VR){
			this.originZ = -0.5;
			this.originY = 1.5;
			this.unit = 0.02;
		}
		this.PI = 3.1415926535;
		this.ETA = 1.5708;
		this.TAU = 6.283184;
		this.TURN = 360;
		this.HTURN = 180;
		this.QTURN = 90;
		this.RADIAN = 57.29579;
	}
}