import React, { Component } from "react";
import ReactModalLogin from 'react-modal-login';
import "./Header.css";
import axios from "axios";








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
        
        handleSubmit = event => {
            event.preventDefault();
            var loginURL = "http://localhost:3003/auth/";
            var registerURL = "http://localhost:3003/auth/";
         
            const login = {
                "email": this.state.email,
                "password": this.state.password

            }

            const register = {
                "firstname": this.state.firstname,
                "lastname": this.state.lastname,
                "email": this.state.email,
                "password": this.state.password

            }
        
            axios.post(loginURL + "/login", { login })
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.body);

                if (res.data.code == 200) {
                    console.log("login succesful");
       
                }
            }).catch(function(error){
                console.log(error);
            });

            axios.post(registerURL + "/register", { register })
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.body);
                
                if (res.data.code == 200) {
                    console.log("login succesful");
   
                }
                
            }).catch(function(error){
                console.log(error);
            });
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
        console.log('first name: ' + document.querySelector('#firstname').value);
        console.log('last name: ' + document.querySelector('#lastname').value);
        console.log('email: ' + document.querySelector('#email').value);
        console.log('password: ' + document.querySelector('#password').value);
    
        const firstname = document.querySelector('#firstname').value;
        const lastname = document.querySelector('#lastname').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
    
        if (!firstname|| !lastname || !email || !password) {
          this.setState({
            error: true
          })
        } else {
          this.onLoginSuccess();
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
     

        onLoginSuccess(method, response) {

            this.closeModal();
            // this.openModal();
            this.setState({
            loggedIn: method,
            loading: false


            })
        }




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
     

        afterTabsChange() {
            this.setState({
            error: null,
            recoverPasswordSuccess: false,
            });
        }


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
                                        // onSubmit: { this.handleSubmit },
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
                                        label: "Sign in",
                                        method: 'post',
                                        action: '/travel',
                                        type: 'submit'
                                      
                                        },
                                        registerBtn: {
                                        label: "Sign up",
                                        method: 'post',
                                        action: '/login',
                                        type: 'submit'
                   
                                        },
                                        recoverPasswordBtn: {
                                        label: "Send new password"
                                        },
                                        loginInputs: [
                                        {
                                            
                                            containerClass: 'RML-form-group',
                                            label: 'email',
                                            type: 'email',
                                            inputClass: 'RML-form-control',
                                            id: 'email',
                                            name: 'email',
                                            placeholder: 'Email',
                                            // onChange: { this.handleChange }
                                          

                                        },
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'password',
                                            type: 'password',
                                            inputClass: 'RML-form-control',
                                            id: 'password',
                                            name: 'password',
                                            placeholder: 'Password',
                                            // onChange: { this.handleChange }
                                        }
                                        ], // <form id="signup" name="signup" method="post" action="/signup">
                                        registerInputs: [
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'First Name',
                                            type: 'text',
                                            inputClass: 'RML-form-control',
                                            id: 'firstname',
                                            name: 'firstname',
                                            placeholder: 'First Name',
                                            // onChange: { this.handleChange }
                                        },
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'Last Name',
                                            type: 'text',
                                            inputClass: 'RML-form-control',
                                            id: 'lastname',
                                            name: 'lastname',
                                            placeholder: 'Last Name',
                                            // onChange: { this.handleChange }
                                        },
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'email',
                                            type: 'email',
                                            inputClass: 'RML-form-control',
                                            id: 'email',
                                            name: 'email',
                                            placeholder: 'Email',
                                            // onChange: { this.handleChange }
                                        },
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'password',
                                            type: 'password',
                                            inputClass: 'RML-form-control',
                                            id: 'password',
                                            name: 'password',
                                            placeholder: 'Password',
                                            // onChange: { this.handleChange }
                                        }
                                        ],
                                        recoverPasswordInputs: [
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'email',
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
