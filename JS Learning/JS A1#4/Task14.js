let n=6;
let str='';
for(let i=1;i<=n;i++){
    if(i%3==1){
        str+='P'+i;
    }
    else if(i%3==2){
        str+='Q'+i
    }
    else if(i%3==0){
        str+='R'+i
    }
}
console.log(str);
