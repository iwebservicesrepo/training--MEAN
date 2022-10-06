//a.
//i.
function largest(num1,num2,num3){
    if(num1>=num2&&num1>=num3){
        console.log('Largest is:',num1);
    }else if(num2>=num1&&num2>=num3){
        console.log('Largest is:',num2);
    }else{
        console.log('Largest is:',num3);
    }
}
largest(33,50,100);
//ii.
function replaceChar(str,char1,char2){
    let newStr='';
    let len=str.length;
    for(let i=0;i<len;i++){
        if(str[i]==char1){
            newStr+=char2
        }else{
            newStr+=str[i];
        }
    }
    console.log(newStr)
}
replaceChar('Good','o','u');
//iii.
function isSquare(num){
    for(let i=1;i<=num;i++){
        let sq=i*i;
        if(sq==num){
            return true;
        }
        }
        return false;
    }
console.log(isSquare(9));
//iv.
function fact(num){
    let f=1;
    for(let i=1;i<=num;i++){
        f=f*i;
    }
    console.log(f);
}
fact(4);
//v.
function facto(n){
    let out=1;
    for(let i=1;i<=n;i++){
        out=out*i;
    }
    return out;
}
function printfactorial(num){
    for(let i=1;i<=num;i++){
        let fact= facto(i);
        console.log('Factorial of ',i,'is ',fact)
    }
}
printfactorial(10);
