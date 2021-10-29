class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee'
    }
    
    getName() {
        return {
            name: this.name
        };
    };

    getId() {
        return {
            id: this.id
        };
    };

    getEmail() {
        return {
            email: this.email
        };
    };

    getRole() {
        return {
            role: this.role
        };
    };
}

module.exports = Employee;