const Manager = require('../lib/Manager');

test('create a new manager object', () => {
    const person = new Manager('riley', 3, 'riley@gmail.com', 407);

    expect(person.name).toBe('riley');
    expect(person.id).toEqual(3);
    expect(person.email).toBe('riley@gmail.com');
    expect(person.officeNumber).toEqual(407);
});