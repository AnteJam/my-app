import React from 'react';
import PropTypes from 'prop-types';

const RepoListComponent = ({ repos }) => {
  if (!repos || repos.length === 0) {
    return <p>No repositories found.</p>;
  }

  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

RepoListComponent.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoListComponent;