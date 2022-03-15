//50.4
/*let tre = 0;
for(let i = 1; i <100; i++){
	if (tre < 100){
	tre = tre + i;
} else {
	 break;
}
console.log(i)
}*/

//54
/*let num = 46;
let f=  true;

for(let i = 2; i < num;i++){
	if(num % i == 0){
	f = false
}
}console.log(f)*/

//55.1
/*let num = 2;
for(let i = 1, j = 1; i < 1000;i++,j++){
	if(num < 1000){
	num = num * 3
}else{
	break
	
}
console.log(j)
}console.log(num)*/

//56.3
/*let str = '';
for(let i = 9 ; i > 1; i--){
	str += i
}
console.log(str)*/

//56.4
/*let str = '-';
for(let i = 1 ; i < 9; i++){
	str += i + '-'
}
console.log(str)*/

//57.1
/*for(let i = 10; i <1000; i++){
	let str = String(i);
	if(str[0] == 1 || str[0] == 2){
	console.log(i)
}
}*/

//57.2
/*let res = '';
for(let i = 1; i < 30; i++){
	res += i
}console.log(res)*/

//58.2
/*for(let i = 1; i < 4; i++){
	for(let j = 1; j < 4;j++){
	document.write(String(i) + String(j) + ' ')
}
}*/

//60.1
/*let arr = [];
for(let i = 0; i < 10; i++){
	arr[i] = i + 1
}console.log(arr)*/

//60.2
/*let arr = [];
for(let i = 0; i < 10; i++){
	arr[i] = 'x'
}console.log(arr)*/

//62.1
/*let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++){
	 arr[i] = arr[i]**2
}console.log(arr)*/

//62.3
/*let arr = [];
for(let i = 0 ; i < 10;i++){
	arr.push('x')
}console.log(arr)*/

//62.4
/*let arr = [1,5,6,-7,4,-45,-4];
let res = [];
for(let elem of arr){
	 if(elem > 0){
	 res.push(elem)
	}
}console.log(res)*/

//62.5
/*let arr = ['a', 'b', 'c', 'd', 'e'];
let res = []
for(let i = arr.length-1; i>=0;i--){
	res.push(arr[i])
}console.log(res)*/

//63.1 - 63.2
/*let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for(let key in obj){
	if(obj[key] <= 400){
	obj[key] = (obj[key] /100) *110
}else{
	obj[key] = obj[key]
}
}console.log(obj)*/

//63.3
/*let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};

for(let i = 0; i < arr1.length;i++){
	let key = arr1[i];
	let value = arr2[i];
	obj[key] = value
}
console.log(obj)*/

//63.4
/*let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let lok = 0;
let pok = 0;
let obj1 = {};
for(let key in obj){
	lok = lok + obj[key];
	obj1[obj[key]] = key;
}
for(let key in obj1){
	pok = pok + Number(obj1[key]);
	
}
console.log(lok)
console.log(pok)*/

//63.5
/*let obj = {'a': 1, 'b': 2, 'c': 3, 
	'd': 4, 'e': 5}; 
let jbo = {};
let arr = [];
let arr2 = [];
for(let key in obj){
	arr.push(obj[key])
	jbo[obj[key]] = key
}console.log(arr)
for(let key in jbo){
	arr2.push(jbo[key])
	
}console.log(arr2)*/

//63.6
/*let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr = [];
for(let key in obj){
let num = obj[key]
let num1 = String(num)
	if(num1[0] == 1 || num1[0] == 2){
	 arr.push(obj[key])
} else {
}
}
console.log(arr)*/

//63.7
/*let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};

	for(let i = 0; i < arr.length;i++){
	let keu = arr[i]
	obj[i + 1]  = keu
}


console.log(obj)*/

//63.8
/*let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};

	for(let i = 0; i < arr.length;i++){
	let keu = arr[i]
	obj[keu]  = i + 1
}


console.log(obj)*/

//64.1
/*let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let num = 0
for(let elem of arr){
	if(elem == 3 || elem == 2){
	num++
}
}console.log(num)*/

//65.3
/*let str = 'afgohiewowaafgoh';
let obj = {}
for(let i  = 0; i < str.length;i++){
	 if(obj[str[i]] === undefined){
	 obj[str[i]] = 1
	} else{
	obj[str[i]]++
}
}console.log(obj)*/

//66.2
/*let arr = [1,2,3,4,5];
for(let  i = 0; i < arr.length - 1;i++){
	console.log(arr[i] + arr[i+1])
}*/

//66.4
/*let arr = [1,2,3,4,5];
for(let  i = 2; i < arr.length ;i++){
	console.log(arr[i-2])
}*/

//66.5
/*let arr = [1,2,3,4,5];

for(let  i = 1; i < arr.length -1;i++){

	console.log(arr[i] +arr[i-1] + arr[i+1])

}*/

//67.1
/*let o = 0;
let t = 1;

for(let i = 0 ; i < 8; i++){
	
      let num = o + t
      o = t
      t = num
      console.log(num)

}*/

//67.2
/*let o = 0;
let t = 1;
let tr = 2;
for(let i = 0 ; i < 8; i++){
	
      let num = o + t + tr
      o = t
      t = tr
      tr = num
      console.log(num)

}*/

//68.1
/*let arr = [];
let str = '';

for(let i = 1 ; i < 5; i++){
	str += 'xx'
	arr.push(str)
}
console.log(arr)*/

//68.2
/*let arr = [];

for(let i = 1; i < 6; i++){

let str = '';
	for(let j = 0; j < i; j++){
        str+=i

}
arr.push(str)

}

console.log(arr)*/

//70.1
/*for(let i = 1; i < 100; i++){
	console.log(i)
}*/

//70.2
/*for(let i= 100; i > 0; i--){
	console.log(i)
}*/

//70.3
/*for(let i = 1; i < 100; i++){
	if(i % 2 == 0){
	console.log(i)
}
}*/

//70.4
/*let arr = [];
for(let i = 1; i< 10; i++){
	 arr[i] = 'x'
}console.log(arr)*/

//70.5
/*let arr = [];
for(let i = 0; i< 10; i++){
	 arr[i] = i + 1
}console.log(arr)*/

//70.6
/*let arr = [1,2,3,4,5,66,77,88,4,3,11];
for(let i = 0; i < arr.length ; i++ ){
	if(arr[i] < 10 && arr[i] >= 0){
	console.log(arr[i])
}
}*/

//70.7
/*let to = 0;
let arr = [1,2,4,5,6,7,8,4,5];
 for(let i = 0; i < arr.length; i++){
 let num = String(arr[i])
 if(num == 5){
 to++
}
}console.log(to)*/

//70.8
/*let arr = [1,2,3,4,5,66,77,88,4,3,11];
let num = 0;

for(let i = 0 ; i < arr.length; i++){

	num = arr[i] + num

}
console.log(num)*/

//70.9
/*let arr = [1,2,3,4,5,66,77,88,4,3,11];
let num = 0;

for(let i = 0 ; i < arr.length; i++){

	num = (arr[i]**2) + num
	
}
console.log(num)*/

//70.10
/*let arr = [1,2,3,4,5,66,77,88,4,3,11];
let num = 0;
let	nums = 0;

for(let i = 0 ; i < arr.length; i++){

	nums = arr[i] + nums
num = nums / Number(arr.length)

	
}
console.log(num)*/

//70.11
/*let num = 1;
let klo = prompt('num')
for(let i =  1; i <= Number(klo) ;i++){

	num = num *i


}	console.log(num)*/

//83
/*function func() {
	for(let i = 1; i < 100; i++){
	console.log(i)
}
}
func()*/

//84.2
/*function func(num){

	if(num > 0 ){

	console.log('++++')

} else {

	 console.log('----')
}
}

func(3)
func(-2)*/

//84.3
/*function func(n,nu,num){
	
	console.log(n+nu+num)

}

func(1,3,5)
func(3,6,7)*/

//84.4
/*let param1 = 1;
let param2 = 2;
let param3 = 3;

function func(n,nu,num){
	
	console.log(n+nu+num)

}

func(param1,param2,param3)
*/

//85
/*function func(num){
	return num**3
}

let res = func(3)
console.log(res)*/

//85.2
/*function func(num1){

	return num1**2

}

let res = func(3) +  func(2)
console.log(res)
*/

//85.3
/*function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}

let res=  round(sqrt(2));
console.log(res)*/

//85.4
/*function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

let res = sum(sqrt(2),sqrt(3),sqrt(4))
console.log(res)*/

//85.10
/*function func(num){
	for(let i = 1;i < 100;i++){
         
         if(num > 10){
         num = num / 2;
        
       }else{
       console.log(i)
        return num
         
     }
}
}
console.log(func(1000))*/

//85.11
/*function func(num1, num2) {
	
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
	
}

alert(func(3, 4));*/

//86.1
/*function func(arr){
	for(let elem of arr){
	if(!(elem % 2 == 0)){
	return false
}
}
return true
}

let are = [6,2,8,4,10];
let ares = [1,2,3,4,5];
console.log(func(are))
console.log(func(ares))*/

//86.2
/*function func(arr){
	for(let elem of arr){
	if(elem % 2 == 0){
	return false
}
}
return true
}

let are = [6,2,8,4,10];
let ares = [1,2,3,4,5];
let arese = [5,7,3,9,5];
console.log(func(are))
console.log(func(ares))
console.log(func(arese))*/

//86.3
/*function func(arr){
	for(let i = 0; i < arr.length - 1;i++){
	let one = String(arr[i]);
		let two = String(arr[i + 1])
		
	if(one === two){
	return true
}
}
return false
}

let are = [6,2,8,4,4,10];
let ares = [1,2,3,2,4,5];
let arese = [5,7,7,3,9,5];
console.log(func(are))
console.log(func(ares))
console.log(func(arese))*/

//88.1
/*function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	
	return true;
}

for(let i = 1; i < 100; i++){
	if(isPrime(i) == true){
	console.log(i)
}
}*/

//88.2
/*function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');
	
	for (let digit of digits) {
		sum += Number(digit);
	}
	
	return sum;
}




for(let i = 1; i <= 2030;i++){
	if(getDigitsSum(i) == 13){
	console.log(i)
}
}*/

//88.3
/*let nums = [123, 456, 789];

function revers(num){
let result = [];
	for (let num of nums) {
	result.push(String(num).split('').reverse().join(''));
}
return result
}
console.log(revers(nums))*/

//88.4
/*let num1 = 234;
let num2 = 531;

function func(n){

let nst = String(n).split('');
	let num = 0;
for (let digit1 of nst) {
	num += Number(digit1);
}
}

if (func(num1) == func(num2)) {
	alert('суммы цифр совпадают');
} else {
	alert('суммы цифр не совпадают');
}*/

//88.5
/*let nums = [12, 24, 35, 14];

for (let num of nums) {
	console.log(num + ': ' + getDivisors(num).join(', '));
}

function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	
	return result;
}*/

//89.1
/*function getSum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += Number(elem);
	}
	
	return sum;
}
function getDigits(num) {
	return String(num).split('');
}

console.log(getSum(getDigits(12345)))*/

//89.2
/*console.log( getAvg(getDivisors(24)) );

// Нахождение среднего арифметического:


let arr = [2,3,4,6,5]
function getAvg(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum = sum  + elem;
	}
	
	return sum / arr.length;
}


// Нахождение массива делителей числа:
function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	return result
}
console.log(getDivisors(24))*/

//90.1
/*let arr = [12, 19, 28, 13, 14, 345];
let result = [];

//код который будет делать массив из чисел
function masIsChi(num){
	return String(num).split('')
	
}



//код чтобы найти сумму массива
function sumMas(num){
	let sum = 0;
	for(let elem of num){
	sum = sum + Number(elem)
}
return sum
}
console.log(sumMas(['1', '2', '3', '4']))

//код проверяющий что сумма цифр массива равна от 1 до 9
function diapa(num){
let sum = sumMas(masIsChi(num))
	return sum > 1 && sum < 9
}

for(let elem of arr){
	if(diapa(elem)){
	result.push(elem)
}
}
console.log(result)*/

//91.4
/*function getOwnDivisors(num) {
	let result = [];
    
    for(let i = 1; i < num; i++){
    if(num % i == 0){
    result.push(i)
  }
  }
  return result
}


function getSum(num){
let res = 0;
	for(let elem of num){
       res = res + elem
}
return res
}


function isFreindly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2)) ;


	if (sum1 == num2 && sum2 == num1) {
		return true;
	} else {
		return false;
	}
}

 function getFriendly(){
let arr = [];
let arr1 = [];
 let res = '';
 for(let i = 210; i < 1300;i++){

  for(let j = 210; j < 1300; j++){

  if(isFreindly(i,j) && !(i == j) && i < j){
         
       arr = [i,j]
       arr1.push(arr)
}
}
}

return arr1
}

console.log(getFriendly())

function func(num1,num2){
	let arr = [num1,num2]
	return arr
}*/

//91.5
/*function getPerfect(){
	let arr = [];
for(let i = 1; i < 500; i++){
	if(i == getSum(getOwnDivisors(i))){
      arr.push(i)
	}
}
return arr
}
console.log(getPerfect())


function getOwnDivisors(num) {
	let result = [];
    
    for(let i = 1; i < num; i++){
    if(num % i == 0){
    result.push(i)
  }
  }
  return result
}
console.log(getOwnDivisors(24))

function getSum(num){
let res = 0;
	for(let elem of num){
       res = res + elem
}
return res
}
*/

