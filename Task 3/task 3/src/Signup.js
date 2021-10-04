import React, { useState } from 'react'
import { Checkbox, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
const Signup = () => {
    const style = {
        width: '29.4vw',
        marginLeft: '0.5vw'

    }
    const container = {
        backgroundColor: '#ffffff',
        opacity: '70%',
        width: '35%',
        height: '104%',
        position: 'absolute',
        marginTop: '2.5vw ',
        marginLeft: '30%',

    }

    const form = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2.5vw ',
        marginLeft: '32%',
        position: 'absolute'

    }
    const error={
        color:'red',
        marginLeft:'10px'
    }
    const Submitted = () => {

    }
    let [errors, setErrors] = useState({
        fnerror: '',
        lnerror: '',
        usernameerror:'',
        emailerror: '',
        passworderror: '',
        confirmpasserror: ''
    });
    let [value,setValue]=useState({
        firstname: '',
        lastname: '',
        email: '',
        username:'',
        password: '',
        confirmpass: ''
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

        if (name === "firstname") isValid = validateFirstName();
        else if (name === "lastname") isValid = validateLastName();
        else if (name === "email") isValid = validateEmailAddress();
        else if (name === "username") isValid = validateusername();
        else if (name === "password") isValid = validatePassword();
        else if (name === "confirmpass")isValid = validatePasswordConfirmation();
        return isValid;
    }
    const validateFirstName = () => {
        let fnerror = ''
        const valid = /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/
        let fname = value.firstname
        if (fname.trim() === "") fnerror = "First Name is required"
        else if(!valid.test(fname)) fnerror="Name is not valid"
        setErrors({
            ...errors,fnerror: fnerror,
        })
    }
    const validateLastName = () => {
        let lnerror = ''
        const valid = /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/
        let lname = value.lastname
        if (lname.trim() === "") lnerror = "Name is required"
        else if(!valid.test(lname)) lnerror="Name is not valid"
        setErrors({
            ...errors,lnerror: lnerror,
        })
    }
    const validateEmailAddress = () => {
        let emailerror = ''
        const valid =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let email = value.email
        if (email.trim() === "") emailerror = "Email address is required"
        else if(!valid.test(email)) emailerror="Email address is not valid"
        setErrors({
            ...errors,emailerror: emailerror,
        })
    }
    const validateusername = () => {
        let usernameerror = ''
        const valid = /^[a-zA-Z0-9]+([a-zA-Z0-9](_)[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
        let username = value.username
        if (username.trim() === "") usernameerror = "username is required"
        else if(!valid.test(username)) usernameerror="invalid username"
        setErrors({
            ...errors,usernameerror: usernameerror,
        })
    }
    const validatePassword = () => {
        let passworderror = ''
        const valid = /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        let password = value.password
        if (password.trim() === "") passworderror = "Password is required"
        else if(!valid.test(password)) passworderror="Password must contain at least 8 characters"
        setErrors({
            ...errors,passworderror: passworderror,
        })
    }
    const validatePasswordConfirmation = () => {
        let confirmpasserror = ''
        let confirmpass = value.confirmpass
        if (confirmpass.trim() === "") confirmpasserror = "Confirmed password is required"
        else if (value.password !== value.confirmpass)
        confirmpasserror = "Password does not match Confirmation";
        setErrors({
            ...errors,confirmpasserror: confirmpasserror,
        })
    }
    return (

        <div className='box' >
            <div className="container" style={container}></div>
            <div className="form" style={form}>
                <h1>Sign up page</h1>
                <div className="my-1">
                    <TextField autoFocus='1' style={style} label="First Name" name='firstname' onChange={handleChanges} value={value.firstname} type="text" variant="filled" onBlur={blur} />
                    <div className='errormsg' style={error}>{errors.fnerror}</div>
                </div>
                <div className="my-2">
                    <TextField style={style} label="Last Name" name='lastname' onChange={handleChanges} value={value.lastname} type="text" variant="filled" onBlur={blur}  />
                    <div className='errormsg'style={error}>{errors.lnerror}</div>
                </div>
                <div className="my-2">
                    <TextField style={style} label="Email" name='email' onChange={handleChanges} value={value.email} type="email" variant="filled" onBlur={blur} />
                    <div className='errormsg'style={error}>{errors.emailerror}</div>
                </div>
                <div className="my-2">
                    <TextField style={style} label="Username" name='username' onChange={handleChanges} value={value.username} type="text" variant="filled" onBlur={blur} />
                    <div className='errormsg'style={error}>{errors.usernameerror}</div>
                </div>
                <div className="my-2">
                    <TextField style={style} label="Password" name='password' onChange={handleChanges} value={value.password} type="password" variant="filled" onBlur={blur} />
                    <div className='errormsg'style={error}>{errors.passworderror}</div>
                </div>
                <div className="my-2">
                    <TextField style={style} label="Confirm Password" name='confirmpass' onChange={handleChanges} value={value.confirmpass} type="password" variant="filled" onBlur={blur} />
                    <div className='errormsg'style={error}>{errors.confirmpasserror}</div>
                </div>
                <div className="my-2">
                    <Checkbox color='primary'/>I accept the <Link to="/terms" target='_blank'>terms and conditions</Link>
                </div>
                <div>
                    <button type="submit" onClick={Submitted} className="btn btn-primary">Register</button>
                </div>
                <div className='my-3'>
                <Link to='/auth/login' className='my-3'>Already have an account?</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
