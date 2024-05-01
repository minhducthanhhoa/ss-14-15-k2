"use strict";
class User {
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content) {
        const post = new Post(this.id, content);
        this.posts.push(post);
        return post;
    }
    comment(post, content) {
        const comment = new Comment(this.id, content);
        post.addComment(comment);
        return comment;
    }
    follow(user) {
        this.followers.push(user);
    }
    likePost(post) {
        post.addLike(this.id);
    }
    viewFeed() {
        const feed = [];
        for (const user of this.followers) {
            feed.push(...user.posts);
        }
        return feed;
    }
}
class Post {
    constructor(userId, content) {
        this.id = Date.now();
        this.userId = userId;
        this.likes = [];
        this.comments = [];
        this.content = content;
    }
    addLike(userId) {
        this.likes.push(userId);
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class Comment1 {
    constructor(userId, content) {
        this.id = Date.now();
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
}
const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);
user1.createPost("Hello world!");
const post = user1.posts[0];
user2.comment(post, "Nice post!");
user3.comment(post, "I agree!");
user2.follow(user1);
user3.follow(user1);
user2.likePost(post);
const feed = user2.viewFeed();
console.log("User 2's feed:", feed);
