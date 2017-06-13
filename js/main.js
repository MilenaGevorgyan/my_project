
/*var mic=new TrainingCerter(name);
mic.addStaff()



var st1 = new Student();
mic.addStudent(st1);
var stf1 = new Staff("");
stf1.prof;

mic.addStaff(stf1)*/
let click=false;
$("#stuff").click(function(){
	if(click===false){
		$("#stuf").show(0);
		$("#student").hide(0);
		$("#teacher").hide(0);
		click=true;
	}
	else{
		$("#stuf").css({"display":"none"});
		click=false;
	}	
});
$("#students").click(function(){
	if(click===false){
		$("#stuf").hide(0);
		$("#student").show(0);
		$("#teacher").hide(0);
		click=true;
	}
	else{
		$("#student").css({"display":"none"});
		click=false;
	}	
});
$("#teachers").click(function(){
	if(click===false){
		$("#stuf").hide(0);
		$("#student").hide(0);
		$("#teacher").show(0);
		click=true;
	}
	else{
		$("#teacher").css({"display":"none"});
		click=false;
	}	
});