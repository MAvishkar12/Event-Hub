"use client";
import React, { useState } from "react";

const BookEvent = () => {
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  const handleSubmit=(e:React.FormEvent)=>{
      e.preventDefault()
      setTimeout(() => {
        setSubmit(true)
      }, 1000);

  }
  return (
    <div id="book-event">
      {submit ? (
        <p className="text-sm">Thank you for siging up!</p>
      ) : (
        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <button type="submit" className="button-submit ">Submit</button>
        </form>
      )}
    </div>
  );
};

export default BookEvent;
