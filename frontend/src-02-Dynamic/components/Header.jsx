import React from 'react'

const Header = ({headerProps}) => {
  return (
    <div className="header">
      <h1>{headerProps.title}</h1>
      <p>{headerProps.desc}</p>
      <div className="buttons">
        <a href="#">Learn More</a>
        <a href="#" className="hollow">Learn Less</a>
      </div>
    </div>
  )
}

export default Header