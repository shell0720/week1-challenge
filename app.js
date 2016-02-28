 $(document).ready(function(){
   $("#employeeForm").on("submit",function(event){
    event.preventDefault();


//accept input value and store them into object
    var val = {};
    $.each($("#employeeForm").serializeArray(),function(i, field) {
      val[field.name]= field.value;
    });

//empty the input
    $("#employeeForm").find("input[type=text]").val("");

//object stored in the array
    employeeArray.push(val);

//append the input info to the DOM
    $(document).ready(function(){
      for(var i = 0; i < employeeArray.length; i++){
        appendDom(employeeArray[i]);
        //create new var to form a new array to prevent duplicate DOM appendings
        var newVal = employeeArray.shift();
        newEmployeeArray.push(newVal);
      }
    });

//append the object and delete button to DOM
   function appendDom(object){
    $('.people').append('<div class="person"></div>');
    var $el = $('.people').children().last();

    $el.append('<h2>' + "firstname: " + object.firstname + '</h2>');
    $el.append('<h2>' + "lastname: " + object.lastname + '</h2>');
    $el.append('<p>' + "employee id: " + object.id + '</p>');
    $el.append('<p>' + "job title: " + object.title + '</p>');
    $el.append('<p>' + "annual salary: " + object.salary +'</p>');
    $el.append("<button class='delete'>Delete</button>");
  }

//add delete button function
  $(document).ready(function(){
   $(".person").on('click', '.delete', deleteClick);

  });

  function deleteClick() {
  $(this).parent().remove();
  }
//run the function
    totalSalary();
  });

//run the function for the first time
totalSalary();

});


//set new variables
var employeeArray = [];
var newEmployeeArray = [];

//salary counting function
function totalSalary(){
  var salaryTotal = 0;
  var monthlySalary = 0;
  for (var i =0; i< newEmployeeArray.length; i++) {
    var employee = newEmployeeArray[i];
    salaryTotal += parseInt(employee.salary);
    monthlySalary = salaryTotal/12;
  }
$(".totalEmployeeSalary").text("Employee Annual Total Salary: "+ salaryTotal +", Monthly Total Salary: " + monthlySalary);
}
