let n=9;
let str='';
let a='';
for(let i=1;i<=n;i++){
    if(n%i==0){
        str+=i+'#';
        
    }else{
        a+=i+'#';
        
    }
}
console.log('Divide : '+str);
console.log('Not Divide : '+a);