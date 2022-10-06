let str='123456789';
let middle='';
let len=str.length;
let index= Math.floor(len/2);
for(let i=0;i<len;i++){
    if(i==index){
        middle= str[i];
    }
}
console.log('Middle Char='+middle);
console.log('Index:'+index);

