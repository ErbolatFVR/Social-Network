import React from "react";
import css from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={css.profileInfo}>
            <div >
                <img className={css.profileImg} src="https://лада.онлайн/uploads/posts/2016-01/1452856264_logo.jpg" alt="Img"></img>
            </div>
            <div className={css.descriptionStyle} >
                Ava + Description
            </div>
        </div>
    )
}


export default ProfileInfo;