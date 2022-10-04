let n=7;
let str='';
for(let i=n;i>0;i--){
    if(i%3==0){
        str+='X';
    }else{
        str+=i;
    }
}
console.log(str);