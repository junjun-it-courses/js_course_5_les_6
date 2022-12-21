class User {
    firstName = null;
    lastName = null;

    constructor() {

        this.fetchFirstName();
    }

    async fetchFirstName() {
        const req = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await req.json();

        console.log(data);

        this.firstName = data.name;
    }



}


new User();