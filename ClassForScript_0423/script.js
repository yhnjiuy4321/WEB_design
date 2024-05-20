function Person(first,last,age,eye){
    this.firstname=first;
    this.lastname=last;
    this.age=age;
    this.eyecolor=eye;

}

let myFather = new Person("John","doe",50,"blue")

console.log(myFather.age)

let myMother=Object.create(myFather) ;/*若無此行，爸媽的年齡會一樣*/

myMother.age=51;

console.log(myFather.age)
console.log(myMother.age)

let th=this;
console