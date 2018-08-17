const req = {
    body:{
        username: 'one4estOne',
        greeting: 'welcome'
    },
    params:{
        id:1
    }
}

// make the console log below work using destructuring

//code here 
let {greeting, username} = req.body
let {id} = req.params
greeting;
username;
id;
console.log(`${greeting} user: ${username} your id# is ${id}`)



/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }
  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/
function largeNumbers ( {first, second, third} ){
  if (first < second ) {
    return first
  } else if (second < third){
    return second
  } else if (third < first){
    return third
  }
}