//91.5
/*function getSimpleDivisors(num){
	let arr = [];

         let res = getOwnDivisors(num);

         for(let elem of res){

          if(pros(elem)){
            arr.push(elem)
          }
         }
         return arr
}
console.log(getSimpleDivisors(93))

function pros(num){
	
	for(let i = 2;i < num;i++){
		if(num % i ==  0){
          return false
		}
	}
	return true
}

function getOwnDivisors(num) {
	let result = [];
    
    for(let i = 1; i < num; i++){
    if(num % i == 0){
    result.push(i)
  }
  }
  return result
}
*/
//92.1
/*function inArray(elem,arr){
	return arr.indexOf(elem) !== -1
}

console.log(inArray(3,[1,2,3,4]))

function mas(arr1,arr2){
	let arr = [];
	for(let elem of arr1){
		if(inArray(elem,arr2)){
			arr.push(elem)
		}
	}
	return arr
}

console.log( mas([1, 2, 3,5], [2, 3, 4, 5]) );*/

//93.1
/*function inArray(elem,arr){
	return arr.indexOf(elem) !== -1
}

console.log(inArray(3,[1,2,3,4]))

function mas(arr1,arr2){
	let arr = [];
	for(let elem of arr1){
		if(!(inArray(elem,arr2))){
			arr.push(elem)
		}
	}
	return arr
}

console.log( mas([1, 2, 3,5,6], [2, 3, 4, 5,8]) );*/

//94.1
/*function delitel(num){
	let arr = [];
	for(let i = 2; i< num;i++){
        if(num % i == 0){
        	arr.push(i)
        }
	}
	return arr
}
console.log(delitel(24))

function naibolshee(arr){
//	let pos = arr.length 
   return  arr[arr.length - 1]
}

function getGreatestCommonDivisor(num1,num2){

         return naibolshee(delitel(num1)) + ':' + naibolshee(delitel(num2))
}

console.log(getGreatestCommonDivisor(12,24))*/

//94.2
/*function delitel(num){
	let arr = [];
	for(let i = 2; i< num;i++){
        if(num % i == 0){
        	arr.push(i)
        }
	}
	return arr
}
console.log(delitel(24))

function inArray(elem,arr){
	return arr.indexOf(elem) !== -1
}

function nad(num1,num2){
	let arr1 = delitel(num1)
		let arr2 = delitel(num2)

	let arr = [];
       for(let elem of arr1){
       	if(inArray(elem,arr2)){
       		return false
       	}
       }
       return true
}
console.log(nad(11,19))*/

//95.1
/*function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random(arr){
	return arr[getRandomInt(0,arr.length - 1)]
}
console.log(random([1,2,3,4,5,6,7,8,9]))*/

//95.2
/*function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = [1,2,3,4,5,6,7,8,9];
function random(arr){
	return arr[getRandomInt(0,arr.length - 1)]
}
let num1 = random(arr);
let num2 = random(arr);
console.log(num1 )
console.log( num2)
console.log(num1+  num2)*/

//96.1
/*function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function masRan(arr){
	let res = [];
	while(arr.length > 0){
		let random = getRandomInt(0,arr.length -1);
		let n = arr.splice(random,1)[0];

		res.push(n)
	}
	return res
}
console.log(masRan([1,2,3,4,5,6]))*/

//96.3
/*function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function range(num1,num2){
       let arr= [];
       let res = [];
       for(let i = num1; i < num2; i++){
       	arr.push(i)
       }
     
     while(arr.length > 0){
     	  let random = getRandomInt(0,arr.length-1);
       let n = arr.splice(random,1)[0];
       res.push(n)
      
     }
      return res
}
console.log(range(3,15))*/

//97.1
/*function randoms(arr,length){
	return first(shuffle(arr),length)
}

function first(arr,length){
	return arr.slice(0,length)
}



function shuffle(arr) {
	let result = [];
	
	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}
	
	return result;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randoms([1,2,3,4,5,6,7,8,9],4))*/

//98.1
/*function normalNum(num){
	let str = String(num);

	if(str.length == 5){
		str = '0' + str;
	}else if(str.length == 4){
		str = '00' + str
	}
	return str
}
console.log(normalNum(1001))


function isLucky(num){
	let str = normalNum(num);

	let str1 = Number(str[0]) + Number(str[1]) +Number(str[2]); 
	let str2 = Number(str[3]) + Number(str[4]) +Number(str[5]); 

	return str1 == str2
}
console.log(isLucky(1001))

function mas(){
	let res = [];
	for(let i = 1001; i < 999999;i++){
		if(isLucky(i)){
         res.push(i)
		}
	}
	return res
}
console.log(mas())*/

//99.1
/*function isLucky(num) {
	let chi = 0;
	let da = 0;

	let str = String(num);
	if(!(str.length %  2 == 0)){
		str= '0' + str;
	}
	//первая половина
	let half = str.length / 2;
	for(let i = 0; i < half;i++){
         chi = chi + Number(str[i])
       //  console.log(str[i])
	}
//вторая половина
	for(let i = str.length - 1; i > half-1;i--){
        da = da + Number(str[i]);
        // console.log(str[i])
	}
	
	return chi == da;
}

console.log(isLucky(12021))
console.log(isLucky(123213))
console.log(isLucky(1230321))*/

//99.3
/*function formStr(data, length) {
	let num = '';
	for(let i =1; i <= length;i++){
		num = num + data;
	}
	return num
}

console.log(formStr('0',8))*/

//99.4
/*function normalizeNum(num, digitsAmount) {
	let str = String(num);
	return formStr('0', digitsAmount - str.length) + str;
}

function formStr(data, length) {
	let num = '';
	for(let i =1; i <= length;i++){
		num = num + data;
	}
	return num
}
console.log(normalizeNum(123, 6)); // выведет '000123'
console.log(normalizeNum(1234, 6)); // выведет '001234'
console.log(normalizeNum(12345, 6)); // выведет '012345'
console.log(normalizeNum(123456, 6)); // выведет '123456'
*/

//99/++++++++++
/*function isLucky(num) {
	let chi = 0;
	let da = 0;

	let str = String(num);
	if(!(str.length %  2 == 0)){
		str= '0' + str;
	}
	//первая половина
	let half = str.length / 2;
	for(let i = 0; i < half;i++){
         chi = chi + Number(str[i])
       //  console.log(str[i])
	}
//вторая половина
	for(let i = str.length - 1; i > half-1;i--){
        da = da + Number(str[i]);
        // console.log(str[i])
	}

	return chi == da;
}

console.log(isLucky(12021))
console.log(isLucky(123213))
console.log(isLucky(1230321))

function mas(num){
	let res = [];

	for(let i = 100; i < 999999;i++){
		if(isLucky(i)){
			res.push(i)
		}
	}
return res
}
console.log(mas())*/

/*Задача 9
function func() {
	num = 2;
}

let num = 1;
func();
alert(num);
Задача 10*/
/*
function func() {
	let num = 2;
}

let num = 1;
func();
alert(num);*/
/*
function func(localNum) {
	alert(localNum);
}

func(1);
Задача 2



function func(localNum) {
	alert(localNum);
}

let num = 1;
func(num);
Задача 3


function func(localNum) {
	alert(localNum);
}

let num = 1;
func(num);
num = 2;
Задача 4 


let num = 1;

function func(localNum) {
	alert(localNum);
}

num = 2;
func(num);
Задача 5



function func(localNum) {
	localNum = 2;
}

let num = 1;
func(num);
alert(num);
Задача 6

 

function func(localNum) {
	num = 2;
}

let num = 1;
func(num);
alert(num);
Задача 7



function func(localNum) {
	let num = 2;
}

let num = 1;
func(num);
alert(num);*/

//103.1
/*function func(){
	return alert('!') 
}


alert(func)*/

/*let func1 = function() {
	return 1
}

let func2 = function() {
	return 2
}

console.log(func1()  +func2() )*/

//106.1
/*let arr = [
function (){return 1},
function (){return 2},
function (){return 3}
];

for(let elem of arr){
	console.log(elem())
}*/

//106.2
/*let arr = [
function (){return 1},
function (){return 2},
function (){return 3}
];

console.log(arr[0]() + arr[1]() + arr[2]())*/

//107.1
/*let obj = {
	f1: function (){
		return 1
	},
	f2: function (){
		return 2
	},
	f3: function (){
		return 3
	}
}
console.log(obj.f1()+obj.f2()+obj.f3())*/

//107.2
/*let obj = {
	f1: function (){
		return 1
	},
	f2: function (){
		return 2
	},
	f3: function (){
		return 3
	}
}
let num  = 0;
for(let key in obj){
	num = num  +obj[key]()
	console.log(num)
}*/

//107.3
/*let obj = {
	sum: function(num){
         let lo = 0;
         for(let elem of num){
         	lo = lo + elem
         }
         return lo
       },
   square:function(num){
   	let lo = 0;
   	for(let elem of num){
   		lo += elem**2
   	}
   	return lo
   },cub: function (num){
   	let lo = 0;
   	for(let elem of num){
   		lo += elem**3
   	}
   	return lo
   }
   }
	;

console.log(obj.sum([1,2,3,4]));
console.log(obj.square([1,2,3,4]));
console.log(obj.cub([1,2,3,4]));*/

//108.1
/*function lo(func1,func2,func3){
	console.log(func1() + func2() + func3())
}


lo(
	function(){return 1},
	function(){return 2},
	function(){return 3}
)*/

//108.2
/*function lo(func1,func2,func3){
	console.log(func1() + func2() + func3())
}

function f1(){
	return 1
}
function f2(){
	return 4
}
function f3(){
	return 6
}

lo(f1,f2,f3)*/

//108.3
/*function lo(func1,func2,func3){
	console.log(func1() + func2() + func3())
}

let f1 = function (){
	return 6
}
let f2 = function (){
	return 6
}
let f3 = function (){
	return 6
}

lo(f1,f2,f3)*/

//108.6
/*let func  = function(num){
	return num**3
}
test(func);

function test(func) {
	alert(func(3));
}*/

//108.6
/* function func(num){
	return num**3
}
test(func);

function test(func) {
	alert(func(3));
}*/

//108.9
/*function test(num, func1, func2) {
	return func1(num) + ';' + func2(num);
}

console.log(test(3,function(num){
      return  num**2
},function(num){
return	num**3
}))*/

//108.11
/*function test(arr,func){
	for(let i = 0; i < arr.length;i++){
		arr[i] = func(arr[i])
	}
	return arr
};

let res = test(
  [1,2,3,4],
  function(num){
  	return num**3
  }
	);
console.log(res)*/

//109.1
/*function lok(num1,num2){
	function cub(num){
	return	num**3
	}

   function square(num){
   	return num**2
   }

   return square(num1) + cub(num2)
}
console.log(lok(3,4))*/

//112.1
/*function func1(){
	return function(){
		return 1
	}
};

function func2(){
	return function(){
		return 2
	}
}
console.log(func1()() +  func2()())*/

//112.2
/*function func1(){
	return function(){
		return function(){
			return function(){
				return '!'
			}
		}
	}
};
console.log(func1()()()())*/

//112.3
/*function func(n1){
	return function(n2){
        return function(n3){
        	return n1+n2+n3
        }
	}
}

console.log(func(2)(3)(4))*/

//112.4
/*function func(n1){
	return function(n2){
        return function(n3){
        	return function(n4){
        	return	[n1,n2,n3,n4]
        	}
        }
	}
}

console.log(func(2)(3)(4)(5))*/

//114.1
/*function test(){
	let num = 1;
	return function(){
		console.log(num)
		num++;
		if(num > 10){
			alert('otshet okonchen')
		}
	}
}

let func = test();
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()*/

//115.1-2
/*let ers = (function(){
   
      let num  =1 ;

        return function(){
        	   if(num > 5){
        		num = num -5
        	}
          console.log(num);
        	num++
        }
})();
ers()
ers()
ers()
ers()
ers()
ers()
ers()
ers()
ers()
ers()*/

//116.1
/*function each(arr,callback){
	let res = [];
	
			res.push(callback(arr))
		
	
	return res
};

function callback(elem){
   elem.reverse();
   return elem
};
console.log(each([1,2,3,4,5],callback))*/

//116.2
/*function each(arr,callback){
	let res = [];
	for(let el of arr){
		res.push(callback(el))
	}

	return res
};

function callback(elem){
   return elem[0].toUpperCase() + elem.slice(1)
};

console.log(each(['ccc','weew','fgfg'],callback))*/

//116.3
/*function callback(el,ind){
	return el*ind
};

function each(arr,callback){
	let res = [];
	let i = 0;
	for(let el of arr){
        res.push(callback(el,i++))
	}
	return res
}
console.log(each([1,2,3,4,5],callback))*/

//116.4
/*function filter(arr,callback){
	let res = [];

	for(let el of arr){
		if(callback(el)){
			res.push(el)
		}
	}
	return res
};

function callback(el){
	if(el > 0){
		return el
	}

};
console.log(filter([1,2,-4,3,-2,5,6],callback))*/

//116.6
/*function filter(arr,callback){
	let res = [];

	for(let el of arr){
		if(callback(el)){
			res.push(el)
		}
	}
	return res
};

function callback(el){
	if(el.length < 4 && el.length > 0){
		return el
	}

};
console.log(filter(['1234','123','332','12323'],callback))*/

