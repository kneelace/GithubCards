import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class Form extends React.Component {
    state = {
        username: "",
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state.username)
        const resp = await axios.get(`https://api.github.com/users/${this.state.username}`);
        console.log(resp.data);
        this.props.onSubmit(resp.data);
        this.setState({ username: "" });
    };


    render() {
        const formStyle = {
            border: "thin solid",
            backgroundColor: "#fbfbfb",
            padding: "2rem",
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "center",
            maxWidth: "50%",
            align: "center"

        };

        const inputStyle = {

            width: "100%",
            marginRight: "2rem"
        }

        return (
            <form style={formStyle} onSubmit={this.handleSubmit}>
                <input type="text" placeholder="username"
                    value={this.state.username}
                    onChange={event => this.setState({ username: event.target.value })}
                    required
                    style={inputStyle} />
                <button> Add Card </button>
            </form>
        );
    }
}

export default Form;



