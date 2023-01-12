import React from "react";
import {getUsersThunk, onFollow, onUnfollow, setCurrentPage, setCurrentPagesShowed} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../common/withAuthRedirect";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (p) => {
        let pageElemNumber = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        this.props.setCurrentPage(p);
        this.props.getUsersThunk(this.props.pageSize, p);

        //own pagination, work like shit(I guess). check currentPage and showed and process needed case...like that, i dont remember already:) )
        this.analyzePage(p, pageElemNumber);
    }

    //TODO: extract to thunk????
    analyzePage = (p, pageElemNumber) => {
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

    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPagesShowed={this.props.currentPagesShowed}
                   onPageChanged={this.onPageChanged}
                   onFollow={this.props.onFollow}
                   onUnfollow={this.props.onUnfollow}
            />
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
export default compose(
    connect(mapStateToProps, {setCurrentPage, setCurrentPagesShowed, getUsersThunk, onFollow, onUnfollow}),
    withAuthRedirect)(UsersContainer)
// export default connect(mapStateToProps, {setCurrentPage, setCurrentPagesShowed, getUsersThunk, onFollow, onUnfollow})(UsersContainer)