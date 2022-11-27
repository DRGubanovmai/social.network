// import React from 'react';
// import styles from './Users.module.css'
// import axios from "axios";
// import userPhoto from './../../assets/images/user.png'
//
// class Users extends React.Component {
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(
//             response => {
//                 this.props.setUsers(response.data.items);
//                 this.props.setTotalUsersCount(response.data.totalCount);
//             }
//         );
//     }
//
//     onPageChanged = (p) => {
//         let pageElemNumber = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
//
//         this.props.setCurrentPage(p);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`).then(
//             response => {
//                 this.props.setUsers(response.data.items);
//             }
//         );
//         if (this.props.currentPagesShowed.at(-1) === p && p !== pageElemNumber - 1) {
//             this.props.setCurrentPagesShowed([p, p + 1, p + 2, p + 3])
//         }
//         if (p === 1 && this.props.currentPagesShowed.at(0) !== p + 1) {
//             this.props.setCurrentPagesShowed([2, 3, 4])
//         }
//         if (pageElemNumber === p) {
//             this.props.setCurrentPagesShowed([p - 3, p - 2, p - 1])
//         }
//     }
//
//     render() {
//         let pageElemNumber = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
//         let pages = this.props.currentPagesShowed;
//         return (<div>
//             <div>
//                 <span className={this.props.currentPage === 1 && styles.selectedPage} onClick={() => {this.onPageChanged(1)}}>1</span>
//                 <span> ... </span>
//                 {pages.map(p => {
//                     return <span className={this.props.currentPage === p && styles.selectedPage} onClick={() => {
//                         this.onPageChanged(p)
//                     }}>{p} </span>
//                 })}
//                 <span>...</span>
//                 <span> </span>
//                 <span className={this.props.currentPage === pageElemNumber && styles.selectedPage} onClick={() => {
//                     this.onPageChanged(pageElemNumber)
//                 }}>{pageElemNumber}</span>
//             </div>
//             {
//                 this.props.users.map(user =>
//                     <div>
//                         <div>
//                             <div>
//                                 <img className={styles.img}
//                                      src={user.photos.small != null ? user.photos.small : userPhoto}/>
//                             </div>
//                             <div>{user.followed
//                                 ? <button onClick={() => {
//                                     this.props.unfollow(user.id)
//                                 }}>Unfollow</button>
//                                 : <button onClick={() => {
//                                     this.props.follow(user.id)
//                                 }}>Follow</button>}</div>
//                         </div>
//                         <div>
//                             <div>{user.name}</div>
//                             <div>{user.status}</div>
//                             <div>{"user.location.country"}</div>
//                             <div>{"user.location.city"}</div>
//                         </div>
//                     </div>
//                 )
//             }
//         </div>)
//     }
// }
//
// export default Users;
