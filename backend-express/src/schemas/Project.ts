import { Schema } from 'mongoose';

export default new Schema({
  title: [{
    languageCode: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  }],
  description: [{
    languageCode: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  }],
  languages: [{
    code: {
      type: String,
      required: true,
    },
  }],
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'category',
  },
}, {
  timestamps: true,
});
