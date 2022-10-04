let n=1234;
let sum=0,rem;
let length = n.toString().length
for(let i=0;i<length;i++){
    console.log("start",{rem, sum, n})
    rem=n%10;
    sum=sum+rem;
    n=(n-rem)/10;
    console.log("end",{rem, sum, n})
}
console.log(sum);