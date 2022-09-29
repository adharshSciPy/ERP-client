import React from 'react'
import {useState} from 'react'
import './login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(email, password)
    }
  return (
    <>
        <div className="login-root">
            <div className="box-root flex-flex flex-direction--column" style={{minHeight: "100vh", flexGrow: 1}}>
            <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9}}>
                <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                <h1><a href='#'>Login</a></h1>
                </div>
                <div className="formbg-outer">
                <div className="formbg">
                    <div className="formbg-inner padding-horizontal--48">
                    <span className="padding-bottom--15">Sign in to your account</span>
                    <form id="stripe-login">
                        <div className="field">
                        <label for="email">Email</label>
                        <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="field padding-bottom--24">
                        <div className="grid--50-50">
                            <label for="password">Password</label>
                            <div className="reset-pass">
                            <a href='#'>Forgot your password?</a>
                            </div>
                        </div>
                        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className="field padding-bottom--24 padding-top--48 ">
                        <input type="submit" name="submit" value="Continue" onClick={handleSubmit} />
                        </div>
                        <div className="field">
                        <div className="ssolink">Don't have an account? <a href='#'>Sign up</a></div>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="footer-link padding-top--24">
                    <span></span>
                    <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                    <span><a href='#'>© ERP</a></span>
                    <span><a href='#'>Contact</a></span>
                    <span><a href='#'>Privacy & terms</a></span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Login