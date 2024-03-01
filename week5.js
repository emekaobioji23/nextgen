/* accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.
Examples
[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

 */
//No time used chat gpt
/* def average_squared_abs_diff(arr1, arr2):
    total_diff = 0
    for a, b in zip(arr1, arr2):
        diff = abs(a - b) ** 2
        total_diff += diff
    return total_diff / len(arr1)

# Examples
print(average_squared_abs_diff([1, 2, 3], [4, 5, 6]))  # Output: 9.0
print(average_squared_abs_diff([10, 20, 10, 2], [10, 25, 5, -2]))  # Output: 16.5
print(average_squared_abs_diff([-1, 0], [0, -1]))  # Output: 1.0 */
const average_squared_abs_diff=(arr1, arr2)=>{
    let total_diff = 0
    for(i=0;i<arr1.length;i++){
        total_diff += Math.abs(arr1[i]-arr2[i])**2;
    }
    return total_diff / arr1.length;
}
console.log("average_squared_abs_diff([1, 2, 3], [4, 5, 6])",average_squared_abs_diff([1, 2, 3], [4, 5, 6]));
console.log("average_squared_abs_diff([10, 20, 10, 2], [10, 25, 5, -2])",average_squared_abs_diff([10, 20, 10, 2], [10, 25, 5, -2]));
console.log("average_squared_abs_diff([-1, 0], [0, -1])",average_squared_abs_diff([-1, 0], [0, -1]));

/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior" */

const toCamelCase=(str)=> {
    return str.split(/[-_]/).map((word, index) => {
        if (index === 0) {
            return word;
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    }).join('');
}

// Examples
console.log('\ntoCamelCase("the-stealth-warrior")',toCamelCase("the-stealth-warrior"));  // Output: "theStealthWarrior"
console.log('toCamelCase("The_Stealth_Warrior")',toCamelCase("The_Stealth_Warrior"));  // Output: "TheStealthWarrior"
console.log('toCamelCase("The_Stealth-Warrior")',toCamelCase("The_Stealth-Warrior"));  // Output: "TheStealthWarrior"

/* You probably know the "like" system from Facebook and other pages. People can "like"
blog posts, pictures or other items. We want to create the text that should be displayed next
to such an item.
Implement the function which takes an array containing the names of people that
like an item. It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases. */

const likes=(names)=> {
    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}

// Test cases
console.log("\nlikes([]):",likes([]));                                 // Output: "no one likes this"
console.log('likes(["Peter"]):', likes(["Peter"]));                          // Output: "Peter likes this"
console.log('likes(["Jacob", "Alex"]):',likes(["Jacob", "Alex"]));                  // Output: "Jacob and Alex like this"
console.log('likes(["Max", "John", "Mark"]):',likes(["Max", "John", "Mark"]));            // Output: "Max, John and Mark like this"
console.log('likes(["Alex", "Jacob", "Mark", "Max"]):',likes(["Alex", "Jacob", "Mark", "Max"]));   // Output: "Alex, Jacob and 2 others like this"