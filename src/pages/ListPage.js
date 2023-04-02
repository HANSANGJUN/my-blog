import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import PageNation from "../components/PageNation";

export default function ListPage() {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPost, setNumberOfPost] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    setNumberOfPages(Math.ceil(numberOfPost / 5));
  }, [numberOfPost]);

  const getPosts = (page = 1) => {
    setCurrentPage(page);
    axios
      .get(`http://localhost:3001/posts`, {
        params: {
          _page: page,
          _limit: 5,
          _sort: "id",
          _order: "desc",
        },
      })
      .then((res) => {
        setNumberOfPost(res.headers["x-total-count"]);
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
      <PageNation
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        onClick={getPosts}
      />
    </div>
  );
}
