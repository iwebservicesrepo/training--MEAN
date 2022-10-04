let n=6;
let str='';
for(let i=1;i<=n;i++){
    if(i%2==0){
        str+='+'+i;
    }else{
        str+='-'+i;
    }
}
console.log(str);