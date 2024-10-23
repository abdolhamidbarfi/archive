
//این دیزاین پترن مشاهده میکند اگر اکشن خاصی صورت گرفت، یک سری از کارها را انجام دهد

class Observable {
    
    observers : any[]

    constructor() {
       this.observers = []
    }

    add(observer : any) {
        this.observers.push(observer)
    }

    remove(observer : any) {
        this.observers = this.observers.filter((obs : any) => obs !== observer)
    }

    notify(data : any) {
        this.observers.forEach((obs : (data : any) => any) => obs(data))
    }
}

export default new Observable()