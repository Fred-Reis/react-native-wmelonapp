import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'users',
      columns: [
        { name: 'assigned', type: 'boolean' },
        { name: 'created_at', type: 'number' },
      ],
    }),
  ],
});
