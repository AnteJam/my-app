import React from 'react';
import PropTypes from 'prop-types';

class UserDetailsComponent extends React.Component {
  render() {
    const { user, onReset } = this.props;

    if (!user) {
      return <p>No user data.</p>;
    }

    return (
      <div>
        <h1>User Details</h1>
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} style={{ width: '150px', height: '150px' }} />
        <p>Name: {user.name}</p>
        <p>Username: {user.login}</p>
        <p>Location: {user.location}</p>
        <p>Bio: {user.bio}</p>
        <button onClick={onReset}>Reset</button>
      </div>
    );
  }
}

UserDetailsComponent.propTypes = {
  user: PropTypes.object,
  onReset: PropTypes.func.isRequired,
};

export default UserDetailsComponent;