import React, { Component } from "react";
import "./Profile.css"
import API from "../../utils/API";
import axios from "axios";
const id = "6078f7dcd92ed85f18d463c5"
export default class UpdateUser extends Component {

    constructor(props) {
        super(props)
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserGender = this.onChangeUserGender.bind(this);
        this.onChangeUserAge = this.onChangeUserAge.bind(this);
        this.onChangeUserUrl = this.onChangeUserUrl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            gender: '',
            age: '',
            url: ''
        }
    }

    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    
    onChangeUserGender(e) {
        this.setState({ gender: e.target.value })
    }

    onChangeUserAge(e) {
        this.setState({ age: e.target.value })
    }

    onChangeUserUrl(e) {
        this.setState({ url: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            age: this.state.age,
            url: this.state.url
            
        };

        API.updateUser(id, userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', email: '', gender: '', age: '', url: '' });
        console.log (this.state)
    }

    render() {
        return(
        <form onSubmit={this.onSubmit}>
            <label>Name</label>
            <br />
            <input
                onChange={this.onChangeUserName}
                value={this.state.name}
                type='text'
            />
            <br />
            <label>Email</label>
            <br />
            <input
                onChange={this.onChangeUserEmail}
                value={this.state.email}
                type='text'
            />
            <br />
            <label>Gender</label>
            <br />
            <input
                onChange={this.onChangeUserGender}
                value={this.state.gender}
                type='text'
            />
            <br />
            <label>Age</label>
            <br />
            <input
                onChange={this.onChangeUserAge}
                value={this.state.age}
                type='number'
            />
            <br />
            <label>Photo URL</label>
            <br />
            <input
                onChange={this.onChangeUserUrl}
                value={this.state.url}
                name='url'
                type='text'
            />
            <br />
            <input
                className='submitButton'
                type='submit'
                value='Submit'
            />
        </form>
        )}
}
