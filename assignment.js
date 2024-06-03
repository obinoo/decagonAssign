// Write a program that determines if a given year is a leap year.
//  A leap year is divisible by 4 but not by 100 unless also divisible by 400.

let year = 2023;

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
   console.log(year + " " + "is a leap year")
}else{
   console.log(year + " " + "is not a leap year")
}


//  Write a function that finds the largest of three given numbers.

function largestNumber(){
    let nums = [1,2,3];
    let max = nums[0];

    for(i = 0; i <= nums.length; i++){
        let large = nums[i];
      if(large > max){
        max = large;
      }
    }
    console.log(max + " " + "is the largest number");
 }
 largestNumber();


   // Write a function that checks if a person is eligible to vote based on their age.
function eligible(){
    let age = 6;
   
    if(age >= 18){
   
       console.log("Eligible to vote")
    }else{
       console.log("Relax till you are old enough to vote")
    }
   }
   eligible();


   // Write a function that prints numbers from 1 to 100. For multiples of 3,
//  print "Fizz" instead of the number, and for multiples of 5, print "Buzz".
//   For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function myMultiples(){
    let i;
    for(i = 0; i <= 100; i++){
        console.log(i);
        if(i % 3 == 0){
            console.log(i + " " + "is a multiple of 3")
        }if(i % 5 == 0){
            console.log(i + " " + "is a multiple of 5")
        }if(i % 3 == 0 && i % 5 == 0){
            console.log(i + " " + "they are both multiples of 3 and 5")
        }
    }
}
myMultiples();


// Implement the function calculateAverage(num1, num2, mum3) 
// that takes three numbers and calculates the average

function calculateAverage(num1, num2, num3){
    let num = num1 + num2 + num3; 
    console.log(num/3);
   }
   calculateAverage(2, 4, 6)