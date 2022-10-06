let str='q#w2@B**5g'
let len=str.length;
let newStr='';
for(let i=0;i<len;i++){
    if(str[i]>='a'&&str[i]<='z'){

    }else if(str[i]>='A'&&str[i]<='Z'){

    }else if(str[i]>=0&&str[i]<=9){

    }else{
        newStr+=str[i];
    }
}
console.log(newStr);