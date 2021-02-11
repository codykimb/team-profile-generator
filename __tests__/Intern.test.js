const Intern = require('../lib/Intern');

test('creates Intern object', () => {

    const intern = new Intern("Cody", "368323", "codykimb@me.com", "UT");

    expect(intern.name).toBe("Cody");
    expect(intern.id).toBe("368323");
    expect(intern.email).toBe("codykimb@me.com");
    expect(intern.school).toBe("UT");

});

test('gets Intern school', () => {

    const intern = new Intern("Cody", "368323", "codykimb@me.com", "UT");

    expect(intern.getSchool()).toBe("UT");

});

test('gets Intern role', () => {
    const intern = new Intern("Cody", "368323", "codykimb@me.com", "UT");

    expect(intern.getRole()).toBe("Intern")
})