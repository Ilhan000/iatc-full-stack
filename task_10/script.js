// 1. Write program that will reverse string: 'Hello world' => 'dlrow olleH'
// let string = "Hello world"
// string = [...string].reverse().join("");

// console.log(string); 
    

// 2. Write program to repeat every character in string 3 times: 'Hello world' => 'HHHeeellllllooo wwwooorrrlllddd!!!'{
    // const str = 'Hello world';
    // const repeatNTimes = (str, n) => {
    //    let res = '';
    //    for(let i = 0; i < str.length; i++){
         
    //       res += str[i].repeat(3);
    //    };
    //    return res;
    // };
    // console.log(repeatNTimes(str,3));


// 3. Write program to repeat given string n times: 'Hello world', 3 => 'Hello worldHello worldHello world'
// const str = 'Hello world'
// let result = str.repeat(3)
// console.log(result)


// 4. Write program to find the first not repeated character: 'abacddbec' => 'e'
// const string = "abacddbec";
// let index = -1;
// let fnc = ' ';
 
// if(string.length == 0){
// console.log("empty string");
// }
 
// for (let i of string) {
//     if (string.split(i).length - 1 === 1) {
//         fnc = i;
//         break;
//     } else {
//         index += 1;
//     }
// }
// if (index === string.length-1) {
//     console.log("All characters are repeating.");
// } else {
//     console.log(`First not repeated character is ${fnc}`);
// }

// 5. Write program to find the first repeated character: 'abacddbec' => 'a'

// 6. Write program to find the count of each character: 'abacddbec' => {a: 2, b: 2, c: 1, d: 3, e: 1}

// 7. Write program that truncates string in a given length: 'Hello world', 5 => 'Hello...'
// const string = 'Hello world'
// const truncate = (string,len) => {
//     if (string.length > len) {
//        if (len <= 3) {
//           return string.slice(0, len - 3) + "...";
//        }
//        else {
//           return string.slice(0, len) + "...";
//        };
//     }
//     else {
//        return str;
//     };
// }
// console.log(truncate(string,5))
  

// 8. Write program that truncates string in a given length, but it should not break the word: 'Hello world, nice talking to you', 20 => 'Hello world, nice...'
// const string = 'Hello world,nice talking to you'
// const truncate = (string,len) => {
//     if (string.length > len) {
//        if (len <= 3) {
//           return string.slice(0, len - 3) + "...";
//        }
//        else {
//           return string.slice(0, len) + "...";
//        };
//     }
//     else {
//        return str;
//     };
// }
// console.log(truncate(string,17))

// 9. Create a program to calculate the sum of the elements in an array of numbers: [1, 2, 3, 4, 5] => 15
// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((accumulator, value) => {
//   return accumulator + value;
// }, 0);

// console.log(sum);


// 10. Create a program to calculate the average of the elements in an array of numbers: [1, 2, 3, 4, 5] => 3
// arry = [1, 2, 3, 4, 5];

// function calculateAverage(array) {
//     var total = 0;
//     var count = 0;

//     array.forEach(function(item, index) {
//         total += item;
//         count++;
//     });

//     return total / count;
// }

// console.log(calculateAverage(arry));

// 11. Create a program to find the maximum number in an array of numbers: [1, 2, 3, 4, 5] => 5
// Array[1,2,3,4,5]
// console.log(Math.max(1,2,3,4,5))

// 12. Create a program to find the minimum number in an array of numbers: [1, 2, 3, 4, 5] => 1
// Array[1,2,3,4,5]
// console.log(Math.min(1,2,3,4,5))

// 13. Create a program to find the second largest number in an array of numbers: [1, 2, 3, 4, 5] => 4

// 14. Create a program to find the second smallest number in an array of numbers: [1, 2, 3, 4, 5] => 2

// 15. Create a program to find the count of each element in an array of numbers: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] => {1: 2, 2: 2, 3: 2, 4: 2, 5: 2}

// 16. Create a program to find the sum of the odd numbers in an array of numbers: [1, 2, 3, 4, 5] => 9

// 17. Create a program to find the sum of the even numbers in an array of numbers: [1, 2, 3, 4, 5] => 6