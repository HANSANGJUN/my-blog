import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BlogPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [publish, setPublish] = useState(false);
  const navigate = useNavigate();

  const onSubmit = () => {
    axios.post("http://localhost:3001/posts", {
      title: title,
      body: body,
      createdAt: Date.now(),
      publish: publish,
    });
    navigate("/blogs");
  };

  const cancel = () => {
    navigate("/blogs");
  };

  const onChangePublish = (e) => {
    setPublish(e.target.checked);
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
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={publish}
          onChange={onChangePublish}
        />
        <label className="form-check-label">비밀글</label>
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
