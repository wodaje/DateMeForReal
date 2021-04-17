import axios from "axios";

export default {
  // Gets all books
  getUsers: function () {
    return axios.get("/api/users");
  },
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  getGender: function (gender) {
    return axios.get("/api/filter/" + gender);
  },
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  saveUser: function (prefData) {
    return axios.post("/api/users", prefData);
  },
  updateUser: function (userData) {
    return axios.post("/api/users/", userData);
  },
};
