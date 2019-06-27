console.log(__dirname, __filename);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log('moje ime je' + this.name + ' i ja imam' + this.age + ' godina');
    }
}
module.exports = Person;