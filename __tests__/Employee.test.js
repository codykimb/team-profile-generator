const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates employee object', () => {

    const employee = new Employee("Cody", "368323", "codykimb@me.com");

    expect(employee.name).toBe("Cody");
    expect(employee.id).toBe("368323");
    expect(employee.email).toBe("codykimb@me.com");

});