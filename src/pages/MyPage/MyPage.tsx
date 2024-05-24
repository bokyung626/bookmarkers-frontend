import React from "react";
import "./style.css";

export const MyPage = () => {
  return (
    <div className="book-card">
      <img
        src="https://via.placeholder.com/150"
        alt="Book Cover"
        className="book-cover"
      />
      <div className="book-info">
        <h3 className="book-title">Book Title</h3>
        <p className="book-author">Author: John Doe</p>
        <p className="book-publisher">Publisher: XYZ Publishing</p>
        <p className="book-summary">
          This is a brief summary of the book. It provides an overview of the
          main themes and content of the book, enticing readers to explore more.
        </p>
      </div>
      <button className="read-more-button">Read More</button>
    </div>
  );
};
