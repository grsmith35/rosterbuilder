const Employee = require('../lib/Employee');

test('create a new employee object', () => {
    const person = new Employee('riley', 4, 'riley@mail.com');

    expect(person.name).toBe('riley');
    expect(person.id).toEqual(4);
    expect(person.email).toBe('riley@mail.com');
});

// test('create new employee and get their name', () => {
//     const person = new Employee('riley', 4, 'riley@mail.com');

//     expect(person.getName()).toHaveProperty('name');
//     expect(person.getId()).toHaveProperty('id');
//     expect(person.getEmail()).toHaveProperty('email');
//     expect(person.getRole()).toHaveProperty('role');
// })