//116.7
/*function every(arr,callback){
	let res = [];
	let i  = 6;  
     for(let el of arr){
         res.push(callback(el));

     }
    for(let ol of res){

      if(ol == false){
      	i = i -1
      }
     }
      if(i < 6){
      	return false
      }else{
      	return true
      }


};

function callback(re){
      if(re > 0){
      	return true
      } else{
      	return false
      }
};

console.log(every([1,2,-3,4,-5],callback))*/

//117.8
/*function some(arr,callback){
	let res = [];
	let i  = 6;  
     for(let el of arr){
         res.push(callback(el));

     }
    for(let ol of res){

      if(ol == true){
      	i = i -1
      }
     }
      if(i < 6){
      	return true
      }else{
      	return false
      }


};

function callback(re){
      if(re > 0){
      	return true
      } else{
      	return false
      }
};

console.log(some([-1,-2,-3,-4,5],callback))*/

//117.9
/*function alternate(arr,callback1,callback2){
	let res= [];
	let i = 1
	for(let el of arr){
		if(!(i % 2 == 0)){
        res.push(callback1(el))
        i++
		} else if (i % 2 ==0){
			res.push(callback2(el))
			i++
		}
		console.log(i)
	}
	return res
}

function callback1(ell){
	return ell + '!'
}
function callback2(ell){
	return ell + '?'
}
console.log(alternate([1,2,3,4,5],callback1,callback2))*/

//118.1
/*let result = every([1, 2, 3, 4, 5], function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});
console.log(result)
let result1 = every([1,2,3,4,5],elem => elem > 0)
console.log(result1)*/

//119.1
/*let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

function ojo(object){
	let i = 6;
    
        for(let key in object){
        	console.log(object[key]);
        	i--;
        }
        if(i > 1){
        	ojo(object);

        }
}
ojo(obj)*/

//119.2
/*let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

function ojo(object){
	let i = 6;
    let res= 0;
        for(let key in object){
        	res = res +object[key]
        	i--;
        }
        if(i > 1){
        	ojo(object);

        }
        return res
}
console.log(ojo(obj))*/

//120.1
/*let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

function elmo(obj){
	for(let key in obj){
		if(typeof obj[key] == 'object'){
			elmo(obj[key])
		}else{
			console.log(obj[key])
		}
	}
};
elmo({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})*/

//120.2
/*let res = [];

function dlyamas(arr){


	for(let el of arr){
		if(typeof el == 'object'){
			dlyamas(el)
		}else{
      res.push(el)
		}
	}
return res
}
console.log(dlyamas([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]))*/

//120.3
/*
function dloobj(obj){
	let sum = 0;
 for(let key in obj){
 	if(typeof obj[key] == 'object'){
       sum+=dloobj(obj[key])
 	}else{
 		sum+=obj[key]
 	}
 }
 return sum
};

console.log(dloobj({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}))*/

//120.3
/*function dloobj(obj){
	let sum = '';
 for(let key of obj){
 	if(typeof key == 'object'){
       sum+=dloobj(key)
 	}else{
 		sum+=key
 	}
 }
 return sum
};

console.log(dloobj(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]))*/

//120.5
/*function dloobj(obj){
    for(let i = 0; i < obj.length;i++){
    	if(	typeof	obj[i] == 'object'){
    		obj[i] = dloobj(obj[i])
    	}else{
    		console.log(obj[i]**2)
    	}
    }

};

dloobj([1, [2, 7, 8], [3, 4], [5, [6, 7]]])*/

//121.1
/*let arr = [1,2,3,4,5,6];

let res = arr.map(function(elem){
	  return elem**3
});
console.log(res)*/

//121.2
/*let arr = ['as','asd','dwr'];
let res = arr.map(function(el){
	return el +  '!'
})
console.log(res)*/

//121.3
/*let arr = ['as','asd','dwr'];
let res = arr.map(function(el){
	return el.split('').reverse().join('')
})
console.log(res)*/

//121.4
/*let arr = ['123', '456', '789'];
let res  =arr.map(function(elem){
	elem = elem.split('')
	let re = elem.map(function(lu){
	return lu = Number(lu)
})
	return re
})

console.log(res)
*/

//121.5
/*let arr = [1,2,3,4,5];

let result = arr.map(function(elem, index) {
	return elem * index;
});

console.log(result);*/

//122.1
/*let arr = [1,2,3,4,5]
let sum = 0;

arr.forEach(function(elem){
	sum+= elem**2
});
console.log(sum)*/

//123.1
/*let arr = [-1,2,3,-4,5,6,-7];
console.log(arr.filter(elem => elem > 0))*/

//123.2
/*let arr = [-1,2,3,-4,5,6,-7];
console.log(arr.filter(elem => elem < 0))*/

//123.3
/*let arr = [10,2,30,40,5,6,7];
console.log(arr.filter(elem => elem >0 && elem < 10))*/

//123.4
/*let arr=  [ '123','1213','123213','312'];

console.log(arr.filter(elem => elem.length <5))*/

//123.5
/*let arr = [1,2,3,4,5,6,7];
console.log(arr.filter((elem,index) => elem*index < 30))*/

//123.6
/*let arr =  [1, 2, [3, 4], 5, [6, 7]];
let res = [];
console.log(arr.filter(elem => typeof elem == 'number'))*/

//123.7
/*let arr = [1, -2, 3, -4, -5];
console.log(arr.filter(elem => elem < 0).length)*/

//124.1
/*let arr = [1,2,3,4,-5,6];
let res = arr.every(elem => elem > 0);
console.log(res)*/

//124.2
/*let arr = [1,2,3,4];
let res = arr.every((elem,index) => elem*index < 30);
console.log(res)*/

//125.1
/*let arr = [-1,-2,-3,-4,5,-6];
let es = arr.some(el => el >0)
console.log(es)*/

//126.1
/*let arr = [1, 2, 3, 4, 5];

function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}

console.log(func(...arr))*/

//126.3
/*let arr = [1323, 232, 322, 432, 5233];
let min = Math.min(...arr)
console.log(min)*/

//130.1
/*function sredneeAriph(...rest){
	let sum = 0;
	let dlina = rest.length;
	for(let num of rest){
		sum+=num
	}
	return sum/dlina
}
console.log(sredneeAriph(1,2,3,4,5,6,7,8,9,10))
console.log(sredneeAriph(1,2,3,4,5,6,7,8,9))
console.log(sredneeAriph(1,2,3,4,5,6))*/

//130.2
/*let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result); // выведет [ [1, 2, 3,] [4, 5, 6], [7, 8, 9] ]
function unite(n,m,j){
	return [n,m,j]
}*/

//131.1
/*function array(elem,arr){
	return arr.indexOf(elem) !== -1
}

function inarr(elem,arr){
	for(let el of arr){
		if(!array(elem,el)){
			return false
		}
	}
	return true
}

function get(...arr){
	let res = [];
	let arr0 = arr.shift()

	for(let el of arr0){
		if(inarr(el,arr)){
			res.push(el)
		}
	}
	return res
}

let reess = get([1, 2, 3], [2, 3, 4], [4, 3, 2]);
console.log(reess);*/

//132.1
/*let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];


let [name,surname,department,position,salary] = arr;
console.log(name)
console.log(department)
console.log(salary)*/

//132.2
/*function func() {
	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}
let [name,surname,department,position,salary] = func();
console.log(name)
console.log(department)
console.log(position)*/

//132.3
/*let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];


let [,,department,position]  =arr;
console.log(department)
console.log(position)*/

//132.4
/*let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name,surname,...rol] = arr;
console.log(surname);
console.log(rol)*/

//132.5
/*let arr = ['Иван', 'Иванов', 'отдел разработки'];
let [name,surname,department,position = 'junior'] = arr;
console.log(name);
console.log(position)*/

//133.1
/*let options = {
	color: 'red',
	width:  400,
	height: 500,
};
let {color,width,height} = options;
console.log(color)
console.log(width)
console.log(height)*/

//134
/*function func(department, [plo,employee], [hg,ll,hired]) {
console.log(department)
console.log(plo)
console.log(employee)
console.log(hg)
console.log(ll)
console.log(hired)

}

func( 'отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31] );*/

//135.1
/*let date = new Date();

console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getDate());*/

//136.1
/*let date = new Date();

function null1(num){
	if(num >0 && num < 10){
		return '0' + num
	}else {
		return num
	}
}

let res = null1(date.getDate()) + '.' + null1(date.getMonth() +1) +'.' + date.getFullYear() + ' ' 
+ null1(date.getHours()) + ':' + null1(date.getMinutes()) + ':' + null1(date.getSeconds())
console.log(res)*/

//136.2
/*let date = new Date();

function null1(num){
	if(num >0 && num < 10){
		return '0' + num
	}else {
		return num
	}
}

let res = null1(date.getDate()) + '.' + null1(date.getMonth() +1) +'.' + date.getFullYear();

let result = res.split('.').reverse().join('/');
console.log(result)*/

//137.2
/*let date  = new Date();

let ned = date.getDay();

console.log( 7 - ned)*/

//138.1
/*let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];

let date = new Date();
let res = date.getMonth();
console.log(months[res])*/

//139.1
/*let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let date = new Date(2004,6,24);
let ko = date.getDay()
console.log(days[ko])*/
//140.1
/*let date = new Date(2025, 0, 1, 23, 59, 59);
console.log(date.getTime());*/

//140.2
/*let date1 = new Date(1988,2,1,12,59,59);
let date2 = new Date(2000,0,10,12,59,59);
console.log((date2.getTime() - date1.getTime())/(1000*60*60*24))*/

//140.3
/*let dr = new Date(2004,6,24,12,59,59);
let tek = new Date();
console.log((tek.getTime() - dr.getTime())/(1000*60*60*24*30))*/

//143.1
/*function getLastDay(month, year) { // функция должна принимать и год
	let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
	if (month != 1) {
		return lastDays[month]; // если не февраль
	} else {
		let date = new Date(year,2,0);
		return date.getDate()
	}
}

console.log(getLastDay(1,2022))*/

//143.3
/*let date =new Date(2025,5,0);
console.log(date.getDay())
*/

//143.4
/*function isLeap(year){
	let date =new Date(year,2,0);
	if(date.getDate() == 29){
		return true
	}else {
		return false
	}
};
console.log(isLeap(2004));
console.log(isLeap(2008))
console.log(isLeap(2007))
console.log(isLeap(2020))*/

//144.1
/*function checkDate(year,month,day){
	let date = new Date(year,month,day);
	return date.getFullYear() == year && date.getMonth() == month && date.getDate() == day
}
console.log(checkDate(2025, 0, 31)); // выведет true
console.log(checkDate(2025, 0, 32)); // выведет falseconsole.log(checkDate(2025, 0, 31)); // выведет true
console.log(checkDate(2025, 34, 12)); // выведет false*/

//145.1
/*let date = new Date();
let res = new Date(date.getFullYear(),11,31);
console.log(res.getDay())*/

//145.2
/*let date = new Date();
let res = new Date(date.getFullYear(),date.getMonth(),1);
console.log(res.getDay())*/

//145.3
/*let date = new Date();
let res = new Date(date.getFullYear() + 1,11,31);
console.log(res.getDay())*/

//145.5
/*let date = new Date();
let res = new Date(date.getFullYear() -1,9,17);
console.log(res.getDay())*/

//145
/*let date= new Date();
let t = new Date(2021,date.getMonth() - 1,date.getDate())
console.log(t.getDay())*/

//145.9
/*let d = new Date();
let now = new Date(d.getFullYear(),d.getMonth(),20);
let then = new Date(d.getFullYear(),d.getMonth() + 1,10);
console.log((then-now)/(1000*60*60*24))*/

//145.10
/*let adte = new Date();
let date = new Date(adte.getFullYear(),adte.getMonth(),adte.getDate()-1,12);
console.log((adte-date)/(1000*60*60))*/

//145.11
/*let adte = new Date();
let date = new Date(adte.getFullYear(),adte.getMonth(),adte.getDate(),0,0,0);
console.log((adte-date)/(1000*60))*/

//145.12
/*let adte = new Date();
let date = new Date(adte.getFullYear(),adte.getMonth(),adte.getDate()+1);
console.log((date-adte)/(1000*60*60))*/

//145.13
/*let date = new Date();
for(let year = 2000;year < 2022;year++){
       let data = new Date(year,0,1);
  if(data.getDay() == 0 || data.getDay() == 6){
  	console.log(data.getFullYear() + '-' + data.getMonth() + '-' + data.getDate())
  }
}*/

//146.7
/*function visokos(year){
	let date = new Date(year,2,0);
	return date.getDate() == 29
};
console.log(visokos(2018));
console.log(visokos(2020));
console.log(visokos(2016));*/

//146.8
/*function visokos(year){
	let date = new Date(year,2,0);
	return date.getDate() == 29
};

function pred(){
	for(let lo = 2021;lo > 2000;lo--){
	     if(visokos(lo)){
	     	return lo
	     }
}
}

console.log(pred())*/

//146.9
/*function visokos(year){
	let date = new Date(year,2,0);
	return date.getDate() == 29
};

function pred(){
	for(let lo = 2021;lo < 2030;lo++){
	     if(visokos(lo)){
	     	return lo
	     }
}
}

console.log(pred())*/

