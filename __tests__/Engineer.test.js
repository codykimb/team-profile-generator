const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {

    const engineer = new Engineer("Cody", "123456", "codykimb@me.com", "codykimb");

    expect(engineer.name).toBe("Cody");
    expect(engineer.id).toBe("123456");
    expect(engineer.email).toBe("codykimb@me.com");
    expect(engineer.github).toBe("codykimb");

});

test('gets GitHub username', () => {

    const engineer = new Engineer("Cody", "123456", "codykimb@me.com", "codykimb");

    expect(engineer.getGithub()).toBe("codykimb");

});

test('gets employee role', () => {
    const engineer = new Engineer("Cody", "123456", "codykimb@me.com", "codykimb");

    expect(engineer.getRole()).toBe("Engineer")
})