

//اگر بخواهیم فقط یک شی از یک کلاس داشته باشیم و هرگاه و هرجا بخواهیم همان شی را فراخوانی کنیم

/*
class User {

}

let userA = new User()
let userB = new User()

userA === userB ==> false

در این روش هر بار یک شی ساخته میشود ولی ما این را نمیخواهیم
*/

let instance : any;

class User {
    static getInstance() {
        if (!instance) {
            instance = new User()
        }

        return instance
    }
}

let userA = User.getInstance()
let userB = User.getInstance()

console.log(userA === userB) // log true
