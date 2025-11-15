import React from "react";
import "./Blog.css";

export default function BlogCard({ post }) {
  return (
    <div className="col-md-6 col-12 mb-4">
      <div className="blog-card">
        <img src={post.imgUrl} alt={post.title} />

        <div className="blog-card-body">
          <span className="blog-card-date">{post.date}</span>

          <h5 className="blog-card-title">{post.title}</h5>

          <p className="text-muted">{post.excerpt}</p>

          <a href="#" className="btn btn-primary rounded-pill px-4">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
