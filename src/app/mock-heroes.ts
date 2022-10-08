import { User } from './hero';

export const USERS: User[] = [
    { id: 1, username: 'mj', email: 'mj@test.com', role: 'user'},
    { id: 2, username: 'luc', email: 'luc@test.com', role: 'user'},
    { id: 3, username: 'rowena', email: 'rowena@test.com', role: 'user' }
];

export const ADMINS: User[] = [
    { id: 1, username: 'eric', email: 'eric@test.com', role: 'admin'}, 
    { id: 2, username: 'wylkmer', email: 'wylkmer@test.com', role: 'admin'},
    { id: 3, username: 'arjay', email: 'arjay@test.com', role: 'admin'}
];