//147.1
/*let date1 = '2020-11-31';
let date2 = '2020-12-01';
function sravnenie(n1,n2){
	if(n1 > n2){
		return 'n1 bolshe'
	}else{
		return 'n2 bolshe'
	}
};
console.log(sravnenie(date1,date2))*/

//149.1
/*let now  = new Date();
let date = new Date(now.getFullYear(), 2, 8); // текущий год

let diff = date - now; // разница

if (diff > 0) {
	console.log(diff/(1000*60*60*24))
} else if (diff == 0) {
	console.log('segodnya')
} else {
	let then = new Date(now.getFullYear()+1,2,8);
	console.log((then - now)/(1000*60*60*24*30))
}
*/

/*document
querySelector*/

/*let but1 = document.querySelector('#button1');
let but2 = document.querySelector('#button2');
let but3 = document.querySelector('#button3');

but1.addEventListener('click',function(){
console.log(1)
})
but2.addEventListener('click',function(){
console.log(2)
})
but3.addEventListener('click',function(){
console.log(3)
})*/
/*
let but1= document.querySelector('#button1')
let p = document.querySelector('p');

but1.addEventListener('click',function(){
	p.innerHTML+= '!!'
})
*/
/*
let but1= document.querySelector('#button1')
let p = document.querySelector('p');

but1.addEventListener('click',function(){
	p.innerHTML = '!!' + p.innerHTML
})*/
/*
let but1= document.querySelector('#button1')
let but2= document.querySelector('#button2');
let img = document.querySelector('img');

but1.addEventListener('click',function(){
	img.src = 'D:\sneg_gory_3840x2160.jpg'
});
but2.addEventListener('click',function(){
	img.src = 'C:\maxresdefault.jpg'
});*/

/*let but1= document.querySelector('#button1')
let text1= document.querySelector('#text1');
let text2= document.querySelector('#text2');
let text3= document.querySelector('#text3');
let p =document.querySelector('p')
console.log(Number(text1.value) + Number(text2.value))
console.log(text1.value + text2.value)
but1.addEventListener('click',function(){
	p.innerHTML = (Number(text1.value) +Number(text2.value)+Number(text3.value))/3
});
*/

/*let p = document.querySelector('input');

p.addEventListener('blur',function(){
	p.value = ' gf'
	console.log('df')
})*/

//162.3
/*
let inp = document.querySelector('#elem');
let but = document.querySelector('#but');
let arr = [];
but.addEventListener('click',function(){
	console.log( String(inp.className).split(' '))
})

*/
//164.2
/*let but = document.querySelector('#but');

but.addEventListener('click',func)
function func(){
console.log(	this.value = Number(this.value) + 1)
}*/

//164.5
/*let t1 = document.querySelector('#t1');
let t2 = document.querySelector('#t2');
let t3 = document.querySelector('#t3');


t1.addEventListener('blur',func)
t3.addEventListener('blur',func)
t2.addEventListener('blur',func)
function func(){
console.log(Number(this.value)**2)
}*/

//165.1
/*let inps = document.querySelectorAll('#t1')
let p = document.querySelector('p')
let but = document.querySelector('button')

but.addEventListener('click',function(){
	let l = 0;
  for(let el of inps){
         l+= Number(el.value)
  }
  p.innerHTML = l

})
*/

//166.1
/*function func() {
	this.value = Number(this.value) + 1;
}

let inps = document.querySelectorAll('#t1');

for(let el of inps){
	el.addEventListener('blur',func)
}*/

//166.2
/*function func() {
	this.value = Number(this.value)**2;
}

let inps = document.querySelectorAll('#t1');

for(let el of inps){
	el.addEventListener('blur',func)
}*/

//166.3
/*let divs = document.querySelectorAll('div');

for (let div of divs) {
	div.addEventListener('click', function(){
		this.innerHTML++
	});
}
*/

//167.2
/*let p =document.querySelector('p')

p.addEventListener('click',func);

function func(){
	this.innerHTML++;
if(this.innerHTML > 10){
			this.removeEventListener('click', func);	}
}*/

//168.1
/*let ps = document.querySelectorAll('p');

for(let el of ps){
	el.addEventListener('click',func)
}
function func(){
	this.innerHTML+= '!';
	this.removeEventListener('click',func)
}*/

//170.1
/*let inp = document.querySelector('input');

let cl = inp.getAttribute('class');
console.log(cl)*/

//170.2
/*let inp = document.querySelector('input');
inp.setAttribute('value','new');
console.log(inp.value)*/

//170.3
/*let inp = document.querySelector('input');
inp.removeAttribute('value')

console.log(inp.value)*/
/*
let l = 177;
let arr = [2,0,3,4]
let res = [];

	for(let el of arr){
     res.push(el = l);
		l++
	}
	console.log(res)
		console.log(l)



let result = [];
function tabl(num){

	for(let i = 1; i < 35;i++){
		if(!(i % 4 == 0)){
			result.push(num+=i)
		} else{
			
		}
	}
 
}

tabl(156)*/

//172.1
/*let p = document.querySelector('p')

let cl = p.classList

for(let cld of cl){
	console.log(cld)
}*/
/*
let p = document.querySelector('p')
p.classList.add('ccc')
console.log(p.classList)*/

//173
/*let div = document.querySelector('div');
let but = document.querySelector('button');

but.addEventListener('click',function(){
	div.style.color =' red'
})*/

/*let div = document.querySelector('div');
let but = document.querySelector('button');

but.addEventListener('click',function(){
	div.style.fontSize=' 90px'
})*/
/*
let p = document.querySelector('p');
let but1 = document.querySelector('#but1')
let but2 = document.querySelector('#but2')
let but3 = document.querySelector('#but3')

but1.addEventListener('click',function(){
	p.classList.toggle('red')
})
but2.addEventListener('click',function(){
	p.classList.toggle('font')
})
but3.addEventListener('click',function(){
	p.classList.toggle('green')
})*/

//177
/*
let parent = document.querySelector('#parent');

let el1 = parent.querySelectorAll('.www');
let el2 = parent.querySelectorAll('.ggg');


console.log(el1)
console.log(el2)*/
/*
let divs = document.querySelectorAll('div');

for(let ul of divs){
	ul.addEventListener('click',func)
}
function func(){
	this.innerHTML += this.dataset.num;
	console.log(this.value)
}*/

/*let inpp = document.querySelector('input');

inpp.addEventListener('blur',function(){
	if(!(Number(inpp.value) <10 && Number(inpp.value) > 5)){
		console.log('error')
			}
})*/

//180
/*
let inp = document.querySelector('input')

inp.addEventListener('blur',func)
function func(){
this.value = String(this.value).split('.').reverse().join('-')
}*/

//180
/*let inp = document.querySelector('input')

inp.addEventListener('blur',func)
function func(){
	let po = this.value
	console.log(po)
let per  =  String(this.value).split('').reverse().join('')
     if(per == po){
     	console.log(true)
     }else{
     	console.log(false)
     }
}*/

//180
/*let inp = document.querySelector('input')

inp.addEventListener('blur',func)
function func(){
let per  =  String(this.value).split('.')
let date= new Date(per[0],per[1] -1,per[2])
  console.log(date.getDay())
}*/

//180
/*let p =document.querySelector('p');
let but1 = document.querySelector('#minus');
let but11 = document.querySelector('#plus');

but1.addEventListener('click',function func(){
	p.innerHTML -= 1
	if(Number(p.innerHTML) < 1){
		but1.removeEventListener('click',func)
	}
})
but11.addEventListener('click',function(){
	p.innerHTML = Number(p.innerHTML)+ 1
})*/

//180
/*let p =document.querySelector('p');
let text = document.querySelector('#text');

text.addEventListener('blur',function(){
	p.innerHTML += text.value + '</br>'
})*/

//180
/*let divs  = document.querySelectorAll('div');

for(let divu of divs){
	console.log(divu.innerHTML.length)
if(divu.innerHTML.length > 10){
	divu.innerHTML = divu.innerHTML.slice(0,10) + '....'
	console.log(divu.innerHTML)
}
}*/
/*
let inp  = document.querySelector('input');
let but = document.querySelector('button');

but.addEventListener('click',function(){
	let p =Number(inp.value)
	let res = 1
	 for(let i = 1; i <= p;i++){
          res *= i
	 }
	 console.log(res)
})*/

/*let te = document.querySelector('textarea')
let but1 = document.querySelector('#button1')
let but2 = document.querySelector('#button2');

but1.addEventListener('click',function(){
	te.disabled = true
})
but2.addEventListener('click',function(){
	te.disabled = false
})*/
/*
let te = document.querySelector('textarea')
let but1 = document.querySelector('#button1')


but1.addEventListener('click',function(){
	console.log(te.disabled)
})*/

/*let te= document.querySelector('textarea');
let ch = document.querySelector('input')
let but = document.querySelector('#button1');

but.addEventListener('click',function(){
	if(ch.checked == true){
		te.value = 'privet'
	} else {
		te.value = 'poks'
	}
})*/
/*
let ch = document.querySelector('input')
let but = document.querySelector('#button1');

but.addEventListener('click',function(){
	ch.checked = !ch.checked
})*/
/*
let radio = document.querySelectorAll('input[type="radio"]');
 let p = document.querySelector('p')
 let but = document.querySelector('button')

but.addEventListener('click',function(){
	for(let el of radio){
		if(el.checked){
			p.innerHTML = el.value
		}
	}
})

*/
/*
let ch = document.querySelector('#ch')

ch.addEventListener('change',function(){
console.log(ch.checked)
})*/
/*
let lop = document.querySelector('input');
let p =document.querySelector('p');
console.log(lop.value)
lop.addEventListener('input',function(){
	if(lop.value.length < 5){
       p.innerHTML = 'ostalos ' + ( 5 - lop.value.length ) +' simvolov';
	} else if(lop.value.length >5){
		p.innerHTML = 'prevysheno na ' + (lop.value.length - 5);
	}
})*/

/*
let inp1 = document.querySelector('#res1');
let inp2 = document.querySelector('#res2');

inp1.addEventListener('input',function(){
	if(inp1.value.length % 2 == 0){
		inp2.focus()
	}
});
inp2.addEventListener('input',function(){
	if(inp2.value.length % 2 == 0){
		inp1.focus()
	}
})*/

//188.1
/*let select = document.querySelector('#select');
let p = document.querySelector('p');
let but = document.querySelector('button');

but.addEventListener('click',function(){
 p.innerHTML = select.value
});
*/

//188.2
/*let select = document.querySelector('#select');
let p = document.querySelector('p');
let but = document.querySelector('button');
 
function visoraz(year){
	let date = new Date(year,2,0);
	if(date.getDate() == '29'){
		return true
	}else {
		return false
	}
};
but.addEventListener('click',function(){
  if(func(select.value)){
  	p.innerHTML = 'this is visokosnyi year'
  } else{
  	p.innerHTML = 'this is not'
  }
});*/
//189.1
/*let select = document.querySelector('#select');
let button = document.querySelector('#button');
let date = new Date()

button.addEventListener('click', function() {

	select.value = date.getMonth() + 1;
});*/

//191.1
/*
let select = document.querySelector('#select');
let button = document.querySelector('#button');
let date = new Date();
console.log(date.getDay())
button.addEventListener('click',function(){
	select.selectedIndex = date.getDay() -1;
})*/

//192
/*let select = document.querySelector('select');

for(let opt of select){
	opt.innerHTML += opt.value
}*/
/*
let p =document.querySelector('p');

document.addEventListener('mousemove',function(event){
	p.innerHTML = event.pageX + ':' + event.pageY
})*/

/*let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', lok);

function func() {

	if (this.type = 'click'){
		this.style.color = 'green'
	}
};

function lok(){
		if(this.type = 'dblclick'){
		this.style.color = 'red'
	};
}*/

//197.1
/*
let ul = document.getElementById('elem');

ul.addEventListener('click',function(event){
	if(event.target.tagName.toLowerCase() == 'li'){
		event.target.innerHTML += '!'
	} 
	 else if (event.target.tagName.toLowerCase() == 'ul'){
		event.target.innerHTML +='<li>text</li>'

	}

})
*/

//199
/*let div = document.getElementById('elem');
console.log(div.innerHTML)

div.addEventListener('click',function(event){
if(event.altKey){
	div.style.color = 'red'
}
})*/

//199.2
/*let ul = document.getElementById('elem');

ul.addEventListener('click',function(event){
      if(event.target.tagName.toLowerCase() == 'li' && event.ctrlKey){
      	event.target.innerHTML += '1'
      };
         if(event.target.tagName.toLowerCase() == 'li' && event.altKey){
      	event.target.innerHTML += '2'
      }
})*/

//200.1
/*let p = document.querySelector('a');
p.addEventListener('click',function(event){
	event.preventDefault();
 p.innerHTML += p.href
})
*/

//200.2
/*let p = document.querySelector('p');
let inp1 = document.querySelector('#one');
let inp2 = document.querySelector('#two');
let a  = document.querySelector('a')

a.addEventListener('click',function(event){
	event.preventDefault();
 p.innerHTML = Number(inp1.value) + Number(inp2.value)
})*/
//201
/*
let p = document.querySelector('p');
let b = document.querySelector('b');
let i  = document.querySelector('i');

p.addEventListener('click',function(event){
	alert('p')
});
b.addEventListener('click',function(){
	alert('b')
});
i.addEventListener('click',function(){
	alert('i')
})*/

