//---------------------------------------------------------------------
// Task for getting certificate on freeCodeCamp.org
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#javascript-algorithms-and-data-structures-projects
//---------------------------------------------------------------------
//Is string polindrome algorithm
//only lowercases and numbers can be in string
//if there are any special symbols or spaces they are removed
//if there are any uppercases they are changed to lowercase
function palindrome(str) {
  str=str.toLowerCase();
  str=str.replace(/[^a-z0-1]/g, "");
  let strSize=str.length-1;
  let ans=false;
  for(let i=0; i<strSize;i++){
    if(str[i]==str[strSize-i]){
      ans=true;
    }
    else
      return false;
  }
  return ans;
}
//Some testing
console.log(palindrome("eye")); //true
console.log(palindrome("_eye")); //true
console.log(palindrome("race car")); //true
console.log(palindrome("not a palindrome")); //false
console.log(palindrome("A man, a plan, a canal. Panama")); //true
console.log(palindrome("never odd or even"));//true
console.log(palindrome("nope")); //false
console.log(palindrome("almostomla")); //false
console.log(palindrome("My age is 0, 0 si ega ym.")); //true
console.log(palindrome("1 eye for of 1 eye.")); //false
console.log(palindrome("0_0 (: /-\ :) 0-0")); //true
console.log(palindrome("five|\_/|four")); //false
//---------------------------------------------------------------------
//Algorithm to convert integer to roman number
function convertToRoman(num) {
  const units=["","I","II","III","IV","V","VI","VII","VIII","IX"];
  const tens=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  const hundreds=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  const thousands=["","M","MM","MMM"];
  let roman=thousands[Math.floor(num/1000)]+hundreds[Math.floor(num/100%10)]+tens[Math.floor(num/10%10)]+units[num%10];
  return roman;
}
//Some testing
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(501));
console.log(convertToRoman(36));
//---------------------------------------------------------------------
//ROT13 deciphering algorithm
function rot13(str) {
  let ans="";
  let length = str.length;
  let asci;
  for(let i=0; i< length;i++){
    asci=str[i].charCodeAt();
    if(asci>64&&asci<91){
       if(asci+13>=91){
          ans+=String.fromCharCode(asci+13-26);
       }
       else{
         ans+=String.fromCharCode(asci+13);
       }
    }
    else{
      ans+=String.fromCharCode(asci);
    }

  }
  return ans;
}
//Some testing
console.log(rot13("SERR PBQR PNZC"));//FREE CODE CAMP
console.log(rot13("SERR CVMMN!"));//FREE PIZZA!
console.log(rot13("SERR YBIR?"));//FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));//THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
//---------------------------------------------------------------------
// function to find is given phone number is US phone number
function telephoneCheck(str) {
  let regex= /1{0,1}\s{0,1}((\([0-9]{3}\))|([0-9]{3}))[-]{0,1}[ ]{0,1}[0-9]{3}[- ]{0,1}[0-9]{4}/;
  return regex.test(str) && str.match(regex)[0]===str;
}
//Some testing
console.log(telephoneCheck("1 555)555-5555"));//false
console.log(telephoneCheck("1 555-555-5555"));//true
console.log(telephoneCheck("555-555-5555"));//true
console.log(telephoneCheck("5555555555"));//true
console.log(telephoneCheck("555-555-5555"));//true
console.log(telephoneCheck("(555)555-5555"));//true
console.log(telephoneCheck("1(555)555-5555"));//true
console.log(telephoneCheck("123**&!!asdf#"));//false
//---------------------------------------------------------------------
//algorithm To find how much money we should give back to our customer by diffrent bills
const Unit = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price * 100;
  let changeCheck = change;
  let ans = {status: '',change: []}
  let cidSum = 0;

  let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();

  filteredCid.forEach(element => {
    let currSum = element[1] * 100;
    cidSum += currSum;
    let amount = 0;

    while (change >= Unit[element[0]] && currSum > 0) {
      amount += Unit[element[0]];
      change -= Unit[element[0]];
      currSum -= Unit[element[0]];
    }

    if (amount !== 0) {
      ans.change.push([element[0], amount / 100]);
    }
  });

  if (change > 0) {

    ans.status = 'INSUFFICIENT_FUNDS';
    ans.change = [];
  } else if (change == 0 && changeCheck == cidSum) {
    ans.status = 'CLOSED';
    ans.change = cid;
  } else {
    ans.status = 'OPEN';
  }

  return ans;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
