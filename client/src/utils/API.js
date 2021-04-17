import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  saveUser: function(prefData) {
    return axios.post("/api/users", prefData);
  },
  updateUser: function(id, userData) {
    return axios.put("/api/users/" + id, userData);
  },
  
};
