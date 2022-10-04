let n=6;
let str='';
for(let i=1;i<=n;i++){
    if(i%3==1){
        str+='A';
    }
    else if(i%3==2){
        str+='B';
    }
    else if(i%3==0){
        str+='C';
    }
}
console.log(str);