let str='qw2B**5g';
let newStr='';
let len=str.length;
for(let i=0;i<len;i++){
    if(str[i]>='a'&&str[i]<='z'){
        newStr+=str[i]+str[i];
    }else if(str[i]>='A'&&str[i]<='Z'){
        newStr+=str[i]+str[i];
    }else if(str[i]>=0&&str[i]<=9){
        newStr+=str[i]+str[i]+str[i];
    }
}
console.log(newStr);