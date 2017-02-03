// A Short List of Javascript problems I've solved


// Remove zeros from array & preserve array order

function removeZeros(array) {
let arr = 0;
    if (array.length === 0) {
    return array; 
    }
 for (let i=0, len=array.length; i<len; i++) {
        if (array[i] === 0 || array[i] === "0") { 
            arr = arr + 1;
for (let j=i+1; j<len; j++) {
             var n = array[j]; 
             array[j] = array[j-1]; 
              array[j-1] = n;
}
i -= 1;
}
if (i+1+arr>=len){
    return array;
}
}
}

// A food recipe ingredient amount scaling function

function getMissingIngredients(recipe, added) {
    let max = 0;
    let res = {};
  for (let item in recipe)
  {
    if (item in added)
      max = Math.max(Math.ceil(added[item] / recipe[item]), max);
  }
  if (max == 0)
    return recipe;
  for (let item in recipe)
  {
    if (!(item in added))
      res[item] = max * recipe[item];
    else if (added[item] < max * recipe[item])
      res[item] = max * recipe[item] - added[item];
  }
return res;
}

// Function that returns a single dimensional array representing Pascal's Triangle to the n-th level, given (n).

function pascalsTriangle(n) {
  var pascal = [[1]],
  tier;
  for (let i = 0; i < n-1; i++) {
    tier = [1];
    for (let j = 1; j < pascal[i].length; j++) {
      tier[j] = pascal[i][j] + pascal[i][j-1];
    }
    tier.push(1);
    pascal.push(tier);
  }

return pascal;
}

// An english to Pig Latin translator

function pigIt(str){
return str.replace(/\b(\w)(\w+)/g,function(w,f,l){return l+f+"ay";});
}

// A twitter input verifier

function generateHashtag (str) {
str = str.toLowerCase().split(' ');
for (var i=0; i<str.length; i++){
str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
}
str = str.join('');
if (str.length <= 139 && str.length > 0)
return '#' + str;
else {
return false;
}
}

// An English to ROT13 cypher translation function

function rot13(message){
  return message.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
}

// A simple walking route verification function

function isValidWalk(walk) {
  var hor = 0;
  var ver = 0;
  for (var i=0; i<walk.length; i++){
  if (walk[i] === 'n'){
  ver += 1;
  }
  else if (walk[i] === 's'){
  ver -= 1;
  }
  else if (walk[i] === 'e'){
  ver += 1;
  }
  else if (walk[i] === 'w'){
  ver -= 1;
  }
  }
  if (hor === 0 && ver === 0 && walk.length === 10){
  return true;
  } else{
  return false;
  }
}

// DNA string matching function

function DNAStrand(dna){
var res = '';
  for (var i=0; i<dna.length; i++){
  if (dna[i] === 'A'){
  res += 'T';
  }
   else if (dna[i] === 'T'){
  res += 'A';
  }
   else if (dna[i] === 'C'){
  res += 'G';
  }
   else if (dna[i] === 'G'){
  res += 'C';
  }
  }
  return res;
}

// A phone number formatting function

function createPhoneNumber(numbers){
  var str = numbers.join('');
  return '(' + str.substr(0, 3) + ')' + ' ' + str.substr(3, 3) + '-' + str.substr(6, 4);
}

// A regex pincode authenticator

function validatePIN (pin) {
var rege = /^([0-9]){1,6}$/
if (rege.test(pin) == true && pin.length === 4 || rege.test(pin) == true && pin.length === 6){
return true;
}
return false;
}

// return highest and lowest intiger in string

function highAndLow(numbers){
var arr = numbers.split(' ');
return Math.max.apply(Math, arr) + ' ' + Math.min.apply(Math, arr);
}

// Find shortest word of string

function findShort(s){
var sep = s.split(' ');
var size = 189819;
var res;
for (var i = 0; i < sep.length; i++){
if (sep[i].length < size){
 size = sep[i].length;
}
}
return size;
}

// Function that authenticates if equal x's and o's in string

function XO(str) {
var xCount = '';
var oCount = '';
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++){
    if (str[i] === 'x'){
    xCount += 'x';
    }
    else if (str[i] === 'o'){
    oCount += 'o';
    }
    }
    if (xCount.length === oCount.length){
    return true;
    }
    else {
    return false;
    }
}

