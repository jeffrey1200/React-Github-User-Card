import React from "react";

const GithubCard = props => {
  let values = Object.values(props);
 
  return (
    <div>
      {values.map(items => (
        <div>
          <img src={items.avatar_url} />
          <h1>{items.name}</h1> <h2>Github: {items.html_url}</h2>
          <p>Followers: {items.followers}</p>
          <p>Following: {items.following}</p>
          <p>Description: {items.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default GithubCard;
