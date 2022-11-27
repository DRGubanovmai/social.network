import React from "react";
import {
    follow,
    setCurrentPage,
    setCurrentPagesShowed,
    setFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
            {withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setFetching(false);
            }
        );
    }

    onPageChanged = (p) => {
        this.props.setFetching(true);

        let pageElemNumber = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`,
            {withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setFetching(false);
            }
        );
        if (this.props.currentPagesShowed.at(-1) === p && p !== pageElemNumber - 1) {
            this.props.setCurrentPagesShowed([p - 1, p, p + 1, p + 2, p + 3])
        }
        if (p === 1 && this.props.currentPagesShowed.at(0) !== p + 1) {
            this.props.setCurrentPagesShowed([2, 3, 4])
        }
        if (pageElemNumber === p) {
            this.props.setCurrentPagesShowed([p - 3, p - 2, p - 1])
        }
        if (p === this.props.currentPagesShowed.at(0) && p !== 1) {
            if (p === 3 || p === 2) {
                this.props.setCurrentPagesShowed([2, 3, 4])
            } else {
                this.props.setCurrentPagesShowed([p - 2, p - 1, p])
            }
        }
    }

    onFollow = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
            {
                withCredentials: true,
                headers: {"API-KEY" : "7abf22ed-c552-4e1f-a6f6-db1026ab5fed"}
            })
            .then(response => {
                    if (response.data.resultCode === 0) {
                        this.props.follow(userId);
                    }
                }
            );
    }

    onUnfollow = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
            {
                withCredentials: true,
                headers: {"API-KEY" : "7abf22ed-c552-4e1f-a6f6-db1026ab5fed"}
            })
            .then(response => {
                    if (response.data.resultCode === 0) {
                        this.props.unfollow(userId);
                    }
                }
            );
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPagesShowed={this.props.currentPagesShowed}
                   onPageChanged={this.onPageChanged}
                    onFollow={this.onFollow}
                   onUnfollow={this.onUnfollow}
            />
                   {/*// follow={this.props.follow}*/}
                   {/*// unfollow={this.props.unfollow}/>*/}
        </div>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPagesShowed: state.usersPage.currentPagesShowed,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCount(totalUsersCount))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setCurrentPagesShowed: (currentPagesShowed) => {
//             dispatch(setCurrentPagesShowed(currentPagesShowed))
//         },
//         setFetching: (isFetching) => {
//             dispatch(setFetching(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, setCurrentPagesShowed, setFetching})(UsersContainer)