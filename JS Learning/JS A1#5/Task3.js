let str='moo zoommm';
let len=str.length;
let count=0;
for(let i=0;i<len;i++){
    if(str[i]=='m'){
        count++
    }
}
console.log('Count of m=',count);