const Manager = require('../lib/Manager');

test('creates manager object', () => {

    const manager = new Manager("Cody", "123456", "codykimb@me.com", "420", "Team Cody");

    expect(manager.name).toBe("Cody");
    expect(manager.id).toBe("123456");
    expect(manager.email).toBe("codykimb@me.com");
    expect(manager.officeNumber).toBe("420");
    expect(manager.teamName).toBe("Team Cody");

});

test('gets manager role', () => {
    const manager = new Manager("Cody", "123456", "codykimb@me.com", "420", "Team Cody");

    expect(manager.getRole()).toBe("Manager")
})