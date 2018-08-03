import React, { Component } from "react";
import ReactModalLogin from 'react-modal-login';
import "./Header.css";

// react-modal-login.js

// import PropTypes from "prop-types";

// Components Needed
// import Tabs from "./components/Tabs";
// import CloseBtn from "./components/Close";

// import SubmitError from "./components/SubmitError";

// import Separator from "./components/Separator";
// import Loader from "./components/Loader";
// import FormWrap from "./components/FormWrap";







class Header extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
          showModal: false,
          loading: false,
          error: null,
          initialTab: null, //
          loggedIn: null, //
          recoverPasswordSuccess: null, //
        };
     
      }
     
      onLogin() { //
        console.log('__onLogin__');
        console.log('email: ' + document.querySelector('#email').value);
        console.log('password: ' + document.querySelector('#password').value);
    
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
    
        if (!email || !password) {
          this.setState({
            error: true
          })
        } else {
          this.onLoginSuccess('');
        }
      }

      onRegister() { //
        console.log('__onRegister__');
        console.log('login: ' + document.querySelector('#login').value);
        console.log('email: ' + document.querySelector('#email').value);
        console.log('password: ' + document.querySelector('#password').value);
    
        const login = document.querySelector('#login').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
    
        if (!login || !email || !password) {
          this.setState({
            error: true
          })
        } else {
          this.onLoginSuccess('');
        }
      }
    
      onRecoverPassword() { //
        console.log('__onFotgottenPassword__');
        console.log('email: ' + document.querySelector('#email').value);
    
        const email = document.querySelector('#email').value;
    
    
        if (!email) {
          this.setState({
            error: true,
            recoverPasswordSuccess: false
          })
        } else {
          this.setState({
            error: null,
            recoverPasswordSuccess: true
          });
        }
      }




      openModal(initialTab) { //
        this.setState({
          initialTab: initialTab
        }, () => {  
            this.setState({
                showModal: true,
            })

        });
      }
     

    //   onLoginSuccess(method, response) {
    //     console.log('logged successfully with ' + method);
    //   }
     
        onLoginSuccess(method, response) {

            this.closeModal();
            this.setState({
            loggedIn: method,
            loading: false
            })
        }

    //   onLoginFail(method, response) {
    //     console.log('logging failed with ' + method);
    //     this.setState({
    //       error: response
    //     })
    //   }

        onLoginFail(method, response) {

            this.setState({
            loading: false,
            error: response
            })
        }
    
     
        startLoading() {
         this.setState({
          loading: true
         })
        }
     
      finishLoading() {
        this.setState({
          loading: false
        })
      }
     
    //   afterTabsChange() {
    //     this.setState({
    //       error: null
    //     });
    //   }

        afterTabsChange() {
            this.setState({
            error: null,
            recoverPasswordSuccess: false,
            });
        }

        // closeModal() {
        //     this.setState({
        //       showModal: false,
        //       error: null
        //     });
        //   }

        closeModal() {
            this.setState({
              showModal: false,
              error: null
            });
        }
          
        
        render() {

            const loggedIn = this.state.loggedIn
            // ? <div>
            //     <p>You are signed in with: {this.state.loggedIn}</p>
            //   </div>
            // : <div>
            //     <p>You are signed out</p>
            // </div>;
      
            const isLoading = this.state.loading;
            
                return (

                    <header className="masthead text-center text-white d-flex">
                        <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                            <h1 className="text-uppercase">
                                <strong>The Best Way to Travel is in Style</strong>
                            </h1>
                            <hr></hr>
                            </div>
                            <div className="col-lg-8 mx-auto">
                            <p className="text-faded mb-5">Going somewhere exciting? Not sure what to wear? We will help you pick out the perfect outfit for where ever you are going.</p>
                            {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="/about">Get Styled</a> */}
                           
           

                            <div>

                              

                                {/* <button className="RML-btn" onClick={() => this.openModal()}>Open Modal</button> */}

                                   <button className="RML-btn" onClick={() => this.openModal('login')}>Get Styled</button>
                                   {/* <button className="RML-btn" onClick={() => this.openModal('register')}>Register</button> */}
                                
                                <ReactModalLogin 
                                    visible={this.state.showModal}  
                                    onCloseModal={this.closeModal.bind(this)} 
                                    // loading={this.state.loading}
                                    loading={isLoading}
                                    initialTab={this.state.initialTab}
                                    error={this.state.error}
                                    tabs={{
                                        afterChange: this.afterTabsChange.bind(this)
                                    }}
                                    startLoading={this.startLoading.bind(this)}
                                    finishLoading={this.finishLoading.bind(this)}
                
                                    loginError={{
                                        label: "Couldn't sign in, please try again."
                                    }}
                                    registerError={{
                                        label: "Couldn't sign up, please try again."
                                    }}

                                    form={{
                                        onLogin: this.onLogin.bind(this),
                                        onRegister: this.onRegister.bind(this),
                                        onRecoverPassword: this.onRecoverPassword.bind(this),

                                        recoverPasswordSuccessLabel: this.state.recoverPasswordSuccess
                                        ? {
                                            label: "New password has been sent to your mailbox!"
                                            }
                                        : null,
                                        recoverPasswordAnchor: {
                                        label: "Forgot your password?"
                                        },
                                        loginBtn: {
                                        label: "Sign in"
                                        },
                                        registerBtn: {
                                        label: "Sign up"
                                        },
                                        recoverPasswordBtn: {
                                        label: "Send new password"
                                        },
                                        loginInputs: [
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'Email',
                                            type: 'email',
                                            inputClass: 'RML-form-control',
                                            id: 'email',
                                            name: 'email',
                                            placeholder: 'Email',
                                        },
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'Password',
                                            type: 'password',
                                            inputClass: 'RML-form-control',
                                            id: 'password',
                                            name: 'password',
                                            placeholder: 'Password',
                                        }
                                        ],
                                        registerInputs: [
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'Nickname',
                                            type: 'text',
                                            inputClass: 'RML-form-control',
                                            id: 'login',
                                            name: 'login',
                                            placeholder: 'Nickname',
                                        },
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'Email',
                                            type: 'email',
                                            inputClass: 'RML-form-control',
                                            id: 'email',
                                            name: 'email',
                                            placeholder: 'Email',
                                        },
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'Password',
                                            type: 'password',
                                            inputClass: 'RML-form-control',
                                            id: 'password',
                                            name: 'password',
                                            placeholder: 'Password',
                                        }
                                        ],
                                        recoverPasswordInputs: [
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'Email',
                                            type: 'email',
                                            inputClass: 'RML-form-control',
                                            id: 'email',
                                            name: 'email',
                                            placeholder: 'Email',
                                        },
                                        ],
                                    }}
                                    // separator={{
                                    //     label: "or"
                                    // }}
                                    />
                                    {loggedIn}
                                </div>
                            </div>
                        </div>
                        </div>
                 </header>
            
                
                );
        } 
}


export default Header;