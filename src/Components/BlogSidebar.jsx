// src/components/BlogSidebar.jsx
import React from 'react';
import { posts } from '../data/posts';
import "./Blog.css";

export default function BlogSidebar() {
  return (
    <div>
      {/* Search */}
      <div className="sidebar-box">
        <h4 className="sidebar-title">Search</h4>
        <input type="text" className="form-control" placeholder="Search..." />
      </div>

      {/* Categories */}
      <div className="sidebar-box">
        <h4 className="sidebar-title">Categories</h4>
        <ul className="sidebar-list list-unstyled">
          <li>School</li>
          <li>Education</li>
          <li>Parents</li>
          <li>Learning</li>
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="sidebar-box">
        <h4 className="sidebar-title">Recent Posts</h4>

        {posts.slice(0, 3).map((post) => (
          <div className="recent-post-item" key={post.id}>
            <img src={post.imgUrl} alt={post.title} />
            <div>
              <small className="text-muted">{post.date}</small>
              <div className="recent-post-title">{post.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="sidebar-box">
        <h4 className="sidebar-title">Newsletter</h4>
        <input type="email" className="form-control mb-2" placeholder="Enter email" />
        <button className="news-btn">Subscribe</button>
      </div>
    </div>
  );
}

