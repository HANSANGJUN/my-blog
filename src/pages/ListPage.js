import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export default function ListPage() {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setListData(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Blog Contents</h1>
        <div>
          <Link to="/blogs/create" className="btn btn-success">
            글쓰기
          </Link>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : listData.length > 0 ? (
        listData.map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              title={data.title}
              listData={listData}
              setListData={setListData}
            />
            // <div key={data.id}>{data.title}</div>
          );
        })
      ) : (
        <div>컨텐츠가 없습니다</div>
      )}
    </div>
  );
}
