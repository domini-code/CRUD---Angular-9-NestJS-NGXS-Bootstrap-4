import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  name: String,
  completed: { type: Boolean, default: false },
  createAt: {
    type: Date,
    default: Date.now,
  },
});
