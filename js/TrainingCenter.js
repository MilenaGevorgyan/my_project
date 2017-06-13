function TreaningCenter(name){
	this.name=name;
	this.stuff=[];
	this.Students=[];
	this.Teachers=[];
	this.Treaning=[];
}
TreaningCenter.prototype.addStaff=function(name,surname,prof){
	var staff1=new Staff(name,surname,prof);
	this.staff.push(staff1);
}
TreaningCenter.prototype.addStudents=function(name,surname){
	var students1=new Students(name,surname);
	this.students.push(students1);
}
TreaningCenter.prototype.addTeachers=function(name,surname,prof){
	var teachers1=new Teachers(name,surname,prof);
	this.teachers.push(teachers1);
}