//202.1
/*let div = document.querySelector('div');

div.addEventListener('click',function(event){
	if(event.target.matches(' div')){
		console.log('div')
	};
		if(event.target.tagName.toLowerCase() == 'li'){
		console.log('li')
	};
		if(event.target.tagName.toLowerCase() == 'ul'){
		console.log('ul')
	}
})*/

//202.2
/*let div = document.querySelector('div');

div.addEventListener('click',function(event){
		if(event.target.tagName.toLowerCase() == 'li'){
	   event.target.innerHTML += '!'
	};
		if(event.target.tagName.toLowerCase() == 'ul'){
		event.target.innerHTML += '<li>POLSKOE</li>'
	}
})*/
/*
"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {

	let self= this;
	function square() {
		console.log(self.value * self.value);
	}
	square()
}*/

/*
"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {

	function square(s) {
		console.log(s.value * s.value);
	}
	square(this)
}*/
/*
"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {

 let ch = () => console.log(this.value**2);
 ch()
}*/

/*function func() {
	console.log(this.value);
}
let el1 = document.querySelector('#elem1');
let el2 = document.querySelector('#elem2')
let el3 = document.querySelector('#elem3')

func.call(el1)
func.call(el2)
func.call(el3)*/

/*
let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

func.call(elem,'Ivam','Ivanow')*/

/*let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

func.apply(elem,['Ivam','Ivanow'])*/

/*
let elem = document.getElementById('elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

func = func.bind(elem)

func('Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'
func('Петров', 'Петр'); // тут должно вывести 'привет, Петров Петр'*/
/*
setInterval(function(){
	console.log("?!")
},3000)*/
/*
let po = 100;
setInterval(function(){
	po--;
	console.log(po)
},1000)*/

/*
let but = document.querySelector('button');
let i = 100;
but.addEventListener('click',function(){
	setInterval(function(){
		i--;
		console.log(i)
	},1000)

})*/
/*
let but = document.querySelector('button');
let i = 100;
but.addEventListener('click',function func(){
	setInterval(function(){
		i--;
		console.log(i)
	},1000)
this.removeEventListener('click',func)
})*/
/*
let plus = document.querySelector('#pls');
let minus = document.querySelector('#minus');
let timerId;
let i   =4;
plus.addEventListener('click',function(){
 timerId  = setInterval(function(){
 	i--;
 	console.log(i);
 	if(i < 0){
 		clearInterval(timerId)
 	}
 },1000)
});

minus.addEventListener('click',function(){
	clearInterval(timerId)
})*/

//218.6
/*
let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
let timerId;
start.addEventListener('click', func)

function func() {
	timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
		this.removeEventListener('click',func)
};
stop.addEventListener('click', function() {
	clearInterval(timerId);
	start.addEventListener('click',func)
});*/

//222.3
//Дана кнопка. Дан абзац, текстом которого является число
// По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.
/*let but = document.querySelector('#elem');
let p = document.querySelector('p');
let timerId;
but.addEventListener('click',function(){
timerId = 	setInterval(function(){
	p.innerHTML--;
		if(p.innerHTML < 0){
		clearInterval(timerId)
	}
},1000)

})*/
/*
let p =document.querySelector('p');

setInterval(function(){
p.innerHTML =  p.innerHTML* p.innerHTML
},1000)*/

///222.4
/*
let but = document.querySelector('#elem');
let p = document.querySelector('p');
let timerId;
but.addEventListener('blur',function(){
	p.innerHTML = but.value
timerId = 	setInterval(function(){
        p.innerHTML--;
       if(p.innerHTML < 0){
       	clearInterval(timerId)
       }
	},1000)
})*/

//222.5
/*let text = document.querySelector('#elem');
let p = document.querySelector('p');
let but = document.querySelector('button')

but.addEventListener('click',function(){
	p.innerHTML = text.value;
	timerId = setInterval(function(){
		p.innerHTML--;
		if(p.innerHTML <= 0){
			clearInterval(timerId)
		}
	},1000)
})*/

//222.6
/*let but2 = document.querySelector('#elem');
let p = document.querySelector('p');
let but = document.querySelector('button')

but.addEventListener('click',function(){
	timerId = setInterval(function(){
		p.innerHTML++;
	},1000)
});

but2.addEventListener('click',function(){
	clearInterval(timerId)
})*/

///222.7
/*
let but = document.querySelector('button');
let red = 'red';
let green = 'green';
setInterval(function(){
	but.classList.toggle('green')
},1000)*/

//222.8
/*let p = document.querySelector('p');
setInterval(function(){
	let date = new Date;
	p.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
},1000)*/

//225
/*let ol = document.querySelector('ol');
let but= document.querySelector('button');

but.addEventListener('click',function(event){
	let li =document.createElement('li');
	li.innerHTML = 'punkt';
	ol.appendChild(li);
   }
);
ol.addEventListener('click',function(){
	   if(event.target.tagName.toLowerCase() == 'li'){
	   event.target.innerHTML += '!'
	};
})*/

//226
/*
let ul = document.querySelector('ul');
let c= 1;
for(let i = 1; i < 10;i++){
      let li = document.createElement('li');
      li.innerHTML = c;
      c++;
      ul.appendChild(li)
}*/

//227
/*
let parent = document.querySelector('#parent');
let p =  document.querySelector('p')
for(let i = 1; i < 5; i++){
	let inp = document.createElement('input');
	inp.addEventListener('blur',function(){
		p.innerHTML += inp.value
	})
	parent.appendChild(inp)
}*/
//228
/*
let parent = document.querySelector('#parent');

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	let p = document.createElement('p');
	p.innerHTML = elem;
	p.addEventListener('click',function(){
		p.innerHTML = Number(p.innerHTML)+ 1;
	})
	parent.appendChild(p);
}*/

//229s
/*
let ul = document.querySelector('ul');
let arr = [1,2,3,4,5]
for(let el of arr){
      let li = document.createElement('li');
      li.innerHTML = el;
      ul.appendChild(li)
}
ul.addEventListener('click',function(event){
	
     if(event.target.innerHTML.length < 2){
       	event.target.innerHTML += '!';
       
       
     }
})*/

//230
/*
let tab =  document.querySelector('table');
let inp1 = document.querySelector('#in1');
let inp2 = document.querySelector('#in2')

inp2.addEventListener('blur',function(){
	for(let i = 0; i < Number(inp1.value);i++){
	let tr = document.createElement('tr');

	for(let j = 0; j <Number(inp2.value);j++){
		let td = document.createElement('td');
		td.innerHTML = 'x'
		tr.appendChild(td)
	};
	tab.appendChild(tr)
}
})*/

//232
/*
let tab = document.querySelector('table')
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

for(let su of arr){
	let tr = document.createElement('tr');

	for(let el  of su){
		let td = document.createElement('td');
		td.innerHTML = el**2;
		tr.appendChild(td)
	};
	tab.appendChild(tr)
}*/

//235
/*let tab = document.querySelector('table');
let but = document.querySelector('button');
let tds = document.querySelectorAll('table td')
but.addEventListener('click',function(){
for(let td of tds){
	td.innerHTML*=2
}
})*/

//235
/*let but = document.querySelector('button');
let tds = document.querySelectorAll('table td')
console.log(tds.length)
let po = tds.length;
but.addEventListener('click',function(){
for(let td of tds){
	td.innerHTML=po;
	po--
}
})*/
/*
//238
let td = document.querySelectorAll('#table td');

for(let i = 1; i < td.length;i++){
	let ken = td.length;
	td[i].addEventListener('click',function(){
		ken = ken - i;
		td[i].innerHTML = ken;
        
	})

}*/

//239
/*
let td = document.querySelectorAll('#table td');
	let ken = 1;
for(let i = 1; i < td.length;i++){

	td[i].addEventListener('click',function func(){
		td[i].innerHTML = ken;
		ken++;
		this.removeEventListener('click',func)
	})

}*/

//239
/*let td = document.querySelectorAll('#table td');
	let ken = 1;


for(let tds of td){
	tds.addEventListener('click',function(){
		this.innerHTML = ken;
		if(ken == 1){
			ken = 2
		} else if(ken ==2){
			ken = 3
		} else{

			ken=1
		}
	})
}*/

//240
/*let par = document.querySelector('#parent')
let but = document.querySelector('#button');
console.log(par.lastElementChild)
but.addEventListener('click',function(){
	par.removeChild(par.lastElementChild)
})*/

//241
/*let par = document.querySelectorAll('#parent li');
let but = document.querySelector('#button');

for(let el of par){
	el.addEventListener('click',function(){
		el.remove()
	})
}*/

/*let par = document.querySelector('ul');
let but = document.querySelector('input');
let o = 4;
but.addEventListener('click',function(){
	let li = document.createElement('li');
     li.innerHTML = o;
     o++;
     par.appendChild(li)
});

par.addEventListener('click',function(){
	par.removeChild(event.target)
})*/

/*let but = document.querySelector('button');
let inp = document.querySelector('#in');
but.addEventListener('click',function(){
	let clone = inp.cloneNode(true);
	inp.insertAdjacentElement('afterEnd',clone)
})*/

/*let di = document.querySelector('#elem');

console.log(di.matches('div.www'))*/

//249
/*let elem = document.querySelector('#elem');

elem.addEventListener('click',function(){
	let inp = document.createElement('input');

inp.value = elem.innerHTML
	inp.addEventListener('blur',function(){
		elem.innerHTML = this.value;
		inp.parentElement.removeChild(inp)
	});
	elem.parentElement.appendChild(inp)
})*/
/*let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
	let input = document.createElement('input');
	input.value = elem.innerHTML;
	input.addEventListener('blur',function(){
		elem.innerHTML = this.value;
		elem.addEventListener('click',func)
	})
	elem.appendChild(input);
	elem.removeEventListener('click',func)
});*/

//251
/*let li = document.querySelectorAll('li');

for(let lis of li){
	lis.addEventListener('click',function func(){
		let inp = document.createElement('input');
		inp.value = lis.innerHTML;

		inp.addEventListener('blur',function func(){
			lis.innerHTML = inp.value;
			inp.addEventListener('click',func)
		})
		lis.appendChild(inp);
		lis.removeEventListener('click',func)
	})
}*/

//252.1-2
/*
let p = document.querySelectorAll('p');
for(let ps of p){
	let span = document.createElement('span');
	span.innerHTML = ps.innerHTML;
	ps.innerHTML = '';
	ps.appendChild(span);

		span.addEventListener('click',function func(){
	let inp = document.createElement('input');
	inp.value = span.innerHTML;

	inp.addEventListener('blur',function(){
		span.innerHTML = inp.value;
		span.addEventListener('click',func);
	})
	span.appendChild(inp)
	span.removeEventListener('click',func);
})
}


for(let ps of p){
	let a = document.createElement('a');
		a.innerHTML = ' removw';
		a.href = '#';
		
	ps.appendChild(a)

	a.addEventListener('click',function(event){
		ps.remove();
		event.preventDefault()
	})

}*/

//253
/*let p = document.querySelectorAll('p');
let but = document.querySelector('button')

for(let ps of p){ 
	//создаем спан и меняем текст абзаца на спан
let span =document.createElement('span');
span.innerHTML = ps.innerHTML;
ps.innerHTML = '';
ps.appendChild(span);
//создаем ссылку с событием удаления себя и изменеия стиля текста абзаца
let asc = document.createElement('a');
asc.innerHTML = 'removes';
asc.href  = '#'
ps.appendChild(asc)



         asc.addEventListener('click',function(){
            	 asc.remove()
         	        span.style.color = 'orange';    
                  event.preventDefault();  
                  
               })  
                   };;*/

/*
let tr = document.querySelectorAll('tr');

for(let trs of tr){
	let td = document.createElement('td');
	let a = document.createElement('a');
	a.innerHTML = 'remove';
	a.href = '#';
   td.appendChild(a);

   a.addEventListener('click',function(event){
   	trs.classList.toggle('green')
   	event.preventDefault();
   })
   trs.appendChild(td)
}*/
/*
let buts = document.querySelectorAll('button');

for(let but of buts){
	but.addEventListener('click',function(){
		let el = document.querySelector('#' + this.dataset.elem);
		el.classList.toggle('hide')
	})
}*/
/*
let buts = document.querySelectorAll('button');
let ps = document.querySelectorAll('p');
for(let i = 0;i < buts.length;i++){
	buts[i].addEventListener('click',function(){
		ps[i].classList.toggle('hide')
	});
}*/

//259.1
/*
let arr= ['1','2','3','4'];
let ul = document.querySelector('ul')
for(let el of arr){
	let li = document.createElement('li');
	li.innerHTML = el;
	ul.appendChild(li)
}*/

//259.2
/*let arr= ['1','2','3','4'];
let ul = document.querySelector('ul')
for(let el of arr){
	let li = document.createElement('li');
	li.innerHTML = el;
	ul.appendChild(li);

li.addEventListener('click',function func(){
		let inp = document.createElement('input');
	inp.value = li.innerHTML;
	li.appendChild(inp);
	inp.addEventListener('blur',function(){    
		li.innerHTML = inp.value;
		li.addEventListener('click',func);
	})
	li.removeEventListener('click',func)
})

}*/

