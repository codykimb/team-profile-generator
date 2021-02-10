const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates employee object', () => {

    const employee = new Employee("Cody", "368323", "codykimb@me.com");

    expect(employee.name).toBe("Cody");
    expect(employee.id).toBe("368323");
    expect(employee.email).toBe("codykimb@me.com");

});

test('gets employee name', () => {
    const employee = new Employee("Cody", "368323", "codykimb@me.com");

    expect(employee.getName()).toBe("Cody")
})

test('gets employee id', () => {
    const employee = new Employee("Cody", "368323", "codykimb@me.com");

    expect(employee.getId()).toBe("368323")
})

test('gets employee email', () => {
    const employee = new Employee("Cody", "368323", "codykimb@me.com");

    expect(employee.getEmail()).toBe("codykimb@me.com")
})

test('gets employee role', () => {
    const employee = new Employee("Cody", "368323", "codykimb@me.com");

    expect(employee.getRole()).toBe("Employee")
})