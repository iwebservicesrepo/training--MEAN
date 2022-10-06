function sumOfDigits(num){
    let sum=0,rem;
    let len= num.toString().length;
    
    for(let i=0;i<len;i++){
        rem=num%10;
        sum=sum+rem;
        num=(num-rem)/10;  
    }
    console.log(sum);
}
sumOfDigits(789);