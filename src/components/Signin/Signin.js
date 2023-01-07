import React, { Component } from 'react';


class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: "",
            signInPassword: ""
        }
    }
    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }
    onSubmit = () => {
        fetch("http://localhost:3000/signin", {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        }).then(res => res.json())
            .then(user => {
                if (user._id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange("home");
                    // console.log(user);
                }
                else {
                    // return (
                    // )
                    // alert("User is not registered yet");
                    document.getElementById("alert").click();
                }
                // console.log(user);
            });

    }
    render() {
        return (
            <div className='center ma'>
                {/* <!-- Button trigger modal --> */}
                <button type="button" id="alert" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModalLong"></button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Not Registered</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                User is not registered yet, register it first
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.props.onRouteChange("Register")}>Okay</button>
                            </div>
                        </div>
                    </div>
                </div>
                <article className="br3 shadow-5 ba bw2 dark-gray b--black-20 mv4 w-100 w-50-m w-25-l mw6 center">
                    <main className="pa4 black-80">
                        <form className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                                    <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 text-dark" type="email" name="email-address" id="email-address" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                                    <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 text-dark" type="password" name="password" id="password" />
                                </div>
                            </fieldset>
                            <div className="">
                                <p onClick={this.onSubmit} className="tc ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 ">Sign In</p>
                            </div>
                            <div className="lh-copy mt3">
                                <p onClick={() => this.props.onRouteChange("Register")} className="f5 link dim black db pointer">Register</p>
                            </div>
                        </form>
                    </main>
                </article>
            </div>
        )
    }
};

export default Signin;