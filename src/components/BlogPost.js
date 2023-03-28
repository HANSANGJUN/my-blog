import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BlogPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    axios.post("http://localhost:3001/posts", {
      title: title,
      body: body,
      createdAt: Date.now(),
    });
    navigate("/blogs");
  };

  const cancel = () => {
    navigate("/blogs");
  };
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className="form-control"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          rows="15"
        />
      </div>

      <button className="btn btn-primary" onClick={onSubmit}>
        등록
      </button>
      <button className="btn btn-danger ms-2" onClick={cancel}>
        취소
      </button>
    </div>
  );
}
