// src/components/BlogList.jsx
import React from 'react';
import BlogCard from './BlogCard';
import { posts } from '../data/posts';

export default function BlogList() {
  return (
    <div className="row">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
