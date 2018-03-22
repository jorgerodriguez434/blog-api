'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const blogPostSchema = mongoose.Schema({
  author: {
    firstName: String,
    lastName: String
  },
  title: {type: String, required: true},
  content: {type: String},
  created: {type: Date, default: Date.now} 
});


blogPostSchema.virtual('authorName').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim();
});

blogPostSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    author: this.authorName,
    content: this.content,
    title: this.title,
    created: this.created
  };
};

const BlgPosts = mongoose.model('BlgPosts', blogPostSchema);

module.exports = {BlgPosts};

/*language: node_js
node_js: node
deploy:
  provider: heroku
  api_key:
    secure: XKtzFrz+VaGkeulS5x3iI3Jb06uXdOOCbtTo5FP3PvoYsYwP1Z1PnsDx5VQDLB+pa0t7lTFzdyhvmR5sAIJJzAm8I1n4we6SSkGWFOsYB7Ob7xghfhRELOSrpHeOnluDrqTNyZlCxS1bHcgoOJ1mnMY5/pj9o2YGna7lYvgjnuG35LJVxnsZS5+obKpOfADSUNN6SKRifCuHC1LrmDqwczwdqmVr3JE8cQv2+s3QUnZhoovr4Rj+i+A3n9rS6uF+YgGtQ5ZzpMUFGMa7TQsF4sAhjMq8C6KGtjC1pC+a8bvzchpIZUeAeUIqCntLSCIERp0n0a+w8FuEBbHMT2d8wp1E8qopkUCNLsZgyPSdF15GYDjX/ZgAT33TLZO5uRzSTyrIzweSuY1X9eZjVmqmqMV0mb5cs0Dls9T+q1QVF6kv1YE4qD3ha+IOISvECLjkCPQ8YhUfZHK0/mtBtfbN/fJabiQfX1OItIDuq8OGMfyW0Ynn4G6kMZ9owOgmuzuDYvS0oOhHXPbxnhO+BhrygFhpCXi9E1miHiYKjgaP5TJN/Gxs5ArKMppoLNUzMtxKcL9Ze9KrqzbKfeL+gCKCrIhcZqeAB80Y2CkgYXqsQ7I4cswUARQPu1KwseM5zzsCqD/K8P77+29KPK+BUpZDrfG1KrjsHHj2N+raYH9umm8=
  app: desolate-escarpment-30312

  on:
    repo: jorgerodriguez434/blog-api */


    