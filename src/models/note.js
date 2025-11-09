import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const notesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
      default: '',
    },
    tag: {
      type: String,
      enum: [...TAGS],
      default: 'Todo',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

notesSchema.index(
  { name: 'text' },
  {
    name: 'StudentTextIndex',
    weights: { title: 10, content: 8 },
    default_language: 'english',
  },
);

export const Note = model('Note', notesSchema);
