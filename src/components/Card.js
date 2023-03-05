import React from 'react';
import ReactDOM from 'react-dom';


class Card extends React.Component {

  render() {
    const profile = this.props;

    const githubProfile = {
      margin: "1rem"
    }

    const img = {
      width: "75px"
    }

    const info = {
      display: "inline-block",
      marginLeft: "12px"
    }

    const name = {
      fontSize: "1.25rem",
      fontWeight: "bold"

    }

    return (
      <div style={githubProfile}>
        <img style={img} src={profile.avatar_url} />
        <div style={info}>
          <div style={name}> {profile.name} </div>
          <div> {profile.company} </div>
        </div>
      </div>

    )
  }

}


export default Card;
