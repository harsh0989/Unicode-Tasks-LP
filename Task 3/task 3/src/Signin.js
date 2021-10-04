import React, { useState } from 'react'
import { Checkbox, TextField } from '@material-ui/core'
const Signin = () => {
    const style = {
        width: '29.4vw',
        marginLeft: '0.5vw'

    }
    const container = {
        backgroundColor: '#ffffff',
        opacity: '80%',
        width: '35vw',
        height: '50%',
        position: 'absolute',
        marginTop: '10vw ',
        marginLeft: '30%',

    }
    const error = {
        color: 'red',
        marginLeft: '10px'
    }

    const form = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '11.5vw ',
        marginLeft: '32%',
        position: 'absolute'

    }
    let [value, setValue] = useState({
        username: '',
        password: '',
    });
    const handleChanges = (event) => {
        setValue({
            ...value, [event.target.name]: event.target.value,
        })
    }
    const blur = (e) => {
        let { name } = e.target
        validateField(name)
    }
    const validateField = (name) => {
        let isValid = false;

        if (name === "username") isValid = validateusername();
        else if (name === "password") isValid = validatePassword();
        return isValid;
    }


    let [errors, setErrors] = useState({
        usernameerror: '',
        passworderror: '',
    });

    const Submitted = () => {
        console.log("done")

    }
    const validateusername = () => {
        let usernameerror = ''
        const valid = /^[a-zA-Z0-9]+([a-zA-Z0-9](_)[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
        let username = value.username
        if (username.trim() === "") usernameerror = "username is required"
        else if (!valid.test(username)) usernameerror = "invalid username"
        setErrors({
            ...errors, usernameerror: usernameerror,
        })
    }
    const validatePassword = () => {
        let passworderror = ''
        const valid = /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        let password = value.password
        if (password.trim() === "") passworderror = "Password is required"
        else if (!valid.test(password)) passworderror = "Password must contain at least 8 characters"
        setErrors({
            ...errors, passworderror: passworderror,
        })
    }


    return (

        <div className='box' >
            <div className="container" style={container}></div>
            <div className="form" style={form}>
                <h1>Login page</h1>

                <div className="my-2">
                    <TextField style={style} autoFocus='1' label="Username" name='username' onChange={handleChanges} value={value.username} type="text" variant="filled" onBlur={blur} />
                    <div className='errormsg' style={error}>{errors.usernameerror}</div>
                </div>
                <div className="my-2">
                    <TextField style={style} label="Password" name='password' onChange={handleChanges} value={value.password} type="password" variant="filled" onBlur={blur} />
                    <div className='errormsg' style={error}>{errors.passworderror}</div>
                </div>
                <div>
                    <Checkbox color='primary' />keep me signed in
                </div>
                <div>
                    <button type="submit" onClick={Submitted} className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Signin
