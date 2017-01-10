/* 
================
Prerequisits
================

Q: Why have values? 
A: When you run a program, you need a method to track various types of data. Values are small units of data 
   that the program keeps reack of by storing it into the computers hardware memory. (RAM)

Q: Why have types? 
A: It allows interpreters (Javascript) to assign special rules and toolkits pertaining to them. 

Operators = +, -, % .. ect. 
Expressions = 3+1 
Statement = ends an expression with ";"

*/



//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

var detectNetwork = function(cardNumber) { 
   
   var firstTwo = cardNumber.substring(0,2);

   if (cardNumber.substring(0,1) === '4'){
   		if (cardNumber.substring(1,2) ==='9'){
   			firstTwo = cardNumber.substring(0,4);
   		}else{
   			firstTwo = '4';
   		}
    }else if (cardNumber.substring(0,3) === "624"){
   		firstTwo = cardNumber.substring(0,3);
   	}else if (cardNumber.substring(0,3) === "625"){
   		firstTwo = cardNumber.substring(0,3);
   	}else if (cardNumber.substring(0,3) === "626"){
   		firstTwo = cardNumber.substring(0,3);
   	}else if (cardNumber.substring(0,6) === '564182'){
   		firstTwo = cardNumber.substring(0,6);
   	}else if (cardNumber.substring(0,6) === '633110'){
   		firstTwo = cardNumber.substring(0,6);
   	}else if (cardNumber.substring(0,4) === '6759'){
   		firstTwo = cardNumber.substring(0,4);
    }else if (cardNumber.substring(0,1) === '6'){
   		if(cardNumber.substring(1,2) === '0'){
   			firstTwo = cardNumber.substring(0,4);
   		}else if (cardNumber.substring(1,2)=== '4'){
   			firstTwo = cardNumber.substring(0,3);
   		}else if (cardNumber.substring(1,2)=== '3'){
   			firstTwo = cardNumber.substring(0,4);
   		}else if (cardNumber.substring(1,3) === '22'){
   			firstTwo = cardNumber.substring(0,6);
   		}else if (cardNumber.substring(1,3)=== '28'){
   			firstTwo = cardNumber.substring(0,4);
   		}
   }else if (cardNumber.substring(0,2) === '50'){
   		firstTwo = cardNumber.substring(0,4);
   	}

   
   var union = [];
   for (var x = 622126; x < 622926; x++){
   	union.push(x.toString());
   }
   for (var y = 624; y < 627; y++){
   	union.push(y.toString());
	}
	for (var z = 6282; z < 6289; z++){
   	union.push(z.toString());
	}

console.log(firstTwo);
   var cards = {
   	diners: {pref: ['38','39'], leng: [14], name:"Diner's Club"},
   	amex: {pref: ['34','37'], leng: [15], name:"American Express"},
   	visa: {pref: ['4'], leng: [13,16,19], name:"Visa"},
   	mastercard: {pref: ['51','52','53','54','55'], leng:[16], name:"MasterCard"},
   	discover: {pref:['6011','644','645','646','647','648','649','65'], leng:[16,19], name:"Discover"},
   	maestro: {pref:['5018','5020','5038','6304'], leng:[12,13,14,15,16,17,18,19], name:"Maestro"},
   	union: {pref: union, leng: [16,17,18,19], name:"China UnionPay"},
   	switch: {pref: ['4903','4905','4911','4936','564182','633110','6759'], leng: [16,18,19], name:"Switch"},
   };



   for (var type in cards){ // check each type of card
   	 for (var x = 0; x < cards[type].pref.length; x++){ 
   	 	if (firstTwo === cards[type].pref[x]){ // check each pref to see if match
   	 		for (var y = 0; y < cards[type].leng.length; y++){ 
   	 			if (cardNumber.length === cards[type].leng[y]){ // check length
					return cards[type].name;
   	 			}
   	 		}	
   	 	}
   	 }
   }
 return 'Invalid';
};


//console.log(detectNetwork('6221267890123456')); //(Union Pay)
//console.log(detectNetwork('6241267890123456')); //(Union Pay)
//console.log(detectNetwork('6282267890123456')); //(Union Pay)
//console.log(detectNetwork('4123456789012'));//(Visa)
//console.log(detectNetwork('4905456789012123'));//(switch)
//console.log(detectNetwork('6759456789012123'));//(switch)
//console.log(detectNetwork('6331106789012123'));//(switch)
//console.log(detectNetwork('5641826789012123'));//(switch)

/*
console.log(detectNetwork('38345678901234')); //(Diner's Club)
console.log(detectNetwork('39345678901234')); //(Diner's Club)
console.log(detectNetwork('343456789012345'));//(American Express)
console.log(detectNetwork('373456789012345'));//(American Express)
console.log(detectNetwork('4123456789012'));//(Visa)
console.log(detectNetwork('4123456789012345'));//(Visa)
console.log(detectNetwork('4123456789012345678'));// (Visa)
console.log(detectNetwork('5112345678901234'));//(MasterCard)
console.log(detectNetwork('5212345678901234'));//(MasterCard)
console.log(detectNetwork('5312345678901234'));//(MasterCard)
console.log(detectNetwork('5412345678901234'));//(MasterCard)
console.log(detectNetwork('5512345678901234'));//(MasterCard)
console.log(detectNetwork('6011567890123456'));//(Discover)
console.log(detectNetwork('6011567890123456789'));//(Discover) 
console.log(detectNetwork('6441567890123456789'));//(Discover) 
console.log(detectNetwork('6511567890123456789'));//(Discover) 

console.log(detectNetwork('5018546789012'));//(Maestro) 
console.log(detectNetwork('50185467890123'));//(Maestro) 
console.log(detectNetwork('501854678901234'));//(Maestro) 
console.log(detectNetwork('5018546789012345'));//(Maestro) 
console.log(detectNetwork('6304546789012345'));//(Maestro) 
console.log(detectNetwork('6304546789012345444'));//(Maestro) 
 */











