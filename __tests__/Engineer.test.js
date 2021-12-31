const Engineer = require('../lib/Engineer');

test('create a new engineer object', () => {
    const person = new Engineer('riley', 3, 'riley@gmail.com', 'grsmith35');

    expect(person.name).toBe('riley');
    expect(person.id).toEqual(3);
    expect(person.email).toBe('riley@gmail.com');
    expect(person.gitHub).toBe('grsmith35');
});

// test('creates a new engineer and tests their function', () => {
//     const person = new Engineer('riley', 3, 'riley@gmail.com, grsmith35');

//     expect(person.getGitHub()).toHaveProperty('gitHub');
// });