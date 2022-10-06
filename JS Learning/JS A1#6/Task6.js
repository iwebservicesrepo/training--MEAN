function reverseString(str){
    let len=str.length;
    let newStr='';
    for(let i=len-1;i>=0;i--){
        newStr+=str[i];
    }
    console.log(newStr);
}
reverseString('Perfect')