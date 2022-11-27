import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pageElemNumber = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = props.currentPagesShowed;

    return (<div>
        <div>
            <span className={props.currentPage === 1 && styles.selectedPage} onClick={() => {
                props.onPageChanged(1)
            }}>1</span>
            <span> ... </span>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={() => {
                    props.onPageChanged(p)
                }}>{p} </span>
            })}
            <span>...</span>
            <span> </span>
            <span className={props.currentPage === pageElemNumber && styles.selectedPage} onClick={() => {
                props.onPageChanged(pageElemNumber)
            }}>{pageElemNumber}</span>
        </div>
        {
            props.users.map(user =>
                <div>
                    <div>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img className={styles.img}
                                     src={user.photos.small != null ? user.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>{user.followed
                            ? <button onClick={() => {
                                // props.unfollow(user.id)
                                props.onUnfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                // props.follow(user.id)
                                props.onFollow(user.id)
                            }}>Follow</button>}</div>
                    </div>
                    <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </div>
                </div>
            )
        }
    </div>);
}

export default Users;