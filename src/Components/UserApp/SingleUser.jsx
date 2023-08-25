import React from 'react'

const SingleUser = ({ user }) => {

  return (
    <div className="single-user">
      <div className="user-card">

        <div className="left-section">
          <img className="user-img" src={user.picture.large} alt="" />
        </div>

        <div className="right-section">
          <div className="bottom-item username">{user.name.first} {user.name.last}</div>
          <div className="bottom-item">{user.email}</div>
          <div className="bottom-item">{user.location.country} | {user.location.city}</div>
        </div>

      </div>
    </div>

  )

}

export default SingleUser
