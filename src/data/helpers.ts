import { database } from './database';

export type User = {
  assigned: boolean;
};

const users = database.get('users');

export const observeUsers = () => users.query().observe();
export const saveUser = async ({ assigned }: User) => {
  await users.create((entry: any) => {
    entry.assigned = assigned;
  });
};
