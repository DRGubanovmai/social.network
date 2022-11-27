// import {connect} from "react-redux";
// import Users from "./Users";
// import {
//     onFollowAC,
//     onSetCurrentPageAC, onSetCurrentPagesShowedAC,
//     onSetTotalUsersCountAC,
//     onSetUsersAC,
//     onUnfollowAC
// } from "../../redux/usersReducer";
//
// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         currentPage: state.usersPage.currentPage,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         pageSize: state.usersPage.pageSize,
//         currentPagesShowed: state.usersPage.currentPagesShowed
//     }
// }
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {dispatch(onFollowAC(userId))},
//         unfollow: (userId) => {dispatch(onUnfollowAC(userId))},
//         setUsers: (users) => {dispatch(onSetUsersAC(users))},
//         setTotalUsersCount: (totalUsersCount) => {dispatch(onSetTotalUsersCountAC(totalUsersCount))},
//         setCurrentPage: (currentPage) => {dispatch(onSetCurrentPageAC(currentPage))},
//         setCurrentPagesShowed: (currentPagesShowed) => {dispatch(onSetCurrentPagesShowedAC(currentPagesShowed))}
//     }
// }
//
//
// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
//
// export default UsersContainer;