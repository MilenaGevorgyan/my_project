function Students (name, surname){
	People.call(this,name,surname)
}

Students.prototype=Object.create(People.prototype);
Students.prototype.constructor=Students;