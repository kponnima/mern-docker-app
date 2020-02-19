import mongoose from 'mongoose';
const { Schema } = mongoose;

//create schema for todo
const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required']
  }
});

//create model for todo
export default mongoose.model('Todo', TodoSchema);