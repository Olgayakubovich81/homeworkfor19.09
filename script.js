// 1 уровень сложности: 1. Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

function oddoreven(a,b) {

    if (a %2===0 && b%2===0) 
    
    { return a*b;}

else if (a %2!==0 && b%2!==0) 
{return a+b;} 

if (b %2 !==0 ) {
return b;}

 return a;}


    
console.log (oddoreven (2, 2))
console.log (oddoreven (3, 3))
console.log (oddoreven (5, 6))
console.log (oddoreven (6, 5))




// Написать  функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

function seconds_to_days (seconds) 
{
    days = seconds / (24 * 60 * 60)  
    return days }

console.log (seconds_to_days (178000))


// Написать функцию isPrime, которая принимает число и возвращает true, если оно простое (имеет только два делителя: 1 и само число), и false в противном случае.



function isPrime (num) {
            if (num < 100) {
          return false;
        }
      
        for (let i = 1; i < num; i += 1) {
          if (num % i === 0) {
            return true;
          }
        }
      
        return false;
      }
      console.log (isPrime (16))


// Написать функцию, которая в качестве аргументов получает два числа и выводит в консоль наименьшее.

function oneortheOther (a, b) {
    if (a<b) {
        return a;}
        
        else { 
            return b;
        }
        
    }
console.log (oneortheOther (5,8))

// Написать  функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 

// function fromSmalltoBig (a, b) {
//     let array = []
  
//     let min = a 
//     let max = b 
//     if (a > b) { 
//       min = b
//       max = a
//     }
//       for(let i = min; i <= max; i++) {
//       array.push(i)
//     }
//       return array;
//   }
//     console.log (fromSmalltoBig (4,10))


    
function fromBigtoSmall (a, b) {
    let array = []
  
    let min = a 
    let max = b 
    if (a > b) { 
      min = b
      max = a
    }
      for(let i = max; i>=min; i--) {
      array.push(i)
    }
      return array;
  }
    console.log (fromBigtoSmall (4,10))



    



