let str='qw23BN**45g';
let newStr='';
let len=str.length;
for(let i=0;i<len;i++){
    if(str[i]>='a'&&str[i]<='z'){
        newStr+='a';
    }else if(str[i]>='A'&&str[i]<='Z'){
        newStr+='A';
    }else if(str[i]>='0'&&str[i]<='9'){
        newStr+='0'
    }else{
        newStr+=str[i];
    }
}
console.log(newStr);