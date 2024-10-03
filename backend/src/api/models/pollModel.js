const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// New Poll Schema
const PollSchema = new Schema({
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  pollName: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum: ['single', 'multiple'],
        default: 'single',
      },
      answers: [
        {
          answer: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
  choice: {
    type: String,
    default: "Single",
  },
  responses: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      answers: [String],
    },
  ],
});

const Poll = mongoose.model("Poll", PollSchema);

module.exports = Poll;
