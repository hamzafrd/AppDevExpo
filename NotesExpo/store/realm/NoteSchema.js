export const NoteSchema = {
  name: 'Note',
  properties: {
    id: 'int',
    note: 'string',
    date: 'string',
  },
  primaryKey: 'id',
};

export const LaptopSchema = {
  name: 'Laptop',
  properties: {
    id: 'int',
    merek: 'string',
    warna: 'string',
    harga: 'string',
  },
  primaryKey: 'id',
};

export const PenaSchema = {
  name: 'Pena',
  properties: {
    id: 'int',
    warna: 'string',
    harga: 'string',
    ketebalan: 'float',
  },
  primaryKey: 'id',
};

export const TemanSchema = {
  name: 'Teman',
  properties: {
    id: 'int',
    sifat: 'string',
    hobi: 'string',
  },
  primaryKey: 'id',
};

export const KursiSchema = {
  name: 'Kursi',
  properties: {
    id: 'int',
    warna: 'string',
    jenis: 'string',
  },
  primaryKey: 'id',
};

export const SepatuSchema = {
  name: 'Sepatu',
  properties: {
    id: 'int',
    ukuran: 'int',
    warna: 'string',
  },
  primaryKey: 'id',
};
