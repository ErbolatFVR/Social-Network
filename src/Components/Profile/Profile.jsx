import React from 'react';
import css from './Profile.module.css'
import MyPosts from './../Profile/MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
  return (
    <div>
        <ProfileInfo />
        <MyPosts />
      </div>
  )
}


export default Profile;