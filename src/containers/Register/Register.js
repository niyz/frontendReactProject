import React, { useState } from 'react';
import {Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
const axios = require('axios')

export default function Register(props) {
    const [userName, setUsername] = useState("");
    const [passWord, setPassword] = useState("");
    const [eMail, setEmail] = useState("");
    
    function validateForm() {
        return userName.length > 0 && passWord.length > 0 && eMail.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(passWord)
        axios
        .post('http://localhost:8080/user/create', {
            username: userName,
            password: passWord,
            email: eMail
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
    }
    return (
        <div className="Register">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={eMail}
                        onChange={e => setEmail(e.target.value)}
                        />
                </FormGroup>
                
                <FormGroup controlId="username">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        type="username"
                        value={userName}
                        onChange={e => setUsername(e.target.value)}
                        />
                </FormGroup>
                <FormGroup controlId="password">
                    <FormLabel>password</FormLabel>
                    <FormControl
                        type="password"
                        value={passWord}
                        onChange={e => setPassword(e.target.value)}
                        />
                </FormGroup>
                <Button block disabled={!validateForm()} type="submit">
                    Register
                </Button>
            </form>
        </div>
    )
}