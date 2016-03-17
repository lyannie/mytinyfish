function momFruitsCollision(){
	for(var i = 0; i < fruit.num; i++){
		if(fruit.alive[i]){
			//caculate length;
			var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			if(l < 400){
				fruit.dead(i);
			}
		}
	}
}
//mom feed baby
function momBabyCollision(){
	var l = calLength2(mom.x, mom.y, baby.x, baby.y);
	if(l < 400){
		baby.babyBodyCount = 0;
	}
}