function prime(num){
    let count=0;
    for(let i=2;i<num;i++){
        if(num%i==0){
            count=1;
        }
    }
    if(count==1){
        return false;
    }else{
        return true;
    }
}
console.log(prime(49));