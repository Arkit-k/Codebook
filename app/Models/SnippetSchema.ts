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
    default: "",
  },
  title: {
    type: String,
    required: true,
    default: "",
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
    required: false,
    default: "",
  },
  code: {
    type: String,
    required: false,
    default: "",
  },
  language: {
    type: String,
    required: false,
    default: "",
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
