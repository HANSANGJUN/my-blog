import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import ShowPage from "../pages/ShowPage";

export default function Card({ id, title, setListData, listData }) {
  const navigate = useNavigate();

  const editPage = () => {
    navigate(`/blogs/${id}`);
  };

  const deleteBlog = (e) => {
    //이벤트 버블링
    e.stopPropagation();
    axios.delete(`http://localhost:3001/posts/${id}`).then((res) => {
      setListData((prev) => {
        return prev.filter((data) => data.id !== id);
      });
    });
  };
  return (
    <div key={id} className="card mb-3 cursor-pointer" onClick={editPage}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>{title}</div>
          <button className="btn btn-danger btn-sm" onClick={deleteBlog}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
