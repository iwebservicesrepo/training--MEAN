let str1='AAXXXBBYYYCXXDYY';
let out='';
let len1= str1.length;
for(let i=0;i<len1;i++){
    let ch=str1[i];
    let prevCh=str1[i-1];
    if(ch=='X'){
        if(prevCh=='X'){

        }else{
            out=out+ch;
        }
    }else if(ch=='Y'){
        if(prevCh=='Y'){

        }else{
            out=out+ch;
        }
    }
    else{
        out=out+ch;
    }
    
}
console.log(out);