import React from "react";
import profileInfo from './ProfileInfo.module.css';
import defaultAvatar from '../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    let avatar = !props.profile.photos.small
        ? defaultAvatar
        : props.profile.photos.small;

    return (
        <div>
            <div>
                <img className={profileInfo.avatar}
                     src={avatar}/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div className={profileInfo.description}>{props.profile.aboutMe}</div>
            </div>
        </div>
    );
}
export default ProfileInfo;