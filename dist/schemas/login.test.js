"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = require("./login");
test('Should return true given valid data', () => __awaiter(this, void 0, void 0, function* () {
    const validData = {
        email: 'david@stenstroem.dk',
        password: '123456gfdsal'
    };
    expect(login_1.loginSchema.isValidSync(validData)).toBe(true);
}));
test('Should return false given invalid data', () => {
    const invalidData = {
        email: 'davidstenstroemdk',
        password: ''
    };
    expect(login_1.loginSchema.isValidSync(invalidData)).toBe(false);
});
//# sourceMappingURL=login.test.js.map