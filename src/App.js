import React, { Component } from 'react';
import './App.css';
import FormComponent from './Components/FormComponent';
import UserDetailsComponent from './Components/UserDetailsComponent';
import RepoListComponent from './Components/RepoListComponent';

class App extends Component {
  state = {
    username: '',
    user: null,
    repos: [],
  };

  handleSearch = (username) => {
    this.setState({ username }, () => {
      this.fetchUserData(username);
      this.fetchUserRepos(username);
    });
  };

  fetchUserData = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => this.setState({ user: data }))
      .catch((error) => console.error('Error fetching user:', error));
  };

  fetchUserRepos = (username) => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => this.setState({ repos: data }))
      .catch((error) => console.error('Error fetching repos:', error));
  };

  resetState = () => {
    this.setState({
      username: '',
      user: null,
      repos: [],
    });
  };

  render() {
    const { user, repos } = this.state;

    return (
      <div className="App">
        {!user ? (
          <FormComponent onSearch={this.handleSearch} />
        ) : (
          <>
            <UserDetailsComponent user={user} onReset={this.resetState} />
            <RepoListComponent repos={repos} />
          </>
        )}
      </div>
    );
  }
}

export default App;
