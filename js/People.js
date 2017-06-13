function People(name,surname){
	this.name=name;
	this.surname=surname;
}

People.prototype.getFullName =function (name,surname){
	return this.name +" "+ this.surname;
	
} 

