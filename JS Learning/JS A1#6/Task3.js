function removeChar(str,char){
    let newStr='';
    let len=str.length;
    for(let i=0;i<len;i++){
        if(str[i]!=char){
            newStr+=str[i];
        }
    }
    console.log(newStr);
}
removeChar('abcaabc','a');