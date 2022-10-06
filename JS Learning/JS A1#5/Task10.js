let str='qw23BN**45g';
let newStr='';
let len=str.length;
for(let i=0;i<len;i++){
    if(str[i]>=0&&str[i]<='9'){
        newStr+=str[i];
    }
}
console.log('Digits=',newStr);