import React from 'react'

const Content = ({contentProps}) => {
  return (
    <div className="main-content">
    <div className="text">
      <h2>{contentProps.title}</h2>
      <p>{contentProps.desc}</p>
    </div>
    <div className="image">
      <img src={contentProps.imgUrl} alt={contentProps.altText}/>
    </div>
  </div>
  )
}

export default Content