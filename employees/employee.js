//define the actions of the employee object,method
function printEmployee()
{
    var name_line = "<td>" + this.name + "</td>";
    var title_line = "<td>" + this.title + "</td>";
    var phone_line = "<td>" + this.phone + "</td>";

    var row = "<tr>" + name_line + title_line + phone_line + "</tr>";

    document.write(row);
}


//define an object using a constructor function
function Employee(name, title, phone)
{
    //list of attributes for this object
    this.name = name;
    this.title = title;
    this.phone = phone; 
    this.phone = phone;
    //assign the method to the object
    this.printEmployee = printEmployee;
}


//create employee objects
var nick = new Employee("Nick", "Instructor", "(999)-872-3445");
var lisa = new Employee("Lisa", "Teacher", "(999)-888-2211");
var mike = new Employee("Mike", "Boxer", "(999)-821-1234");

//display the employees information
//nick.printEmployee();
//lisa.printEmployee();
//mike.printEmployee();

//create an array of employee names
var empArray = [nick.name, lisa.name, mike.name];

var empArray = empArray.sort();
for(var counter = 0; counter < empArray.length; counter++)
{
    document.write(empArray[counter] + "<br>");
}