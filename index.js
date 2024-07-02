// Massivlarga oid masalalar 

// 1-masala

// function alifboTartibiniOzgartir(words) {
//     const filteredWords = words.filter(word => word.length > 5);
  
//     const transformedWords = filteredWords.map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
  
//     return transformedWords;
//   }
  
//   console.log(alifboTartibiniOzgartir(alifboTartibiniOzgartir(["apple", "banana", "orange", "kiwi", "melon"])));

// 2-masala

// function findFirstStudent(students) {
//     const firstStudent = students.find(student => student.age > 20);
//     if (firstStudent) {
//       return firstStudent.name.toUpperCase();
//     } else {
//       return "Bunday talaba mavjud emas";
//     }
//   }

//   console.log(findFirstStudent({ name: "John", age: 18 },
//     { name: "Jane", age: 22 },
//     { name: "Doe", age: 25 }));

// 3-masala 

//   function calculateTotalPrice(products) {
//     const totalPrice = products
//       .filter(product => product.price > 100)
//       .reduce((total, product) => total + product.price, 0);
    
//     return totalPrice;
//   }
  
// console.log(calculateTotalPrice([140, 120]));

// 4-masala

// function checkNumbers(numbers) {
//     const allPositive = numbers.every(number => number > 0);
//     const hasLargeNumber = numbers.some(number => number > 100);
//     let result;
//     if (allPositive) {
//       result = ("Barcha sonlar musbat");
//     } else {
//       result ("Musbat bo'lmagan sonlar bor");
//     } if (hasLargeNumber) {
//       result ("Katta son bor");
//     }
//     return result;
//   }

//   console.log(checkNumbers([1, 2, 3, 6]));

// 5-masala

// function squareElements(arr) {
//     const squaredArray = [];
    
//     arr.forEach(num => {
//       squaredArray.push(num ** 2);
//     });
  
//     return squaredArray;
//   }

//   console.log(squareElements([1, 2, 3, 4, 5])); 
  
// 6-masala

// function increaseSalaries(employees) {
//     const validSalaries = employees.filter(emp => emp.salary < 2000);
    
//     const newSalaries = validSalaries.map(emp => {
//       return {
//         ...emp,
//         salary: emp.salary * 1.1
//       };
//     });
  
//     const totalSalary = newSalaries.reduce((total, emp) => total + emp.salary, 0);
    
//     return totalSalary;
//   }
  
//   console.log(increaseSalaries([
//     { name: "John", salary: 1500 },
//     { name: "Jane", salary: 2200 },
//     { name: "Doe", salary: 1800 }
//   ]));
  
//7-masala

// function processStudents(students) {
//     const firstStudentWithHighScore = students.find(student => student.grade >= 80);
//     const highScorers = students.filter(student => student.grade >= 80);
    
//     const highScorerNames = highScorers.map(student => student.name.toUpperCase());
  
//     return {
//       firstHighScorer: {
//         name: firstStudentWithHighScore ? firstStudentWithHighScore.name : "Topilmadi",
//         age: firstStudentWithHighScore ? firstStudentWithHighScore.age : "Topilmadi"
//       },
//       allHighScorers: highScorerNames
//     };
//   }
  
//   console.log(processStudents([
//     { name: "John", age: 20, grade: 75 },
//     { name: "Jane", age: 22, grade: 85 },
//     { name: "Doe", age: 21, grade: 90 }
//   ]));

// Yozuvlarga oid.

// 1-masala

// function capitalizeString(str) {
//     return str.toUpperCase();
//   }
  
//   console.log(capitalizeString('oltinbek'));
  
// 2-masala

// function checkSubstring(str, substring) {
//     return str.includes(substring);
//   }
  
//   console.log(checkSubstring('Hello Oltinbek', 'bek')); 
  
// 3-masala

// function replaceSubstring(str) {
//     return str.replace('JavaScript', "JS");
//   }
  
//   console.log(replaceSubstring("I love JavaScript. JavaScript is awesome!"));
  
// 4-masala

// function reverseWords(str) {
//     const wordsArray = str.split(" ");
//     const reversedWordsArray = wordsArray.reverse();
//     const reversedString = reversedWordsArray.join(" ");
//     return reversedString;
//   }

//   console.log(reverseWords("Hello world! How are you?")); 
  
// 5-masala

function trimWhitespace(str) {
    return str.trim();
  }

  console.log(trimWhitespace("       Hello, world!     ")); 
  