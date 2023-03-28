import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card';
import { Link } from 'react-router-dom';



export default function ListPage() {
  const [listData, setListData] = useState([]);

  

  const getPosts = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setListData(res.data)
    })
  }
  useEffect(() => {
    getPosts();
}, [])

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Blogs</h1>
        <div>
          <Link to="/blogs/create" className="btn btn-success">
            글쓰기
          </Link>
        </div>
        </div>
      {listData.map((data) => {
        return (
          <Card key={data.id} id={data.id} title={data.title} listData={listData} setListData={setListData} />
          // <div key={data.id}>{data.title}</div>
        )
      })}
    </div>
  )
}
