"use stricrt"
// --------------------Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// let a=oddoreven(prompt("enter the no"));

//      // if(num % 2===0){
//      //     console.log("Even")
//      // }
//      // else{
//      //     console.log("odd")
//     // }

// function oddoreven (num){
//     if(num % 2===0){
//              console.log("Even")}
        
//          else{
//          console.log("odd")}
    
// return num
// }
// console.log(a)



// -------------Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.-------------------------------------------------------------------------------------------------------

// let n=prompt("enter the first no");
// let x=3;
// let y=4;

//     if(!(n % x===0 && n % y===0)){
//         console.log("false")
//     }
//     else{
//         console.log("true");
//     }




// ------------------------------------Given a word, your job is to return the middle character(s) of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.---------------------------------------------------------

// let str='testing';
// let output = "";
// if (str.length%2 != 0) {
//     output = str[Math.trunc(str.length/2)]
// }
// else {
//     output += str.slice(str.length/2-1 , str.length/2+1)
// }

// console.log(output);





// -------------------------------Given an integer array nums, move all 0's in the array to the end of it while maintaining the relative order of the non-zero elements. Achieve this without copying the array or creating a new array.-------------------------------------------------------

// let index=[0,1,0,3,12];
// // let index1=index.length
// let new_arr = [];
// let count = 0;
// for (let value of index) {
//     if (value !=0) {
//         new_arr[count] = value;
//         count++
//     }
// }
// for (let value of index) {
//     if (value == 0) {
//         new_arr.push(value);
//     }
// }
// console.log(new_arr);

// -------------------------------------------------------------------------------------------------------


// let a=0;
// for(let ans of num){
//     if (ans*2){
//         a=ans
//     }

// }
// console.log(a);


// ----------------Given a string which includes only letters, write a function that produces the outputs below.---------------------------------------------------------------------------------------


// let str='abcd';
// let spl=str.split('')
// // console.log(spl);
// let sum='';
// for (let i=0;i<spl.length;i++){

//     sum+=spl[i].toUpperCase()+spl[i].toLowerCase().repeat(i)+"-"
    
// }
// console.log(sum);


// --------------------------small function -------------------------------------------------------------------------
// let name="babu";
// let age=24;
// let interst=["nature & photography"]

// function wishes(){
//     // let add="im name is "+name+" i love "+interst;
//     let add=`im name is ${name} i love ${interst}`;
//     console.log(add)
// }
// wishes()



// ---------Return the number (count) of vowels (a, e, i, o, u) in the given string. The input string will only consist of lower case letters and/or spaces.-----------


// let str='pear tree';
// let count=0;
// for(let i=0;i<str.length;i++){
//     if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//      count++
     
//     }
// }
// console.log(count)



// -------------------------------------------------------------------------------------------------------Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and returns a new string with all vowels (a, e, i, o, u) removed.------------------------------------------------------------------------------------------

// let str="This website is for losers LOL!"
// let arr1=str.split("")
// let arr=[];
// for(let i=0;i<arr1.length;i++){
    
//     if(!(arr1[i]=="a"||arr1[i]=="e"||arr1[i]=="i"||arr1[i]=="o"||arr1[i]=="u")){
//        arr.push(arr1[i])

//     }
// }
// console.log(arr.join(""))



// -----------Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces.------------------------------------------------------------------------------------------


// let str="Hey fellow warriors"
// let str1=str.split(" ");
// // console.log(str1);

// for(let i=0;i<str1.length;i++){
//    if(str1[i].length>5){
//     // console.log(str1);

//    str1[i]=str1[i].split("").reverse().join("");
//    }
    
// }
// console.log(str1.join(" "));



// ---------Given an array of numbers, write a function that returns the sum of all of the positives ones. If the array is empty, the sum should be 0.---------------------------------------------------------------------------------------


// let arr=[1, -2, 3, -4, 5];
// let count=0;

// for (let num of arr){
//     if(num > 0){
//         count+=num

        
//     }
// }
// console.log(count);




// -----------Write a function that given the input string name, returns the greeting statement Hello, <name> how are you doing today?--------------------------------


// let myname="babu";

// let greeting="Hello,"+" "+ myname+" "+"how are you doing today?";

// console.log(greeting)


// let name="Babu"
// let called=greet(name)


// function greet(name) {
//     var greeting = "Hello, " + name + " how are you doing today?";

//     return greeting;
//   }

//   console.log(called)


// ------------------------------------------------------------------------------------------------------

// let str="streess";
// // let str1=str.split("");
// for(let i=0;i<str.length;i++){
//     // console.log(str[i]);
    
//     for(let j=i;j<str.length;j++){
//         console.log(str[j]);
        
//         if(str[i]!==str[j]){

            

//         }
//     }
// }


// --------Write a function that given an integer array nums of length n, returns an array of length 2n where nums is concatenated to itself.--------------------------------------------------------------------------------------


// let arr = joing([4,3,2,1]);
// function joing (num){
//     var newarr=[];
// newarr.push(num.concat(num))

// return newarr


// }console.log(arr);



// ------Write a function that turns a given string into a wave! You will be passed a string and you must return that string in an array where each letter takes turns to become uppercase. The input string will always be lowercase but may be empty. If you encounter a whitespace then pass over it.---------------------------------------------------------------------------------------------

// let str="Dckap";
// let str2=str.toLowerCase()
// // console.log(str2);

// let newstr=[];

// for(let i=0;i<str2.length;i++){

//     if(str2[i] !== " "){
//         newstr[i]=str2.slice(0,i)+str2[i].toUpperCase()+str2.slice(i+1);

//     }
   
// }
// console.log(newstr);


