function count(){ /*父功能(函式)*/
    let counter=0;
    return function (){  /*子功能(函式內涵式)*/
        counter+=1;
        return counter;
    }


}
let c =count();
c();
c();
console.log(c());
