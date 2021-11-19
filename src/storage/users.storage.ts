import create from 'zustand';
import { newAssigning } from '../data/helpers';

interface User {
  assigned: boolean;
  createdAt: string;
}

interface StoreType {
  users: User[];
  assigned: boolean;
  setAssignment: (assigned: boolean) => Promise<any>;
  resetAssigned: () => void;
}

export const useStore = create<StoreType>(set => ({
  users: [],
  assigned: false,
  setAssignment: async (assigned: boolean) => {
    const result: any = await newAssigning({ assigned: assigned });

    const { user, users } = result;

    set({
      users: await [...users._cache.map].map((el: any) => {
        return {
          id: el[0],
          assigned: el[1].assigned,
          createdAt: new Date(el[1].createdAt).toLocaleString('pt-BR'),
        };
      }),
    });

    set({ assigned: await user._raw.assigned });
  },

  resetAssigned: () => {
    set({ assigned: false });
  },
}));
