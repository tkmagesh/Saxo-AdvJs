function Employee(id,name,salary){
  var _id = id,
      _name = name,
      _salary = salary;
  if (this.constructor.name !== "Employee")
     return new Employee(id,name,salary);
  //Do validations
  this.id = function(){
     if (arguments.length === 0) return _id;
     //do validation
     _id = arguments[0];
  };
  this.name = function(){
     if (arguments.length === 0) return _name;
     //do validation
     _name = arguments[0];
  };
  this.salary = function(){
     if (arguments.length === 0) return _salary;
     //do validation
     _salary = arguments[0];
  };
}