import React from 'react'

export default function Card({id,title}) {
  return (
      <div key={id} className="card mb-3">
          <div className="card-body">
           {title}
           </div>
</div>
  )
}
