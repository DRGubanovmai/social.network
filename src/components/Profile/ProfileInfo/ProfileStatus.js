import React from "react";


//TODO: rewrite to Hooks useState...
class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        let value = e.currentTarget.value;
        this.setState({
            status: value
        })
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    render() {
        return (<div>
            {!this.state.editMode
                ? <div>
                    <span onDoubleClick={this.activateEditMode}>{this.state.status || "Add status"}</span>
                  </div>
                : <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                  </div>
            }
        </div>)
    }
}

export default ProfileStatus;