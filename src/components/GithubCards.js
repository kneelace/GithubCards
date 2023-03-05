import React from 'react';
import ReactDOM from 'react-dom';
import Form from "./Form";
import CardList from "./CardList";
import testData from "./testData";

class GithubCards extends React.Component {

    state = {
        profiles: testData,
    };

    addNewProfile = (profileData) => {
        this.setState(
            prevState => ({
                profiles: [...prevState.profiles, profileData],
            })
        )
    };

    render() {
        const headerStyle = {
            textAlign: "center",
            fontSize: "1.5rem",
            marginBottom: "1rem",
            fontWeight: "bold"
        }

        return (
            <div>
                <div className="header" style={headerStyle}>
                    {this.props.title}</div>

                <Form onSubmit={this.addNewProfile} />
                <CardList profiles={this.state.profiles} />
            </div>
        )
    };
}


export default GithubCards;
