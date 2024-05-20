class Person {
    constructor(first, last, age, eye) {
        this.firstname = first;
        this.lastname = last;
        this.age = age;
        this.eyecolor = eye;
    }
    age(){
        console.log(this.firstname+""+this.age)
    }
}



// 創建一個新的 Person 實例
var person1 = new Person("John", "Doe", 30, "blue");

// 存取屬性並輸出
console.log(person1.firstname); // 輸出: John
console.log(person1.lastname);  // 輸出: Doe
console.log(person1.age);       // 輸出: 30
console.log(person1.eyecolor);  // 輸出: blue
