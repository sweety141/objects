// question-1
var book={
    "title" : "wings of fire",
    "author" : "APJ abdul kalam",
    "yearPublished" : "1995"
}
console.log(book);
console.log(book.author);
book['yearPublished'] = "2022";
console.log(book);
book["genre"] = "fiction";
console.log(book);
delete book.title;
console.log(book);

// question-2
var employee={
    "name" : "priya",
    "age" : "21",
    "position" : "software-developer",
    "salary" : "45000"
}
console.log(employee);
console.log(employee.position);
employee["salary"] = "50000";
console.log(employee);
employee["department"] = "HR";
console.log(employee);
delete employee.age;
console.log(employee);

// // question-3
var dress={
    "id" : "#3452",
    "name" : "kurti",
    "price" : "2000",
    "category" : "formal"
}
console.log(dress);
console.log(dress.price);
dress["category"] = "electronics";
console.log(dress);
dress["instock"] = "true";
console.log(dress);
delete dress.id;
console.log(dress);

// question-4
var car={
    "make" : "metal",
    "model" : "coupe",
    "color" : "white",
    "year" : "2003"
}
console.log(car);
console.log(car["make"]);
car["color"] = "black";
console.log(car);
car["engineType"] = "V6"
console.log(car);
delete car.year;
console.log(car);

// question-5
var student={
    "name" : "sravya",
    "age" : "14",
    "grade" : "A",
    "school" : "SVS public school"
}
console.log(student);
console.log(student['school']);
student["grade"] = "95";
console.log(student);
student["hobbies"] = "reading,sports";
console.log(student);
delete student.age;
console.log(student);

// question-6
const user = {
    username: "john_doe",
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Gotham",
        zip: "54321"
      }
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
  }
  console.log(user);
  console.log(user.profile.address["city"]);
  user.preferences["theme"] = "light";
  console.log(user);
  user.profile["phone"] = "678-9876";
  console.log(user);
  delete user.profile.address.zip;
  console.log(user);

// question-7
const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
  };
  console.log(company);
  console.log(company.employees["1"].contact["email"]);
  company.employees[0].contact["phone"] = "7654-8765";
  console.log(company);
  company.employees[0].department = "engineering";
  console.log(company);
  delete company.location;
  console.log(company);


