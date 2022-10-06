let str='ABCABD';
let len=str.length;
if(len%2==0){
let str1=str.substring(0,len/2);
let str2=str.substring(len/2,len);
    if(str1==str2){
        console.log('Yes');
    }else{
        console.log('No');
    }
}else{
    console.log('String is not even');
}