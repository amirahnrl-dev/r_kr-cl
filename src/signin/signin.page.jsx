import React, { Component } from 'react';
import './signin.page.scss';
import FormInput from '../utils/form.input';
import Button from '../utils/button.custom';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, state } = event.target;
        this.setState({ [state]: value })
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                        name="email"
                        type="email"
                        value={ email }
                        label="email"
                        //onChange={ this.handleChange }
                        hangleChange={ this.handleChange }
                        required
                    />
                    <FormInput 
                        name="password"
                        type="password"
                        value= { password }
                        label="password"
                        //onChange={ this.handleChange }
                        hangleChange={ this.handleChange }
                        required
                    />
                    <div className="buttons-container">
                        <Button type="submit">Sign In</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;