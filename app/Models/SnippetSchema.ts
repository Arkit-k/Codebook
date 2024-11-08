import mongoose, { Schema } from "mongoose";

const SingleTagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    clerkUserId: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const SingleSnippetSchema = new Schema({
  clerkUserId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    required: true,
    default: false,
  },
  tags: {
    type: [SingleTagSchema],
    required: true,
    default: [],
  },
  description: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  creationDate: {
    type: String,
    required: true,
    default: "",
  },
  isTrash: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const SingleSnippet =
  mongoose.models.SingleSnippet ||
  mongoose.model("SingleSnippet", SingleSnippetSchema);

export default SingleSnippet;
