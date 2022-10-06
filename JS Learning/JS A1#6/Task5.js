function triangle(side1,side2,side3){
    if(side1+side2>side3&&side2+side3>side1&&side1+side3>side2){
        return true;
    }else{
        return false;
    }
}
console.log(triangle(5,6,7));