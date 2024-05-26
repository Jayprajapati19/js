class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`UserName: ${this.username}`);
    }

    createId() {
        return `123`
    }
}

const jay = new User("jayy")
console.log(jay.createId())
