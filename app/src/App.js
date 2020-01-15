import React, { Component } from "react";
import axios from "axios";
import GithubCard from "./Components/GithubCard";
import "./App.css";
import FollowersCard from "./Components/FollowersCard";

class App extends Component {
  constructor() {
    super();

    this.state = {
      myself: [],
      followers: []
    };
  }
 
  componentDidMount() {
    axios
      .get("https://api.github.com/users/jeffrey1200")
      .then(res => {
        console.log(res.data)
        this.setState({ myself: res.data });
      })
      .catch(err => err);
    axios
      .get("https://api.github.com/users/jeffrey1200/followers")
      .then(res => {
        res.data.map(followers => {
          let login = followers.login;
          let dynamicUrl = `https://api.github.com/users/${login}`;
          axios
            .get(dynamicUrl)
            .then(res =>{ 
              // console.log(res.data)
              this.setState({ followers: res.data })});
        });
      })
      .catch(err => err);
  }
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <GithubCard myCard={this.state.myself} />
        <FollowersCard followersCard = {this.state.followers}/>
      </div>
    );
  }
}

export default App;