//259.3
/*let arr= ['1','2','3','4'];
let ul = document.querySelector('ul')
//кнопка для добавления списка
let but = document.createElement('button');
but.innerHTML = 'ewr';
ul.appendChild(but)
but.addEventListener('click',function(){
let li = document.createElement('li');
li.innerHTML = '5';
ul.appendChild(li)
});
//чтобы создать список свзяный с массивом
for(let el of arr){
	let li = document.createElement('li');
	li.innerHTML = el;
	ul.appendChild(li);
};
//делаем так чтобы и ли которые добавлены и те которые добавлены через кнопку можно было изменить через инпут
ul.addEventListener('click',function func(event){
	if(event.target.tagName.toLowerCase() == 'li'){
		let inp = document.createElement('input');
	inp.value =event.target.innerHTML;
	event.target.appendChild(inp);
	inp.addEventListener('blur',function(){
		event.target.innerHTML = inp.value;
		ul.addEventListener('click',func);
			
	});
	ul.removeEventListener('click',func);
	};

})
*/

//259.5
/*let arr= ['1111111111','2222222222','33333333333','44444444'];
let ul = document.querySelector('ul')

//кнопка для добавления списка
let but = document.createElement('button');
but.innerHTML = 'ewr';
ul.appendChild(but)
but.addEventListener('click',function(){

let li = document.createElement('li');
li.innerHTML = '55555555555555555';

let a = document.createElement('a')
a.innerHTML = 'remove';
a.href = '#';
a.addEventListener('click',function(event){
	li.style.color = 'red'
	event.preventDefault();
});
li.appendChild(a);
ul.appendChild(li);
});


//чтобы создать список свзяный с массивом
for(let el of arr){
	let li = document.createElement('li');
	li.innerHTML = el;
let a = document.createElement('a')
a.innerHTML = 'remove';
a.href = '#';
a.addEventListener('click',function(event){
	li.style.color = 'red'
	event.preventDefault();
});
li.appendChild(a)
	ul.appendChild(li);
};


//делаем так чтобы и ли которые добавлены и те которые добавлены через кнопку можно было изменить через инпут
ul.addEventListener('click',function func(event){
	if(event.target.tagName.toLowerCase() == 'li'){
		let inp = document.createElement('input');
	inp.value =event.target.innerHTML;
	event.target.appendChild(inp);
	inp.addEventListener('blur',function(){
		event.target.innerHTML = inp.value;
		ul.addEventListener('click',func);
			
	});
	ul.removeEventListener('click',func);
	};

});*/

//259.7
/*let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

let tab = document.querySelector('table');

for(let emp of employees){
	let tr = document.createElement('tr');

	let td1 = document.createElement('td');
	td1.innerHTML = emp.name;
	tr.appendChild(td1);

	let td2 = document.createElement('td');
	td2.innerHTML = emp.age;
	tr.appendChild(td2);

	let td3 = document.createElement('td');
	td3.innerHTML = emp.salary;
	tr.appendChild(td3);

	tab.appendChild(tr);
};

tab.addEventListener('click',function func(event){
	if(event.target.tagName.toLowerCase() == 'td'){
		let inp  = document.createElement('input');
		inp.value = event.target.innerHTML;
event.target.appendChild(inp)
		inp.addEventListener('blur',function(){
			event.target.innerHTML = inp.value;
      tab.addEventListener('click',func);
		});
		tab.removeEventListener('click',func)
	}

})*/

//259.8
/*let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

let tab = document.querySelector('table');

for(let emp of employees){
	let tr = document.createElement('tr');

	let td1 = document.createElement('td');
	td1.innerHTML = emp.name;
	tr.appendChild(td1);

	let td2 = document.createElement('td');
	td2.innerHTML = emp.age;
	tr.appendChild(td2);

	let td3 = document.createElement('td');
	td3.innerHTML = emp.salary;
	tr.appendChild(td3);

	tab.appendChild(tr);
};

tab.addEventListener('click',function func(event){
	if(event.target.tagName.toLowerCase() == 'td'){
		let inp  = document.createElement('input');
		inp.value = event.target.innerHTML;
event.target.appendChild(inp)
		inp.addEventListener('blur',function(){
			event.target.innerHTML = inp.value;
      tab.addEventListener('click',func);
		});
		tab.removeEventListener('click',func)
	}

});
let trss = document.querySelectorAll('tr')
console.log(trss)
for(let trs of trss){
      
        let td = document.createElement('td');
        trs.appendChild(td)
        let a = document.createElement('a');
         a.innerHTML = 'remove';
         a.href = '#';
            
            td.appendChild(a)
a.addEventListener('click',function(){
	event.preventDefault();
	trs.remove();
});
}*/

//259.9
/*let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

let tab = document.querySelector('table');
let names = document.querySelector('#name');
let ages = document.querySelector('#age');
let salarys = document.querySelector('#salary');

for(let emp of employees){
	let tr = document.createElement('tr');

	let td1 = document.createElement('td');
	td1.innerHTML = emp.name;
	tr.appendChild(td1);

	let td2 = document.createElement('td');
	td2.innerHTML = emp.age;
	tr.appendChild(td2);

	let td3 = document.createElement('td');
	td3.innerHTML = emp.salary;
	tr.appendChild(td3);

	tab.appendChild(tr);
};
//добавляет в ячейки инпуты по клику ячейкам чтобы редактирщвать
tab.addEventListener('click',function func(event){
	if(event.target.tagName.toLowerCase() == 'td'){
		let inp  = document.createElement('input');
		inp.value = event.target.innerHTML;
event.target.appendChild(inp)
		inp.addEventListener('blur',function(){
			event.target.innerHTML = inp.value;
      tab.addEventListener('click',func);
		});
		tab.removeEventListener('click',func)
	}

});

//добавляет ссылку для удаления колонки
let trss = document.querySelectorAll('tr')
console.log(trss)
for(let trs of trss){
      
        let td = document.createElement('td');
        trs.appendChild(td)
        let a = document.createElement('a');
         a.innerHTML = 'remove';
         a.href = '#';
            
            td.appendChild(a)
a.addEventListener('click',function(){
	event.preventDefault();
	trs.remove();
});
};

//сдлеать чтобы из трех инпутов взяли их значение и добавили к таблице
salarys.addEventListener('blur',function(){
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.innerHTML = names.value;
	tr.appendChild(td1);

	let td2 = document.createElement('td');
		td2.innerHTML = ages.value;
		tr.appendChild(td2)
	

	let td3 = document.createElement('td');
	td3.innerHTML = salarys.value;
	tr.appendChild(td3);

	tab.appendChild(tr)
})
*/

//259.10
/*let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let ul = document.querySelector('ul');

for(let emp of employees){
	let li = document.createElement('li');
	li.innerHTML = emp.name + ' age:' + emp.age + ' salary:' + emp.salary;
	ul.appendChild(li);

	li.addEventListener('click',function func(){
		let inp = document.createElement('input');
		inp.value = li.innerHTML;
       li.appendChild(inp);
		inp.addEventListener('blur',function(){
			li.innerHTML =inp.value;
        li.addEventListener('click',func);
		}) ;
        li.removeEventListener('click',func)
	}) 
}*/

//259.11
/*let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let ul = document.querySelector('ul');

for(let emp of employees){
	let li = document.createElement('li');
	li.innerHTML = emp.name + ' age:' + emp.age + ' salary:' + emp.salary;
	ul.appendChild(li);

	let a =  document.createElement('a');
	a.innerHTML = 'remove';
	a.href = '#';
	a.addEventListener('click',function(){
		li.remove()
	});
	li.appendChild(a)

	li.addEventListener('click',function func(){
		let inp = document.createElement('input');
		inp.value = li.innerHTML;
       li.appendChild(inp);
		inp.addEventListener('blur',function(){
			li.innerHTML =inp.value;
        li.addEventListener('click',func);
		}) ;
        li.removeEventListener('click',func)
	}) 
};*/

//259.12
/*let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let ul = document.querySelector('ul');
let els = document.querySelector('#els');

for(let emp of employees){
	let li = document.createElement('li');
	li.innerHTML = emp.name + ' age:' + emp.age + ' salary:' + emp.salary;
	ul.appendChild(li);

	let a =  document.createElement('a');
	a.innerHTML = 'remove';
	a.href = '#';
	a.addEventListener('click',function(){
		li.remove()
	});
	li.appendChild(a)

	li.addEventListener('click',function func(){
		let inp = document.createElement('input');
		inp.value = li.innerHTML;
       li.appendChild(inp);
		inp.addEventListener('blur',function(){
			li.innerHTML =inp.value;
        li.addEventListener('click',func);
		}) ;
        li.removeEventListener('click',func)
	}) 
};

els.addEventListener('blur',function(){
	let li = document.createElement('li');
	li.innerHTML = els.value;
	ul.appendChild(li);
		let a =  document.createElement('a');
	a.innerHTML = 'remove';
	a.href = '#';
	a.addEventListener('click',function(){
		li.remove()
	});
	li.appendChild(a)
})
*/

//260.1
/*let td = document.querySelectorAll('td');
let td1 = document.querySelectorAll('#table td[data-col="1"]');
let td2 = document.querySelectorAll('#table td[data-col="2"]');
let td3 = document.querySelectorAll('#table td[data-col="3"]');

for(let ts of td){
	ts.addEventListener('click',function(){
  let col = ts.dataset.col;

          if(col == 1){
	for(let tds1 of td1){
		tds1.style.backgroundColor = 'red'
	}
} else if(col==2){
	for(let tds2 of td2){
		tds2.style.backgroundColor = 'blue'
	}
} else if (col==3){
	for(let tds3 of td3){
		tds3.style.backgroundColor = 'orange'
	}
}

	})
}*/

/*
let td1 = document.querySelectorAll('td')
let but = document.querySelector('button')
let col = 2;
let row = 3;

but.addEventListener('click',function(){
	for(let tds of td1){
		if(tds.dataset.col == col || tds.dataset.row == row){
			tds.style.backgroundColor = 'red'
		}
	}
})*/

/*let div = document.querySelector('div');
let o = 3;
div.setAttribute('data-col',o);
console.log(div.dataset.col);*/
//261.1
/*
let td = document.querySelectorAll('td');
let i = 1;

for(let tds of td){
  tds.setAttribute('data-col',i);
  i++;
  if(i > 3){
     i = 1};
};
for(let tds of td){
	console.log(tds.dataset.col)
}*/

//261.2
/*let td = document.querySelectorAll('td');
let i = 1;
let p =1 ;
for(let tds of td){
  tds.setAttribute('data-col',i);
  tds.setAttribute('data-row',p);
  i++;
  if(i > 3){
     i = 1;
     p++;
   };
};
let arr =[];
let res = [];
for(let tds of td){
	arr.push(tds.dataset.col);
	res.push(tds.dataset.row)

};
console.log(arr);
console.log(res)*/

//261.3
/*let td = document.querySelectorAll('td');
let i = 1;
let p =1 ;
for(let tds of td){
  tds.setAttribute('data-col',i);
  tds.setAttribute('data-row',p);
  i++;
  if(i > 3){
     i = 1;
     p++;
   };
};

for(let tds of td){
	tds.addEventListener('click',function(){
		console.log(tds.dataset.col + '-' + tds.dataset.row)
	})
}
let arr =[];
let res = [];
for(let tds of td){
	arr.push(tds.dataset.col);
	res.push(tds.dataset.row)

};
console.log(arr);
console.log(res)*/
//261.4
/*let td = document.querySelectorAll('td');
let i = 1;
let p =1 ;
for(let tds of td){
  tds.setAttribute('data-col',i);
  tds.setAttribute('data-row',p);
  i++;
  if(i > 3){
     i = 1;
     p++;
   };
};

for(let tds of td){
	tds.addEventListener('click',function(){
		console.log(tds.dataset.col + '-' + tds.dataset.row);
		if(tds.dataset.col == 1 & tds.dataset.row == 1|| tds.dataset.col == 2 & tds.dataset.row == 2 ||
			tds.dataset.col == 3 & tds.dataset.row == 3|| tds.dataset.col == 1 & tds.dataset.row == 3||
			tds.dataset.col == 3 & tds.dataset.row == 1){
         tds.style.backgroundColor =  'red'
		} else{
			tds.style.backgroundColor = 'orange'
		}
	})
}
*/
/*function css(cl,color){
 let el = document.querySelector(cl);
 el.style.backgroundColor = color;
};

css('.el1','orange');
css('.el2','blue');*/

//263.2
/*function setAtt(cls,first,end){
	let el = document.querySelector(cls);
	el.setAttribute(first,end)
};

setAtt('.el1','value','ol');
setAtt('.el2','value','ol');*/

//264.1
/*function lis(sel,text){
	let els = document.querySelectorAll(sel);
	for(let el of els){
		el.innerHTML += text;
	}
};

lis('#el','!!!!!!!!!!');*/

//265.1
/*function forEach(selector, func) {
	let elems = document.querySelectorAll(selector);
	
	for (let elem of elems) {
		func(elem);
	}
}

function func(el){
	el.innerHTML += '!'
};

forEach('#el',func)*/

//266
/*function forEach(selector, func) {
	let elems = document.querySelectorAll(selector);
	
	for (let i = 0; i < elems.length; i++) {
		func(elems[i], i);
	}
}

function func(el,i){
	el.innerHTML = i + el.innerHTML;
};

forEach('#el',func)*/

