import "./Form.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea
          type="text"
          placeholder="Type your message here..."
          cols={"6"}
          rows={"5"}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
