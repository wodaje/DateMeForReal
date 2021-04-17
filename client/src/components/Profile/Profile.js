import React, { Component } from "react";
import "./Profile.css";
import API from "../../utils/API";

export default class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserGender = this.onChangeUserGender.bind(this);
    this.onChangeUserAge = this.onChangeUserAge.bind(this);
    this.onChangeUserUrl = this.onChangeUserUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      gender: "",
      age: "",
      url: "",
    };
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeUserGender(e) {
    this.setState({ gender: e.target.value });
  }

  onChangeUserAge(e) {
    this.setState({ age: e.target.value });
  }

  onChangeUserUrl(e) {
    this.setState({ url: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      name: this.state.name,
      email: this.state.email,
      gender: this.state.gender,
      age: this.state.age,
      url: this.state.url,
    };

    console.log("UserObject API call:", userObject);

    API.updateUser(userObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ name: "", email: "", gender: "", age: "", url: "" });
    console.log("printing state: ", this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Name</label>
        <br />
        <input
          onChange={this.onChangeUserName}
          value={this.state.name}
          type="text"
        />
        <br />
        <label>Email</label>
        <br />
        <input
          onChange={this.onChangeUserEmail}
          value={this.state.email}
          type="email"
        />
        <br />
        <label>
          Gender
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        <br />
        <label>Age</label>
        <br />
        <input
          onChange={this.onChangeUserAge}
          value={this.state.age}
          type="number"
        />
        <br />
        <label>Photo URL</label>
        <br />
        <input
          onChange={this.onChangeUserUrl}
          value={this.state.url}
          name="url"
          type="text"
        />
        <br />
        <input className="submitButton" type="submit" value="Submit" />
      </form>
    );
  }
}
