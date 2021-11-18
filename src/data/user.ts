import { Model } from '@nozbe/watermelondb';
import { field, readonly, date } from '@nozbe/watermelondb/decorators';

export default class User extends Model {
  static table = 'users';

  @field('assigned') assigned: any;
  @readonly @date('created_at') createdAt: any;
}
