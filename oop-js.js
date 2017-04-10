function Person(first_name, last_name, age, gender) {
  this.first_name = name;
  this.last_name = last_name;
  this.age = age;
  this.gender = gender;

  this.displayData = function () {
  	console.log(this.first_name, this.last_name, this.age, this.gender);
  };
}


function Employee(first_name, last_name, age, gender, company, designation, salary, department, project_num) {
	Person.call(this, first_name, last_name, age, gender);
	this.company = company;
	this.designation = designation;
	this.department = department;
	this.project_num = project_num;
	this.salary = salary;
	
	//computeBonus Uses closure to encapsulate how bonus is computed.
	var computeBonus = function() { 
		if(this.project_num > 3){
			this.salary = this.salary * 1.3;
			return this.salary;
		}
		else{
			return "Not Eligible for Bonus";
		}
		
	};
	this.newSalary = function () {
	  var payAfterBonus = computeBonus();
	  return payAfterBonus;
	  
	}


	Employee.prototype = Object.create(Person.prototype);
	Employee.prototype.constructor = Employee;

	Employee.prototype.displayData = function() {
		console.log(this.first_name, this.last_name, this.age, this.gender, this.company, this.designation, this.salary,this.department);

	};


}


function Student(first_name, last_name, age, gender,school, student_num, level, major,cgpa) {
	Person.call(this, first_name, last_name, age, gender);
	this.school = school;
	this.student_num = student_num;
	this.level = level;
	this.major = major;
	this.cgpa = cgpa;

	this.ranking = function () {
  	var rank = '';
  	if(3.50 <= this.cgpa <= 4.00){
  		rank = 'First Class';
  	}else if(3.00 <= this.cgpa <= 3.49){
  		rank = 'Upper Second Class';
  	}else if (2.50 <= this.cgpa <= 2.99) {
  		rank = 'Lower Second Class'
  	}else{
  		rank = 'Third Class';
  	}
  	return rank;
  };

  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;

  Student.prototype.displayData = function(){
  	console.log(this.first_name, this.last_name, this.age, this.gender, this.school, this.student_num, this.level, this.major, this.cgpa);
  };
}




