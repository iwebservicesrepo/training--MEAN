//a
//i.
let str='12zZ12#%ebra';
let len= str.length;
let count=0;
for(let i=0;i<len;i++){
    if(str[i]=='z'|| str[i]=='Z'){
        count++
    }
}
console.log(count);
//ii.
let newstr='';
for(let i=0;i<len;i++){
    newstr= newstr+ str[i]+str[i];
}
console.log(newstr);
//iii.
let alpha='';
let digits='';
let rest='';
for(let i=0;i<len;i++){
    if(str[i]>='a'&&str[i]<='z'){
        alpha+=str[i];
    }else if(str[i>='A'&&str[i]<='Z']){
        alpha+=str[i];
    }
    else if(str[i]>=0&&str[i]<=9){
        digits+=str[i];
    }else{
        rest+=rest[i];
    }
}
console.log(alpha , rest , digits);
//iv.
let str1='##m#';
let out='';
let len1= str1.length;
for(let i=0;i<len1;i++){
    let ch=str1[i];
    let prevCh=str1[i-1];
    if(ch=='#'){
        if(prevCh=='#'){

        }else{
            out=out+ch;
        }
    }else{
        out=out+ch;
    }
}
console.log(out);
//v.
let str2='AaTbAcdAfg';
let str3='A';
let count1=0;
let startPos=0;
for(;;){
    let index= str2.indexOf(str3,startPos);
    if(index>=0){
        count1++;
        startPos=index+1;
    }
    else{
        break;
    }
}
console.log(count1);
//vi.
let str4='Hello I am learning JavaScript';
let sep=' ';
let startPos1=0;
for(;;){
    let index1= str4.indexOf(sep,startPos1);
    if(index1>=0){
        let word=str4.substring(startPos1,index1);
        console.log(word);
        startPos1=index1+1;
    }else{
        let word=str4.substring(startPos1);
        console.log(word);
        break;
    }
}


