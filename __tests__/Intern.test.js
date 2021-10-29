const Intern = require('../lib/Intern');

test('create a new intern object', () => {
    const person = new Intern('riley', 6, 'email@email.com', 'uofu');

    expect(person.name).toBe('riley');
    expect(person.id).toEqual(6);
    expect(person.email).toBe('email@email.com');
    expect(person.school).toBe('uofu');
});

test('create a new intern object and use getSchool method', () => {
    const person = new Intern('riley', 6, 'email@email.com', 'uofu');

    expect(person.getSchool()).toHaveProperty('school');
});