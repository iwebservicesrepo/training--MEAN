let str='x+y+xy+4x=7';
let len=str.length;
let countx=0;
let county=0;
for(let i=0;i<len;i++){
    if(str[i]=='x'){
        countx++;
    }else if(str[i]=='y'){
        county++;
    }
}
console.log('x=',countx);
console.log('y=',county);