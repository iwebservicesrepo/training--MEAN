let str='12049brt';
let len=str.length;
let newStr='';
for(let i=0;i<len;i++){
    if(str[i]==1){
        newStr+='@';
    }else if(str[i]==2){
        newStr+='#';
    }else if(str[i]==3){
        newStr+='&';
    }else if(str[i]>=4&&str[i]<=9){
        newStr+='$';
    }else{
        newStr+=str[i];
    }
}
console.log(newStr);