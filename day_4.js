// // ///////////////////////////////task1//////////////////////////////
// function myFunction(param1, param2) {
//     if (arguments.length !== 2) {
//         throw new Error("This function requires exactly two parameters.");
//     }
//     console.log(param1, param2);
// }
// try {
//     myFunction(1);
// } catch (e) {
//     console.error(e.message);
// }
// try {
//     myFunction(1, 2);
// } catch (e) {
//     console.error(e.message);
// }

// try {
//     myFunction(1, 2, 3);
// } catch (e) {
//     console.error(e.message);
// }
// /////////////////////////////////task1.2////////////////////////////
// function myFunction(...args) {
//     for (let i = 0; i < args.length; i++) {
//         if (typeof args[i] !== 'number') {
//             throw new Error(`Parameter at index ${i} is not a number.`);
//         }
//     }

//     console.log("All parameters are numbers:", args);
// }

// try {
//     myFunction(1, 2, 3);
// } catch (e) {
//     console.error(e.message);
// }

// try {
//     myFunction(1, '2', 3);
// } catch (e) {
//     console.error(e.message);
// }

// try {
//     myFunction(1, 2, true);
// } catch (e) {
//     console.error(e.message);
// }
// ///////////////////////////////////task2////////////////////////
// function parentFunction(func1, func2) {
//     console.log("I'm the parent function");
//     func1(func2);
// }

// function firstFunction(nextFunc) {
//     console.log("I'm the first function");
//     nextFunc();
// }

// function secondFunction() {
//     console.log("I'm the second function");
// }

// parentFunction(firstFunction, secondFunction);

// /////////////////////////////////////Dom 3///////////////////////

// function getNumberOfPersons() {
//     let numberOfPersons;
//     while (true) {
//         numberOfPersons = prompt("Enter the number of persons:");
//         if (!isNaN(numberOfPersons) && Number(numberOfPersons) > 0) {
//             return Number(numberOfPersons);
//         }
//         alert("Please enter a valid number greater than 0.");
//     }
// }
// function getPersonsInfo(numberOfPersons) {
//     const persons = [];
//     for (let i = 0; i < numberOfPersons; i++) {
//         const name = prompt(`Enter name for person ${i + 1}:`);
//         let age;
//         while (true) {
//             age = prompt(`Enter age for person ${i + 1}:`);
//             if (!isNaN(age) && Number(age) > 0) {
//                 age = Number(age);
//                 break;
//             }
//             alert("Please enter a valid age.");
//         }
//         persons.push({ name, age });
//     }
//     return persons;
// }
// function createTable(persons) {
//     let table = '<table border="1">';
//     table += '<tr><th>Name</th><th>Age</th></tr>';
//     persons.forEach(person => {
//         table += `<tr><td>${person.name}</td><td>${person.age}</td></tr>`;
//     });
//     table += '</table>';
//     return table;
// }

// const numberOfPersons = getNumberOfPersons();
// const persons = getPersonsInfo(numberOfPersons);
// const tableHTML = createTable(persons);

// document.write(tableHTML);