const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    category: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tags: [String],
    isPublished: { type: Boolean, default: false },
    publishedAt: Date,
    readTime: { type: String },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

blogPostSchema.pre("save", function (next) {
  if (this.isModified("content")) {
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = `${Math.ceil(wordCount / 200)} min`;
  }
  next();
});

module.exports = mongoose.model("BlogPost", blogPostSchema);
