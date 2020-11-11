let i = 100;

while (i < 200) {
  console.log(i);
  i++;
}
console.log(i);





/* let num = i + 100;
while (num <= 200) {
if (num % 3 === 0) {
  console.log('Loopy');
} else if (num % 4 === 0) {
  console.log('Lighthouse');
} else if (num % 3 === 0 && num % 4 === 0) {
  console.log('LoopyLighthouse');
}
console.log(num);
num++
} */


/* while (i <= 200) {
  console.log(i);
  i++;
  if(i%3) {
    console.log('Loopy');
  } else if(i%4) {
    console.log('Lighthouse');
  } else if (i%3 && i%4) {
    console.log('LoopyLighthouse');
  }
  
} */


/* 
      let num = i + 100;
      if (num % 12 === 0) {
        assert.equal(log, &quot;LoopyLighthouse&quot;, &quot;For number &quot; + num + &quot; output should be LoopyLighthouse but I found &quot; + log);
      } else if (num % 3 === 0) {
        assert.equal(log, &quot;Loopy&quot;, &quot;For number &quot; + num + &quot; output should be Loopy but I found &quot; + log);
      } else if (num % 4 === 0) {
        assert.equal(log, &quot;Lighthouse&quot;, &quot;For number &quot; + num + &quot; output should be Lighthouse but I found &quot; + log);
      } else {
        expect(log).to.be.equal(num, &quot;Make sure you console.log the number!&quot;) */