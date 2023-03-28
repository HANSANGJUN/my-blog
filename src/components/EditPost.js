import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [checkTitle, setCheckTitle] = useState("");
  const [checkBody, setCheckBody] = useState("");

  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  const getEditPost = () => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      setTitle(res.data.title);
      setBody(res.data.body);
      setCheckTitle(res.data.title);
      setCheckBody(res.data.body);
    });
  };

  const onSubmit = () => {
    axios.patch(`http://localhost:3001/posts/${id}`, {
      title: title,
      body: body,
    });
    navigate("/blogs");
  };

  const before = () => {
    navigate(-1);
  };

  useEffect(() => {
    getEditPost();
  }, []);

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">제목</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">내용</label>
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
        수정완료
      </button>
      <button className="btn btn-danger ms-2" onClick={before}>
        취소
      </button>
    </div>
  );
}
