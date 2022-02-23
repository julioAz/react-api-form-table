import React, {Component} from "react";

class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const {name, job } = this.state

        return (
            <form>
                <label className="d-block" htmlFor="name">Name</label>
                <input 
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange} />
                <label className="d-block mt-3" htmlFor="job">Job</label>
                <input 
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={this.handleChange} />
                <input
                className="d-block btn btn-primary mt-3"
                type="button"
                value="Submit"
                onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;