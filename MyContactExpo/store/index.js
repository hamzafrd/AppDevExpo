import Realm from 'realm';
import {ContactSchema} from './ContactSchema';

const realm = new Realm({
  schema: [ContactSchema],
});

export default realm;
