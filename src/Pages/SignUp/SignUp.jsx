import React from 'react'
import './signup.css'

function SignUp() {
  return (
    <>
        <div className="login-root">
            <div className="box-root flex-flex flex-direction--column" style={{minHeight: "100vh", flexGrow: 1}}>
            <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9}}>
                <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                <h1><a href='#'>Sign Up</a></h1>
                </div>
                <div className="formbg-outer">
                <div className="formbg">
                    <div className="formbg-inner padding-horizontal--48">
                    <span className="padding-bottom-15">Create your free account</span>
                        <div className="field">
                        <label for="email">Email</label>
                        <input type="email" name="email" />
                        </div>
                        <div className="field padding-bottom--24">
                        <div className="grid--50-50">
                            <label for="password">Password</label>
                        </div>
                        <input type="password" name="password" />
                        </div>
                        <div className="field padding-bottom--24 padding-top--48 ">
                        <input type="submit" name="submit" value="Continue" />
                        </div>
                        <div className="field">
                        <div className="ssolink">Already have an account? <a href='#'>Login In</a></div>
                        </div>
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

export default SignUp