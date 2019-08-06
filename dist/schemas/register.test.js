"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("./register");
test('Should return true given valid data', () => {
    const validData = {
        name: 'David',
        email: 'david@stenstroem.dk',
        password: 'kgjdhswujjddjdj'
    };
    expect(register_1.registerSchema.isValidSync(validData)).toBe(true);
});
test('Should return false given invalid data', () => {
    const invalidData = {
        name: 'David',
        email: 'davidstenstroemdk',
        password: 'kgjdhswujjddjdj'
    };
    expect(register_1.registerSchema.isValidSync(invalidData)).toBe(false);
});
//# sourceMappingURL=register.test.js.map