//267.2
/*function ster(element,text){
	element.innerHTML += text;
};
let el = document.querySelectorAll('p');

for(let le of el){
	ster(le,'prrrr')
}*/

//267.3
/*function val(ian,text){
ian.value = text
};

let inp = document.querySelector('input');
val(inp,'asfdafsd');*/

//268
/*let ul = document.querySelector('ul')
function append(ss,text){
  let li = document.createElement('li');
  li.innerHTML = text;
  ss.appendChild(li)
};

append(ul,'privet')*/

//268.3
/*let ul = document.querySelector('ul')
function append(ss,text){
  let li = document.createElement('li');
  li.innerHTML = text;
  ss.appendChild(li)
};
let arr = [1,2,3,4,5,6,7];

for(let el of arr){
	append(ul,el);
};
*/

//269.1
/*let div = document.querySelector('div')
function createTable(rows, cols,parent) {
	let table = document.createElement('table');
	// тут создадим таблицу с rows рядами и cols колонками
	for (let i = 0; i < rows;i++) {
		let tr = document.createElement('tr')
		for (let k = 0; k < cols;k++) {
			let td = document.createElement('td');
			
			tr.appendChild(td)
		}
			table.appendChild(tr);
	}
	parent.appendChild(table)

};

createTable(3,4,div)*/

/*let div = document.querySelector('div')
function createTable(rows, cols) {
	let table = document.createElement('table');
	// тут создадим таблицу с rows рядами и cols колонками
	for (let i = 0; i < rows;i++) {
		let tr = document.createElement('tr')
		for (let k = 0; k < cols;k++) {
			let td = document.createElement('td');
			
			tr.appendChild(td)
		}
			table.appendChild(tr);
	}
	return table

};

div.appendChild(createTable(3,4))*/

//272.1
/*function createTable(arr) {
	let table = document.createElement('table');
	// тут создадим таблицу с rows рядами и cols колонками
	for(let arrs of arr){
		let tr = document.createElement('tr');
		for(let rs of arrs){
			let td = document.createElement('td');
			td.innerHTML = rs;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	return table

};
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let div = document.querySelector('div')
div.appendChild(createTable(arr))*/

//272
/*function func(els,num){
	let el = [];
	for(let elem of els){
		el.push(elem)
	}
	let ls = el.length / num;
	let res = [];
     for(let i= 0 ; i < num;i++){
     	res[i] += [];
     };
     for(let k = 0; k < res.length;k++){
     	res[k] = splices(el,ls)
     }

     return res
};
//вункция первым параметром принимает массив а вторым число сколько надо удалить эдементов и возвразает удаленное
function splices(eel,nuum){
	let rem = eel.splice(0,nuum)
	return rem
};

function createTable(arr) {
	let table = document.createElement('table');
	// тут создадим таблицу с rows рядами и cols колонками
	for(let arrs of arr){
		let tr = document.createElement('tr');
		for(let rs of arrs){
			let td = document.createElement('td');
			td.innerHTML = rs;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	return table

};
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let div = document.querySelector('div')
div.appendChild(createTable(func(arr,3)))*/
/*
function func(els,num){
	let el = [];
	for(let elem of els){
		el.push(elem)
	}
	let ls = el.length / num;
	let res = [];
     for(let i= 0 ; i < num;i++){
     	res[i] += [];
     };
     for(let k = 0; k < res.length;k++){
     	res[k] = splices(el,ls)
     }

     return res
};
//вункция первым параметром принимает массив а вторым число сколько надо удалить эдементов и возвразает удаленное
function splices(eel,nuum){
	let rem = eel.splice(0,nuum)
	return rem
};

function createTable(arr) {
	let table = document.createElement('table');
	// тут создадим таблицу с rows рядами и cols колонками
	for(let arrs of arr){
		let tr = document.createElement('tr');
		for(let rs of arrs){
			let td = document.createElement('td');
			td.innerHTML = rs;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	return table

};

function normalize(arr,num,text){
 for(let elem of arr){
         if(!(elem.length == num)){
            let numb = num - elem.length;
            for(let k =0;k < numb;k++){
            	elem.push(text)
            }
         }
  
 	  
 }
 return arr
};

let arr = [1,2,3,4,5,6,9,10];
let cols = 4;
let div = document.querySelector('div')
div.appendChild(createTable(normalize(func(arr,4),4,'-')))*/
//273
//создает таблицу
/*function createTable(arr) {
	let table = document.createElement('table');
	// тут создадим таблицу с rows рядами и cols колонками
	for(let arrs of arr){
		let tr = document.createElement('tr');
		for(let rs of arrs){
			let td = document.createElement('td');
			td.innerHTML = rs;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	return table

};

//создает двумерный массив
function func(els,num){
	let el = [];
	for(let elem of els){
		el.push(elem)
	}

	let ls = Math.round((el.length / num)+0.49);
	let res = [];
     for(let i= 0 ; i < ls;i++){
     	res[i] += [];
     };
     for(let k = 0; k < res.length;k++){
     	res[k] = splices(el,num)
     }

     return res
};
function splices(eel,nuum){
	let rem = eel.splice(0,nuum)
	return rem
};
//нормализует массив чтобы длина подмассивов должны быть похожа
function normalize(arr,num,text){
 for(let elem of arr){
         if(!(elem.length == num)){
            let numb = num - elem.length;
            for(let k =0;k < numb;k++){
            	elem.push(text)
            }
         }
  
 	  
 }
 return arr
};

let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
let cols = 5;
let pso = normalize(func(arr,cols),cols,'-');
let div = document.querySelector('div');
div.appendChild(createTable(pso))*/

//27
/*
;(function(but,in1,in2,in3){
  let btn = document.querySelector(but);
  let ins1 = document.querySelector(in1);
   let ins2 = document.querySelector(in2);
    let ins3 = document.querySelector(in3);

    btn.addEventListener('click',function(){
    	console.log(Number(ins1.value) + Number(ins2.value) + Number(ins3.value))
    })
})('button','#one','#two','#three');*/
/*;(function() {
	let mod = {};
	mod.str1 = '1переменная модуля';
	mod.str2 = '2переменная модуля';
	mod.str3 = '3переменная модуля';
	
	mod.func1 =function() {
		alert('1функция модуля');
	}
		mod.func2 =function() {
		alert('2функция модуля');
	}
		mod.func3 =function() {
		alert('3функция модуля');
	}
		mod.func4 =function() {
		alert('фун4кция модуля');
	}
		mod.func5 =function() {
		alert('фун5кция модуля');
	}
	window.mod = mod;
})();
console.log(mod.str1);
console.log(mod.str2);
console.log(mod.str3)

mod.func1();
mod.func2();
mod.func3();
mod.func4();
mod.func5();*/

//280.1
/*;(function(){
function filter(num){
	let res = [];
	for(let el of num)
	if(el % 2 == 0){
		res.push(el)
	};
	return res
};

function first(num){
	return num[0]
};

function last(num){
	return num[num.length-1]
};
function initial(num){
	let re = num.splice(0,num.length-1);
		return re;
};

function contains(arr,num){
	for(let el of arr){
		if(el == num){
			return el
		}
	}
};
window.lok = {filter,first,initial,last,contains}
})();

function contains(arr,num){
	for(let el of arr){
		if(el == num){
			return el
		}
	}
};

console.log(contains([1,2,3],2))

*/

//laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssttttttttttttttt
//v44
/*let obj = {a:1,b:2,c:3}
let i  = 0;
let sym = Symbol('optional description');
obj[sym] = function(){
	let i = 0;
	for(let k in this){

    i += this[k];
	}
	return i;
};


console.log(obj[sym]())*/
/*let sym = Symbol.for('sym');
function random(max,min){
	let res = [];
	min = Math.ceil(min);
  max = Math.floor(max);
for(let i = 0 ; i < 10; i++){
 res.push(Math.floor(Math.random() * (max - min)) + min)
}
res[sym] = function(){
	let num = 0;
	for(let el of res){
     num+=el
	}
	console.log(num)
}
return res
};
let irr =random(1,10) ;
console.log(irr)
irr[sym]();

function srav(arr1,arr2){
	let res = [];
	for(let el1 of arr1){
		for(let el2 of arr2){
			if(el1 == el2){
       res.push(el1)
			}
		}
	}

	res[sym] = function(){
		let num = 0;
     for(let el of this){
         num+=el
     }
      console.log(num)

	};
	return res
};

let arr1 = [1,2,3,4,5,6];
let arr2 = [12,2,34,5,3];
let mas = srav(arr1,arr2);

mas[sym]();
*/
//v44
/*let p = document.querySelectorAll('p');
for(let el of p){
	el.textContent += '!'
}*/

//44.1.7.
/*
let k = 0;
let l = 2;
function *createIterator(arr){
for(let i =0; i < arr.length; i+=2){
	yield arr.slice(k,l);
	k+=2;
	l+=2;
}
};

let iterator = createIterator([1,2,3,4,5,6,7,8]);
for(let el of iterator){
	console.log(el)
}*/

//44.1.9
/*
let k = 0;
let l = 2;
function *createIterator(arr){
for(let i =0; i < arr.length; i++){
	if(arr[i] % 2 == 0){
		yield arr[i]
	}
}
};

let iterator = createIterator([1,2,3,4,5,6,7,8]);
for(let el of iterator){
	console.log(el)
}*/

//44.1.10
/*
let one = 1;
let two = 0;
let tr = 0;
let res = [];
for(let i =0 ; i < 10;i++){
 tr = one + two;
 two = one;
 one = tr;
 res.push(tr)
};


function *create(arr1,arr2){
	for(let el1 of arr1){
		for(let el2 of arr2){
			if(el1 == el2){
				yield el1
			}
		}
	}
};
let lok = [];
for(let i = 0 ; i < 300;i++){
	lok.push(i)
}


let iterator = create(res,lok);
for(let el of iterator){
	console.log(el)
}*/

//44.1.10
/*
function *create(obj){
	for(let k in obj){
		yield obj[k]
	}
};

let iterator = create({a:1,b:2,c:3});
for(let el of iterator){
	console.log(el)
}*/

//44.1.12
/*let obj = {a:1,b:2,c:3,
[Symbol.iterator]: function *(){
	for(let k in obj){
		yield obj[k]
	}
}
};

for(let el of obj){
	console.log(el)
}*/

//441.18
/*
let num = 123456;
let t = String(num);
let s = 0;
for(let el of t){
s+= +el
};
console.log(s)*/

//44.1
/*let obj = {
	a:1,
	b:2,
	c:3,
	*[Symbol.iterator] (){
		for(let key in this){
			yield key
		}
	}
};

let arr = [...obj];
console.log(arr)*/
/*
let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;
let tab = document.querySelector('table')
let arr = JSON.parse(json);
	let t=  arr.values()
for(let {name,age,salary} of t){
   let tr  = document.createElement('tr');

   let td1 = document.createElement('td');
   td1.innerHTML = name;
     tr.appendChild(td1)

   let td2 = document.createElement('td');
   td2.innerHTML = age;
       tr.appendChild(td2)

   let td3 = document.createElement('td');
   td3.innerHTML = salary;
    tr.appendChild(td3);
    tab.appendChild(tr)
	}*/

//47.v.3
/*let trs = document.querySelectorAll('tr');
	let tds = document.querySelectorAll('td');
	let ths = document.querySelectorAll('th');

let obj = {};
let drr = [...tds];
let rrr = [...ths,...ths,...ths];
let arr = [];
for(let i = 0;i<3;i++){
	arr.push(i);
	arr.push(i);
	arr.push(i);
}

	for(let i = 0; i < 9; i++){
		let nazv = rrr[i].textContent
 		obj[rrr[i].textContent += arr[i]] = drr[i].textContent;
 		rrr[i].textContent = nazv;

 	
};
console.log(obj[5])
console.log(obj)
let json = JSON.stringify(obj);
console.log(json)*/

//48.v.3
/*let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;
let arr = JSON.parse(json);
let obj = {
	"name": "user4",
		"age": 17,
		"salary": 5000
};
arr.push(obj)
let res = JSON.stringify(arr);
console.log(res)*/
/*
localStorage.setItem('one',1);
localStorage.setItem('two',2);
localStorage.setItem('three',3);

let one = localStorage.getItem('one');
let two = localStorage.getItem('two');
let three = localStorage.getItem('three');
console.log((+one)+(+two)+(+three));*/
/*let bt = document.querySelector('button')
let time = localStorage.getItem('time');

if (!time) {
	let now = ( new Date() ).getTime();
	localStorage.setItem('time', now);
}
bt.addEventListener('click',function(){
	let str = localStorage.getItem('time');
	console.log(str)
})*/

// each(function(){})

// var $a = $('a').on('mousemove',function func(){
// 	var text =  $(this).html();
// 	$(this).html(text + $(this).attr('href'));
// 		$(this).off('mousemove',func)
// })
// console.log($('p').attr('id'))
// 	var $p = $('#ew');//////////////////////////////////////////////////////
// var $inp = $('input');
// let tr = $p.html();

// $inp.blur(function(){
// let text;
// 	text = $(this).val() + $(this).attr('id');
// 	$p.html(text)
// console.log(1)
// });

