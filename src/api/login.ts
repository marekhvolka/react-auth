import { LoginData } from '../models/LoginData';
import { User } from '../models/User';

const users: User[] = [
  {
    id: '1',
    first_name: 'Jon',
    other_names: 'Williams',
    password: 'pwd',
    address: {
      street: '1 Mill Street',
      town: 'Northampton',
      county: 'Northamponshire',
      postcode: 'NU7 JK8',
    },
    mobile: '08982 92829',
    email: 'jwlll@gmail.com',
    company: 'Xerini',
    preferences: {
      contact: ['mail', 'sms'],
    },
  },
];

export const handleLogin = (values: LoginData): Promise<User> => new Promise((resolve, reject) => {
  const user = users.find((user) => user.email === values.email && user.password === values.password);

  if (user) {
    return resolve(user);
  }

  return reject(new Error('Invalid credentials!'));
});
