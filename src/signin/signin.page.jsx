import React, { Component } from 'react';
import './signin.page.scss';
import FormInput from '../utils/form-input/form.input';
import Button from '../utils/button/button';
import { auth, signInWithGoogle } from '../utils/firebase';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.error(error);
        }

        
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
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
                        handleChange={ this.handleChange }
                        required
                    />
                    <FormInput 
                        name="password"
                        type="password"
                        value= { password }
                        label="password"
                        //onChange={ this.handleChange }
                        handleChange={ this.handleChange }
                        required
                    />
                    <div className="buttons-container">
                        <Button type="submit">Sign In</Button>
                        <Button onClick={ signInWithGoogle } isGoogleSignIn>Sign In With Google</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;