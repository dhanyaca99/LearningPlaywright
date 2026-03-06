if("hello") console.log("string is truthy"); //string is true
if(45) console.log("string is truthy"); //integer is true
if ({}) console.log("string is truthy"); //empty object is true
if ([]) console.log("string is truthy"); //empty array is true

if("") console.log("wont print"); //empty string is false
if(null) console.log("won't print"); //null is also false result
if(undefined) console.log("won't print"); //undefined also false result
if(NAN) console.log("won't print"); //NAN also false result
if(0) console.log("won't print");
