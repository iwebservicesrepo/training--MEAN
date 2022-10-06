let str='qw2B**5g';
let len=str.length;
let newStrLower='';
let newStrUpper='';
let newStrDigits='';
for(let i=0;i<len;i++){
    if(str[i]>='a'&&str[i]<='z'){
        newStrLower+=str[i];
    }else if(str[i]>='A'&&str[i]<='Z'){
        newStrUpper+=str[i];
    }else if(str[i]>=0&&str[i]<=9){
        newStrDigits+=str[i];
    }
}
console.log(newStrLower+newStrDigits+newStrUpper);