//ot met jq last
/*var $tl = $('table');
var $nm = $('#name');
var $snm = $('#surname');
var d = $('td');
console.log(d.length)
$tl.on('click','td',function(){
	let tr = prompt();
	$(this).text(tr)
});
$nm.blur(function(){
	$tl.html($tl.html() + '<tr> <td></td> <td></td></tr>');

console.log($('td').length)
});

 $snm.on('blur',function(){
	  let num = $('td').length - 2;
  $('td').eq(num).html($nm.val());
  $('td').last().text($snm.val());
 });*/

//17.jq.pr
// $('input').each(function(){
//   let te = $(this);
//   console.log(te.val())
//   te.val(te.val()**2)
// })

//19.jq.pr
// let p = $('#nm');
// let next = p.next().next().html();
// let prev = p.prev().prev().html();

// p.next().next().html(prev);
// p.prev().prev().html(next);

//23.jq.pr
// $('p').each(function(){
// 	$(this).html($(this).html() +$(this).html() );
// });

//25.jq.pr
// $('p').each(function(index){
// 	$(this).html(index*Number($(this).html()));
// });

//35.jq.pr
/*let one = $('#o');
let two = one.nextAll().filter('.www').first();

one.clone().insertAfter(two);
two.insertAfter(one)
one.remove()*/

//42.jq.pr
//$('p').append('!').not('.www').css('backgroundColor','red')

//43.jq.pr
//$('li:last').prev().after('<li>' + 'punkt' + '</li>')

//45.jq.pr
/*let li =$('li');
let arr = [];
let  ol = $('ol');
li.each(function(){
	arr.push($(this))
});
arr.reverse();

li.each(function(){
	$(this).remove()
})

for(let el of arr){
	ol.append(el)
}*/

//46.jq.pr
// let q = $('.q');
// let next = q.nextAll();
// let prev  = q.prevAll().get().reverse();
// q.after(prev).before(next);

//50.jq.pr
// let res = 0;
// $('div').each(function(){
// 	let div = $(this);
//      res+=div.height();
//      return res;
// })

// console.log(res)

//51.jq.pr

//57.jq.pr
// let res = 1;
// let ins = $('input');

// ins.on('click',function(){
// 	if($(this).prop('checked') == true){
// 		res+=1
// 	};if(res > 2){
// 	ins.prop('disabled',true)
// }
// 	console.log(res)
// });

//59.jq.pr
// let ip = $('input');
// ip.attr('placeholder',ip.val()).removeAttr('value');

//62.jq.pr
// let opt = $('select');
// let radio = $('input');
// let pot = $('option')
// let num1 = 0;

// opt.on('blur',function(){
// 	//делает неотмеченным все радиокнопки
//  radio.each(function(){
//  	$(this).prop('checked',false)
//  })

// //считает какой по счету селкт выбран
//  pot.each(function(){
// 	if($(this).prop('selected') == true){
// 		let opt2 = $(this).prevAll();
// 		for(let el of opt2){
// 			num1+=1
// 		}
// 	}

// });
//  //отмечает радио
// radio.eq(num1).prop('checked',true);
// num1=0
// })

//  opt.on('blur',function func(){

//  	 pot.each(function(){
//  	 	if($(this).prop('selected') == false || num2 != 1){
//      num1+=1;
//  	} else if($(this).prop('selected') == true ) {
//  		num2+=1;
//  	};
//  	 })
// console.log(num1,num2)
//  });

//50.2.v.js
// let nips = document.querySelectorAll('input');
// let bt = document.querySelector('button');

// bt.addEventListener('click',function(){
// 	let arr = [];
// 	for(let el of nips){
// 		arr.push(el.value)
// 	};
// 	console.log(arr);

// 	localStorage.setItem('arr',JSON.stringify(arr));
// });
// let res = localStorage.getItem('arr');
// let result = JSON.parse(res);
// console.log(result);

// for(let i = 0;i < result.length;i++){
// 	nips[i].value = result[i]
// }

//50.last.js.v
// let bt  = document.querySelector('button');
// let inp = document.querySelectorAll('input');

// let users = [
// 	{
// 		surname: 'surname1',
// 		name: 'name1',
// 		age: 31,
// 	},
// 	{
// 		surname: 'surname2',
// 		name: 'name2',
// 		age: 32,
// 	},
// 	{
// 		surname: 'surname3',
// 		name: 'name3',
// 		age: 33,
// 	},
// ];

//    let str = localStorage.getItem('user');
//     let arr = JSON.parse(str);

// bt.addEventListener('click',function(){

//      let obj = {};
// for(let el of inp){
// 	let key = el.placeholder
//      	obj[key] = el.value
//      }
// console.log(obj)
// users.push(obj);
// console.log(users)
// localStorage.setItem('user',JSON.stringify(users))

// });

// console.log(localStorage.getItem('user'))

//счетчик через лок хранилище
/*if(localStorage.getItem('num') > 0){
	localStorage.setItem('num',Number(localStorage.getItem('num'))+1)
};
console.log(localStorage.getItem('num'))*/

// let i = localStorage.getItem('num') || 1;
// i++;
// localStorage.setItem('num',i);

// console.log(localStorage.getItem('num'))

/*
let product = document.querySelector('#product');



function getCost(elem) {
	if (elem.dataset.price !== undefined && elem.dataset.amount !== undefined) {
		return elem.dataset.price * elem.dataset.amount;
	};
	if(elem.dataset.price == undefined){
		throw {name:'price und',message:'netu ceny'}
	};
	if(elem.dataset.amount == undefined){
      throw {name:'amount und',message:'netu amu'}
	};
}

try{
	let cost = getCost(product);
console.log(cost)
}catch (er){
	console.log(er.name)
	console.log('netu ili o ili u')
	console.log(er.message)
}*/

// let obj1 = {
// 	name:'nura',
// 	arr:[{age:12},{age:32}]
// }

// function srav(obj){
// 	obj.name = 'raun'
// 	console.log(obj)
// 	return obj
// }
// console.log(obj1)
// console.log(srav(obj1) === obj1)
// console.log(obj1)

// const getTotalSum = (obj, path) => {
//   return Object.values(obj).reduce((sum, obj) => {
//     const value = _get(obj, path);
//     console.log(value);
//     return sum + value;
//   }, 0);
// };

// const _get = (obj, path) => {
//   console.log(obj, path);
//   const [firstKey, ...keys] = path.split('.');
//   console.log(firstKey, keys);
//   return keys.reduce((val, key) => {
//     console.log(val[key], val, key);
//     return val[key];
//   }, obj[firstKey]);
// };

// const state = {
//   0: {
//     items: [
//       {
//         id: 0,
//         name: 'Пепперони Фреш с перцем',
//         imageUrl:
//           'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
//         price: 803,
//         size: 26,
//         type: 'тонкое',
//       },
//     ],
//     totalPrice: 803,
//   },
//   1: {
//     items: [
//       {
//         id: 1,
//         name: 'Сырная',
//         imageUrl:
//           'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
//         price: 245,
//         size: 26,
//         type: 'тонкое',
//       },
//       {
//         id: 1,
//         name: 'Сырная',
//         imageUrl:
//           'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
//         price: 245,
//         size: 26,
//         type: 'тонкое',
//       },
//     ],
//     totalPrice: 490,
//   },
// };

// const totalCount = getTotalSum(state, 'items.length');

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr);
// console.log(arr['length']);

// const totalPrice = getTotalSum(state, 'totalPrice');

//понедельник задачи длина и проценты

// const weeks = {
//   0: {
//     monday: [
//       { name: 'zadacha1', flag: false },
//       { name: 'zadacha2', flag: false },
//       { name: 'zadacha2', flag: false },
//     ],
//     name: 'Понедельник',
//   },
//   1: {
//     monday: [
//       { name: 'zadacha1', flag: false, id: 0 },
//       { name: 'zadacha2', flag: false, id: 1 },
//     ],
//     name: 'Vtornik',
//   },
// };

// console.log(weeks[0].monday[0]);

// const arr = weeks[0].monday.map((elem, index) => {
//   return elem + ':' + index;
// });

// console.log(arr);
// const weeks = {
//   days: [
//     { name: 'Понедельник', id: 0, porcent: null },
//     { name: 'Вторник', id: 1, porcent: null },
//     { name: 'Среда', id: 2, porcent: null },
//     { name: 'Четверг', id: 3, porcent: null },
//     { name: 'Пятница', id: 4, porcent: null },
//     { name: 'Суббота', id: 5, porcent: null },
//     { name: 'Воскресенбе', id: 6, porcent: null },
//   ],
// };

// const initialize = {
//   items: [
//     [
//       { name: '0zadacha1', flag: true, id: 0 },
//       { name: '0zadacha2', flag: false, id: 1 },
//       { name: '0zadacha3', flag: false, id: 2 },
//       { name: '1qqqqq', flag: false, id: 3 },
//     ],
//     [
//       { name: '1asdas', flag: false, id: 0 },
//       { name: '1qqqqq', flag: false, id: 1 },
//     ],
//     [
//       { name: '44444', flag: true, id: 0 },
//       { name: '4444', flag: true, id: 1 },
//       { name: '4444444', flag: true, id: 3 },
//       { name: '44444', flag: false, id: 4 },
//     ],
//     [
//       { name: '3asdas', flag: true, id: 0 },
//       { name: '3qqqqq', flag: true, id: 1 },
//     ],
//     [],
//     [],
//     [],
//   ],
//   count: null,
// };

// for (let i = 0; i <= 7; i++) {
//   let num = 0;
//   let lengthOb = 0;

//   initialize.items[i].map((elem) => {
//     if (elem.flag == true) {
//       num += 1;
//       lengthOb++;
//     } else {
//       lengthOb++;
//     }
//   });
//   console.log(num + ':' + lengthOb + '  ' + i);
// }

// initialize.items.map((obj) => {
//   obj.map((elem) => {
//     if (elem.flag == true) {
//       num += 1;
//     } else {
//       lengthOb++;
//     }
//   });
// });

// console.log(num + ':' + lengthOb);

// weeks.days.map((el) => {
//   console.log(el);
// });

// for (let i = 0; i <= 7; i++) {
//   weeks.days[i].map((el) => {
//     initialize.items[i].map((elem) => {
//       if (elem.flag == true) {
//         num += 1;
//         lengthOb++;
//       } else {
//         lengthOb++;
//       }
//     });
//   });
// }

// initialize.items[0].map((elem) => {
//   if (elem.flag == true) {
//     num += 1;
//     lengthOb++;
//   } else {
//     lengthOb++;
//   }
// });

// console.log(num + ':' + lengthOb);
// const initialize = {
//   items: [
//     [
//       { name: 'Задача', flag: false, id: 0 },
//       { name: 'Задача', flag: false, id: 1 },
//     ],
//     [
//       { name: 'Задача', flag: false, id: 0 },
//       { name: 'Задача', flag: false, id: 1 },
//       { name: 'Задача', flag: false, id: 2 },
//       { name: 'Задача', flag: false, id: 3 },
//     ],
//     [
//       { name: 'Задача', flag: false, id: 0 },
//       { name: 'Задача', flag: false, id: 1 },
//     ],
//     [
//       { name: 'Задача', flag: false, id: 0 },
//       { name: 'Задача', flag: false, id: 1 },
//     ],
//     [
//       { name: 'Задача', flag: false, id: 0 },
//       { name: 'Задача', flag: false, id: 1 },
//     ],
//     [
//       { name: 'Задача', flag: false, id: 0 },
//       { name: 'Задача', flag: false, id: 1 },
//     ],
//     [
//       { name: 'Задача', flag: false, id: 0 },
//       { name: 'Задача', flag: false, id: 1 },
//     ],
//   ],
//   days: [
//     { name: 'Понедельник', id: 0, procent: null },
//     { name: 'Вторник', id: 1, procent: null },
//     { name: 'Среда', id: 2, procent: null },
//     { name: 'Четверг', id: 3, procent: null },
//     { name: 'Пятница', id: 4, procent: null },
//     { name: 'Суббота', id: 5, procent: null },
//     { name: 'Воскресенье', id: 6, procent: null },
//   ],
//   fetch: false,
// };

// initialize.items[1].map((elem) => {
//   console.log(elem);
//   console.log(elem.id);
// });

/*palindrom*/
/*
let text = 'madam';
let test = 'aros s ora';
const palin = text1 => {
  let num = 0;
  let clone = text1
    .split(' ')
    .map(elem => elem.split(''))
    .flat()
    .reverse()
    .join('');
  let text = clone
    .split('')
    .reverse()
    .join('');
  for (let i = 0; i < text.length; i++) {
    if (text[i] === clone[i]) {
      num += 1;
    }
  }
  if (num === text.length) {
    return true;
  } else {
    return false;
  }
};

console.log(palin(text));
console.log(palin(test));
console.log(palin('aro s s ora'));
console.log(palin(' p        r i v        e t t         e v i       r        p'));*/

/*самое длинное слово*/
/*let text = 'madam privetqwe apologize';
let test = 'aros s ora';
const palin = text1 => {
  let text = text1.split(' ');
  let num = 0;
  let res = '';
  for (let elem of text) {
    if (elem.length > num) {
      num = elem.length;
      res = elem;
    }
  }
  return res;
};

console.log(palin(text));
console.log(palin(test));
console.log(palin('aroq s s ora'));
console.log(palin(' p        r i vet        e t t         e v i       r        p'));*/
