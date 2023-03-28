import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

export default function ShowPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPost = (id) => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      setPost(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getPost(id);
  }, []);

  const date = (time) => {
    return new Date(time).toLocaleString();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="d-flex">
        <h1 className="flex-grow-1">{post.title}</h1>
        <div>
          <Link className="btn btn-primary" to={`/blogs/${id}/edit`}>
            수정
          </Link>
        </div>
      </div>
      <small className="text=muted">작성일: {date(post.createdAt)}</small>
      <hr />
      <p>{post.body}</p>
    </div>
  );
}
