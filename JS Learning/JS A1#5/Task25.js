let str1='a+++b++c+';
let out='';
let len1= str1.length;
for(let i=0;i<len1;i++){
    let ch=str1[i];
    let prevCh=str1[i-1];
    if(ch=='+'){
        if(prevCh=='+'){

        }else{
            out=out+ch;
        }
    }else{
        out=out+ch;
    }
}
console.log(out);
