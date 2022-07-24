import { generateBlogPosts } from "./generators/blog-posts.js";
import { generateHomePage } from "./generators/home-page.js";

await generateBlogPosts()
await generateHomePage()