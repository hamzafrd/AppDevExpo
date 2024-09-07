import Realm from 'realm';
import {
  NoteSchema,
  LaptopSchema,
  PenaSchema,
  TemanSchema,
  KursiSchema,
  SepatuSchema,
} from './NoteSchema';

const realm = new Realm({
  schema: [
    NoteSchema,
    LaptopSchema,
    PenaSchema,
    TemanSchema,
    KursiSchema,
    SepatuSchema,
  ],
});
export default realm;
