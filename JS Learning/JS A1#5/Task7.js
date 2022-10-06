let str='zzzoozzm';
let newStr='';
let len=str.length;
for(let i=0;i<len;i++){
    if(str[i]=='z'){
        newStr+='x';
    }
    else{
        newStr+=str[i]
    }
}
console.log(newStr);