// // -------------------------------------------------Remove Duplicates from Sorted Array-----------------------------------------------------

// let arr=[0, 1, 1, 1, 2, 2, 3, 3, 4];
// var count=0;
// for(let i=0;i<arr.length;i++){
   
//     for(j=i+1;j<arr.length;j++){
     
//         if(arr[i]===arr[j]){
//           count++
          
//         }
//     }
// }console.log(count);

// --------------------------------------------- Reversed Strings------------------------------------------------------

// let str="hello"

// for(let i=0;i<str.length;i++){
   
//     str=str.split("").reverse().join("");
   
// }
// console.log(str);
// -------------------------------------------------------------------------------------------

// let arr1 = "aabbggjhkkk";
// let arr = arr1.split("");
// console.log(arr);
// var count = 0;
// let str=""
// for (let i=0; i<arr.length; i++) {
  
//         for (let j=i+1; j<arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++
//                 break  
//         }
//         if(count!=0 && arr1.includes(str[i])){
//           arr1.push(str[i])
//         }
        
//   }
// }
// console.log(count);


// ----------------The marketing team is spending way too much time typing in hashtags. Let's help them with our own Hashtag Generator! Here's the deal:-----------------------------------------------------------------------------------------

// let str='Do we have a Hashtag';
// let arr=str.split(" ");
// let str2=[];
// for(let i=0;i<arr.length;i++){
//  str2.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
 
// }
// str2.unshift("#")
// // console.log(str2)
// var b = str2.join(" ")
// var c = b.replaceAll(" ",'') 
// console.log(c);

// -----------------------------------------------------------------------------------------------------------------

// let  accounts= [[1,5],[7,3],[3,5]];

// // let firstcostemer=[];
// // let seccostemer=[];
// // let lastcostemer=[];

// for(let i=0;i<accounts.length;i++){
// //  accounts[0]=[1,5];
//   accounts[0]= accounts[i][0] + accounts[0][1]
//   // console.log(accounts);

//   accounts[1]= accounts[i][0] + accounts[1][1]
 
//   accounts[2]= accounts[i][0] + accounts[2][1]
  
// }
// console.log(accounts);

// ---------------------- Who likes it?--------------------------------------------------------------------------


// let like=getlikes([]);
// // let like=getlikes(["ramu"]);
// // let like=getlikes(["ramu","bala"]);
// // let like=getlikes(["ramu","bala","kishor"]);

// function getlikes (names){
//     var len = names.length;
//     // console.log(len);
//     if(len==0){
//         console.log('no one likes this');
//     }
//     else if(len==1){
//         console.log(names[0]+"like this")

//     }
//     else if(len==2){
//         console.log(names[0]+" "+"and"+" "+names[1]+"like this");
//     }
//     else if (len==3){
//         console.log(names[0]+","+names[1]+" "+"and"+" "+names[2]+"like this")   
//      }
     

//     return len


// }

// -------------------------Square Every Digit------------------------------------------------------------------------------

// let num=2121;
// let num2=num.toString();
// let num3=num2.split('')
// // console.log(num3);
// for(let i=0;i<num3.length;i++){
//     num3[i]=num3[i]*num3[i]
// }
// console.log(num3.join(""));

// --------------------------------------------------------------------------------------------

// let descendingOrder=(712902)
// let str=descendingOrder.toString();
// let str1=str.split('');
// // let str2=str1.sort();
// //  for(let i=str1.length;i<0;i++){
// //     console.log(str1[i]);
// //  }

// // console.log(str2);
// // let output=[];
// // for(let i=str2.length-1;i>=0;i--){
// //     output.push(str2[i])
// // }
// // console.log(output.join(''));

// --------------------------------------------------------------------------------------------

// let str="babukumar@gmail.com"

// let str4=str.slice(0,)
// let str1=str.search("@")
// let str2=str.slice(4,9);
// let str3=str.replace(str2,"....")
//  console.log(str3);



// -----------------------------frequency distribution------------------------------------------------------------------

// let arr=(["A","B","A","A","A"]);
// let obj={}

// for(let i=0;i<arr.length;i++){
//     let element=arr[i]
    
//     if(obj[element] == undefined){
//         obj[element]=1
      

//     }
//     else{
//         obj[element]+=1

//     }
// } console.log(obj);

// -------------------lowecase &uppercase map--------------------------------------------------------------------------------

// let mapping=["a","b","c"];

// let obj={};
// for(let a in mapping){
//     obj[mapping[a]]=mapping[a].toUpperCase();
//     }
//     console.log(obj);


    // let mapping=["a","b","c"];

    //  let obj={};
    //   for(let a of mapping){
    //     obj[a]=a.toUpperCase();
    //    }
    //        console.log(obj);
   
 
//   ----------------------------------------------------------------------------------------------------

//     let arr = [28,9,2,4]

//     let obj1 = { name : "babu", age : 24, city : "tirunelveli"}

// for(let  a in arr ){
//    console.log(arr[a]);
// }
// for(let b in obj1){
//     console.log(obj1.city);
// }

// -----------------------------------------------------------------------------------

// let products={computer:600, tv:800,radio:50,mobile:501}

// let output=[]
// var count = 0
// for (let a in products){
//     // console.log([a])
//     // console.log(products[a])
//     if(products[a]>=500){

//         // console.log([a])
//         output[count++] =  [a]
//     }

// }
// console.log(output.flat())

// -----------------------------------------------------------------------------------------------
// const numbers = [1, 4, 9, 16];
// for (let a of numbers){
//     var num=a*2
//     console.log(num);
// }

// -----------------------------------------------------------------------------------------

