function Staff(name,surname,prof){
	People.call(this, name,surname)
	this.prof=prof;
}

Staff.prototype =Object.create(People.prototype);
Sraff.prototype.constructor=Staff;


 