var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	this.babyBody = new Image();

	this.babyTailTimer = 0;
	this.babyTailCount = 0;
	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;
}
babyObj.prototype.init = function(){
	this.x = canWidth * 0.5 - 50;
	this.y = canHeight * 0.5 + 50;
	this.angle = 0;
	this.babyBody.src = "./src/baby.png";
};
babyObj.prototype.draw = function(){
	this.x = lerpDistance(mom.x, this.x, 0.97);
	this.y = lerpDistance(mom.y, this.y, 0.97);

	//angle
	var deltaX = mom.x - this.x;
	var deltaY = mom.y - this.y;

	var beta = Math.atan2(deltaY, deltaX) + Math.PI;

	this.angle = lerpAngle(beta, this.angle, 0.6);	

	//tail count
	this.babyTailTimer += deltaTime;
	if(this.babyTailTimer > 50){
		this.babyTailCount = (this.babyTailCount + 1) % 8;
		this.babyTailTimer %= 50;
	}

	//eye count
	this.babyEyeTimer += deltaTime;
	if(this.babyEyeTimer > this.babyEyeInterval){

		this.babyEyeCount = (this.babyEyeCount + 1) % 2;
		this.babyEyeTimer %= this.babyEyeInterval;

		if(this.babyEyeCount == 0){
			this.babyEyeInterval = Math.random() * 1000 + 1500;
		}else{
			this.babyEyeInterval = 200;
		}
	}
	
	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	var babyTailCount = this.babyTailCount;
	var babyEyeCount = this.babyEyeCount;
	ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
	ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width * 0.5, -babyEye[babyEyeCount].height * 0.5);
	ctx1.drawImage(babyTail[babyTailCount], -babyTail[babyTailCount].width * 0.5 + 25, -babyTail[babyTailCount].height * 0.5);
	ctx1.restore();
}