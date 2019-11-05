//fizzBuzz calculator
fizzBuzz = i => {
  let a = i % 3 == 0,
    b = i % 5 == 0;
  return (a ? "Fizz" : "") + (b ? "Buzz" : "") + (a || b ? "" : i);
};

//With loop (length: 111)
for(let j=0;++j<100;)console.log((i=>{let a=i%3==0,b=i%5==0;return(a?"Fizz":"")+(b?"Buzz":"")+(a||b?"":i)})(j))
