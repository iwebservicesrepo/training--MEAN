let str='ABCDABCD JS';
let len=str.length;
let strCheck= 'ABCD';
let count=0;
let startPos=0;
for(;;){
    let index= str.indexOf(strCheck,startPos);
    if(index>=0){
        count++;
        startPos=index+1;
    }
    else{
        break;
    }
}
console.log('Count of ABCD='+count);