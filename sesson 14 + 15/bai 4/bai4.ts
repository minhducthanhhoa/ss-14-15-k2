class User {
    id: number;
    posts: Post[];
    followers: User[];
  
    constructor(id: number) {
      this.id = id;
      this.posts = [];
      this.followers = [];
    }
  
    createPost(content: string): Post {
      const post = new Post(this.id, content);
      this.posts.push(post);
      return post;
    }
  
    comment(post: Post, content: string): Comment {
      const comment = new Comment(this.id, content);
      post.addComment(comment);
      return comment;
    }
  
    follow(user: User): void {
      this.followers.push(user);
    }
  
    likePost(post: Post): void {
      post.addLike(this.id);
    }
  
    viewFeed(): Post[] {
      const feed: Post[] = [];
      for (const user of this.followers) {
        feed.push(...user.posts);
      }
      return feed;
    }
  }
  
  class Post {
    id: number;
    userId: number;
    likes: number[];
    comments: Comment[];
    content: string;
  
    constructor(userId: number, content: string) {
      this.id = Date.now(); 
      this.userId = userId;
      this.likes = [];
      this.comments = [];
      this.content = content;
    }
  
    addLike(userId: number): void {
      this.likes.push(userId);
    }
  
    addComment(comment: Comment1): void {
      this.comments.push(comment);
    }
  }
  
  class Comment1 {
    id: number;
    userId: number;
    content: string;
    replies: Comment[];
  
    constructor(userId: number, content: string) {
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