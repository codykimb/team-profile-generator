const Manager = require('../lib/Manager');

test('creates manager object', () => {

    const manager = new Manager("Cody", "368323", "codykimb@me.com", "420");

    expect(manager.name).toBe("Cody");
    expect(manager.id).toBe("368323");
    expect(manager.email).toBe("codykimb@me.com");
    expect(manager.officeNumber).toBe("420");

});

test('gets manager role', () => {
    const manager = new Manager("Cody", "368323", "codykimb@me.com", "UT");

    expect(manager.getRole()).toBe("Manager")
})