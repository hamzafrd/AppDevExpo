import Realm from 'realm';
import {ProductSchema} from './ProductSchema';
const realm = new Realm({
  schema: [ProductSchema],
});
export default realm;
