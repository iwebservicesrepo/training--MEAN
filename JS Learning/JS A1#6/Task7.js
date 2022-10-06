function occurence(str,char1,char2){
    let len= str.length;
    let countch1=0;
    let countch2=0;
    for(let i=0;i<len;i++){
        if(str[i]==char1){
            countch1++;
        }else if(str[i]==char2){
            countch2++;
        }
    }
    if(countch1>countch2){
        console.log('1');
    }else if(countch1==countch2){
        console.log('0');
    }else{
        console.log('-1');
    }
}
occurence('abcaabca','b','c');