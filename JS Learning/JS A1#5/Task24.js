let str='ABCDEF';
let len=str.length;
let newStr='';
for(let i=0;i<len;i++){
    if(str[i]=='A'){
        newStr+='X';
    }else if(str[i]=='B'){
        newStr+='Y';
    }else if(str[i]=='C'){

    }else if(str[i]=='D'){

    }else{
        newStr+=str[i];
    }
}
console.log(newStr);