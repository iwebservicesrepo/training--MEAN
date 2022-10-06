let str='ab11cd22ef';
let len=str.length;
let newStr='';
for(let i=0;i<len;i++){
    if(str[i]==1){
        newStr+='@';
    }else if(str[i]==2){
        newStr+='#';
    }else{
        newStr+=str[i];
    }
}
console.log(newStr);