let str='my#mother';
let len=str.length;
let newStr='';
for(let i=0;i<len;i++){
    if(str[i]!='m'){
        newStr+=str[i];
    }
}
console.log(newStr);