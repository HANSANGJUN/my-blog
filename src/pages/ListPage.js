import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card';


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
      <h1>Blogs</h1>
      {listData.map((data) => {
        return (
          <Card key={data.id} id={data.id} title={data.title} />
          // <div key={data.id}>{data.title}</div>
        )
      })}
    </div>
  )
}
