import { database } from './database';

export type UserProps = {
  assigned: boolean;
};

export const newAssigning = async ({ assigned }: UserProps) => {
  return await database.write(async () => {
    const users = database.collections.get('users');

    try {
      const user = await users.query().collection.create((entry: any) => {
        entry.assigned = assigned;
      });

      return { user, users };
    } catch (err) {
      console.error('ERROR', err);
    }
  });
};
