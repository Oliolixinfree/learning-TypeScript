// Создайте интерфейсы User и Admin.

// User должен содержать следующие ключи:
// login, email, password, isOnline, lastVisited
// Admin содержит все те же ключи, плюс ключ role.

// Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.

// Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.

interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

interface Admin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
  role: string;
}

const user1: User = {
  login: 'peaceduck',
  email: 'test@gmail.org',
  password: '132123123123',
  isOnline: true,
  lastVisited: new Date(2022, 10, 20),
};
const admin1: Admin = {
  login: 'kalipwnz',
  email: 'admin1@gmail.org',
  password: 'admin1123',
  isOnline: true,
  lastVisited: new Date(2022, 10, 20),
  role: 'super admin',
};

export function login(user: { login: string; password: string }): void {
  if ((user.login.length > 0, user.password.length > 0)) {
    console.log(`Добро пожаловать ${user.login}`);
  }
}

login(user1);
login(admin1);
