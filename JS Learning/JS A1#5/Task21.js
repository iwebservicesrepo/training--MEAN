let str='A1B2C3';
let len=str.length;
let newStrOdd='';
let newStrEven='';
for(let i=0;i<len;i++){
    if(i%2==0){
        newStrEven+=str[i];
    }else{
        newStrOdd+=str[i];
    }
}
console.log('Odd:'+newStrOdd);
console.log('Even:'+newStrEven);