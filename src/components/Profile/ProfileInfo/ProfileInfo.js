import React from "react";
import profileInfo from './ProfileInfo.module.css';
import defaultAvatar from '../../../assets/images/user.png'

const ProfileInfo = (props) => {
    let avatar = !props.profile.photos.small
        ? defaultAvatar
        : props.profile.photos.small;

    return (
        <div>
            <div>
                <img className={profileInfo.img}
                     src={'https://static.gopro.com/assets/blta2b8522e5372af40/blt563ee3c5cea69e67/611bd591cf33c613b2c06df6/pdp-subscription-hero-image-1440-2x.jpg'}/>
            </div>
            <div>
                <img className={profileInfo.avatar}
                     src={avatar}/>
                <div className={profileInfo.description}>{props.profile.aboutMe}</div>
            </div>
        </div>
    );
}
export default ProfileInfo;