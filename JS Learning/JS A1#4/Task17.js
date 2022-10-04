let n=5;
let sum=0;
let str = '';
for(let i=1;i<=n;i++){
    if(i%2==0){
        sum+=i;
        // str  += "+"+i
        str += `+${i}`
    }else{
        sum-=i;
        // str  += "-"+i
        str += `-${i}`
    }
}
console.log(str+"="+sum);
