function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("İsim: " + this.name +"Yaş: " + this.age);

    }
}
const emp1 = new Employee("Mustafa",25);
const emp2 = new Employee("Oğuz",25);

console.log(emp1);
console.log(emp2);
