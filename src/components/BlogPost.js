import axios from 'axios';
import React, { useState } from 'react'


export default function BlogPost() {
    const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = () => {
    axios.post('http://localhost:3001/posts', {
      title: title,
      body: body
    })
  }
  return (
    <div>
          <div className="mb-3">
           
    <label className="form-label">
      Title
    </label>
    <input className="form-control"
      value={title}
      onChange={(e) => {
        setTitle(e.target.value)
      }}
    />
 </div>
  <div className="mb-3">
    <label className="form-label">
      Body
    </label>
    <textarea className="form-control"
      value={body}
      onChange={(e) => {
        setBody(e.target.value)
      }}
      rows="15"
    />
  </div>
  
  <button className="btn btn-primary"
  onClick={onSubmit}
  >Post</button>
</div>
  )
}
