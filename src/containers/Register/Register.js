import React, { useState } from 'react';
import {Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default function Register(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    
    function validateForm() {
        return username.length > 0 && password.length > 0 && email.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="Register">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                </FormGroup>
                
                <FormGroup controlId="username" bsSize="large">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        type="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>password</FormLabel>
                    <FormControl
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Register
                </Button>
            </form>
        </div>
    )
}