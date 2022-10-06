let str='JavaMasters';
let newStr='';
let len=str.length;
for(let i=0;i<len;i++){
    if(i%2==0){
        newStr+=str[i];
    }
}
console.log(newStr);