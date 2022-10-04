//i.
let num=21
if(num%2==0){
    console.log(num)
}
else{
    console.log(num+1);
}
//ii.
if (num%6==0){
    console.log(+num+' is divisible by 2,3 and 6');
}
else if(num%3==0){
    console.log(+num+' is divisible by 3');
}
else if(num%2==0){
    console.log(+num+' is divisible by 2');
}
else{
    console.log(+num+' is not divisible by 2,3 and 6');
}
//iii.
let n=3;
let str='';
for(let i=1;i<=n;i++){
    if(i%2==0){
        str=str+'K';
    }
    else{
        str=str+'J';
    }
}
console.log(str);
//iv.
let count=0;
for(let i=2;i<n;i++){
    if(n%i==0){
        count=1;
    }
}
if(count==0){
    if(n==1){
        console.log(+n+' is neither Prime nor Composite');
    }
    else{
    console.log(+n+' is Prime');
}
}
else{
    console.log(+n+' is Composite')
}