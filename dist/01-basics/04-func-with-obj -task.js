"use strict";
// Создайте интерфейсы User и Admin.
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const user1 = {
    login: 'peaceduck',
    email: 'test@gmail.org',
    password: '132123123123',
    isOnline: true,
    lastVisited: new Date(2022, 10, 20),
};
const admin1 = {
    login: 'kalipwnz',
    email: 'admin1@gmail.org',
    password: 'admin1123',
    isOnline: true,
    lastVisited: new Date(2022, 10, 20),
    role: 'super admin',
};
function login(user) {
    if ((user.login.length > 0, user.password.length > 0)) {
        console.log(`Добро пожаловать ${user.login}`);
    }
}
exports.login = login;
login(user1);
login(admin1);
