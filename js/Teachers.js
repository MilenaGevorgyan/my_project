function Teachers(name,surname,prof){
	People.call(this,name,surname)
	this prof=prof;
}
Teachers.prototype=Object.create(People.prototype);
Teachers.prototype.constructor=Teachers;