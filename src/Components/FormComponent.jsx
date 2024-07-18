import React from 'react';
import PropTypes from 'prop-types';

const FormComponent = ({ onSearch }) => {
  const [username, setUsername] = React.useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <form>
      <input type="text" value={username} onChange={handleChange} placeholder="Enter GitHub username" />
      <button type="button" onClick={handleClick}>Search</button>
    </form>
  );
};

FormComponent.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default FormComponent;