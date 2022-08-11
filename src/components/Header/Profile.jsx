import React from 'react'

function Profile() {
  let profile_picture= process.env.PUBLIC_URL + "/img/myprofilepic.jpg"
  return(
    <div className="profile__border">
      <div className="profile__perfil">
          <img src= {profile_picture} alt="jason" className="profile_pic"/>
       </div>
    </div>
  )
}

export default Profile
