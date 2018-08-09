import React, { Component } from "react";
<<<<<<< HEAD
import ReactModalLogin from 'react-modal-login';
import "./Header.css";
import axios from "axios";



class Header extends Component {

        constructor(props) {

            super(props);
        
=======
import "./Header.css";
import axios from "axios";
import Auth from '../../modules/Auth';
import { Card, CardTitle, CardText } from 'material-ui/Card';

class Header extends Component {

        constructor(props) {
        
            super(props);
           

>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
            this.state = {
                showModal: false,
                loading: false,
                error: null,
<<<<<<< HEAD
                initialTab: null, 
=======
                activeTab: 0, 
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
                loggedIn: null, 
                recoverPasswordSuccess: null, 

                
<<<<<<< HEAD
                
                firstname: " ", //*
                lastname: " ", //*
                email: " ", //*
                password: "  ", //*
                

            };
        
            // this.onLoginSuccess = this.onLoginSuccess.bind(this) //*  LogIn handleSubmit
            // this.onRegisterSuccess = this.onRegisterSuccess.bind(this) // * REG handleSubmit
            // this.handleChange = this.handleChange.bind(this) //*  REG

            // this.getUser = this.getUser.bind(this)
            // this.componentDidMount = this.componentDidMount.bind(this)
            // this.updateUser = this.updateUser.bind(this)
=======
                firstname: "", 
                lastname: "", 
                email: "", 
                password: "", 

            };
        
         
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
 

        } 

<<<<<<< HEAD
        // componentDidMount() {
        //     this.onLoginSuccess()
        // }
        
        // updateUser (userObject) {
        //     this.setState(userObject)
        // }
        

        handleInputChange(event) { //* REG
            this.setState({
                firstname: event.target.value,
                lastname: event.target.value,
                email: event.target.value,
                password: event.target.value

            })
        }
        

            
    
      onLogin() { //
        console.log('__onLogin__');
        console.log('email: ' + document.querySelector('#email').value);
        console.log('password: ' + document.querySelector('#password').value);
    
        // const email = document.querySelector('#email').value;
        // const password = document.querySelector('#password').value;
    
        // if (!email || !password) {
        //   this.setState({
        //     error: true
        //   })
        // } else {
        //   this.onLoginSuccess('');
        // }

        this.onLoginSuccess('');
        



      } 

      onRegister() { //
        console.log('__onRegister__');
        console.log('first name: ' + document.querySelector('#firstname').value);
        console.log('last name: ' + document.querySelector('#lastname').value);
        console.log('email: ' + document.querySelector('#email').value);
        console.log('password: ' + document.querySelector('#password').value);
    
        // const firstname = document.querySelector('#firstname').value;
        // const lastname = document.querySelector('#lastname').value;
        // const email = document.querySelector('#email').value;
        // const password = document.querySelector('#password').value;
    
        // if (!firstname|| !lastname || !email || !password) {
        //   this.setState({
        //     error: true
        //   })
        // } else {
        //   this.onRegisterSuccess();
        // }
        
        this.onRegisterSuccess();
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
     

        onLoginSuccess() {
            // event.preventDefault();
=======
    

        // handleInputChange(event) { //* REG

        // console.log(event);
       
           
        //     const { name, value } = event.target;
        //         this.setState({
                   
        //             [name]: value
                
        //         });       
        // }
        

        onLoginSuccess() {
           
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
            var loginURL = "/auth";
            // http://localhost:3000

            const login = {
                "email": this.state.email,
                "password": this.state.password
        
            }
        
            axios.post(loginURL + "/login", { 
                
                email: this.state.email,
                password: this.state.password
                
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.body);       
                if (res.status === 200) {
                    // update App.js state 
                    // this.props.updateUser ({
                    //     loggedIn: true,
                    //     email: res.data.email
                    // }) // update the state to redirect to 
                    
                    this.setState({
                        redirectTo: '/travel'
                    })
                } 
            }).catch(error => {
                console.log(error);
                window.location = "/"
            });
    
        }

<<<<<<< HEAD
        onRegisterSuccess() {
            // event.preventDefault();
            var registerURL = "/auth";
            //http://localhost:3000
            const register = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password
        
            }
        
=======
        // onRegisterSuccess() {
        
            // var registerURL = "/auth";
            // //http://localhost:3000
            // const register = {
            //     firstname: this.state.firstname,
            //     lastname: this.state.lastname,
            //     email: this.state.email,
            //     password: this.state.password
        
            // }
        
            // axios.post(registerURL + "/register", { 

            //     firstname: this.state.firstname,
            //     lastname: this.state.lastname,
            //     email: this.state.email,
            //     password: this.state.password

            // })
            //     .then(res => {
            //         console.log(res);
            //         console.log(res.data);
            //         console.log(res.body);
            
            //         if (res.data) {
            //             // window.location = "/login"
            //             this.setState({
            //                 // redirectTo: '/login'
                            
            //             })
            //         } else if (res.data.redirect === '/login') {
            //             // window.location = "/login"
                        
            //         }
            //     }).catch(error => {
            //         console.log(error);
            //         // window.location = "/login"
                    
            //     });
        // }

    
    //   onLogin(yo) { //
    //     console.log('__onLogin__');
    
    //     console.log(yo);
    //     // this.onLoginSuccess('');

    //   } 

    //   goToTab(index) {
    //     this.setState({ activeTab: index });
    //   }

      onRegister() { //
        console.log('__onRegister__');
       
        var registerURL = "/auth";
 
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
            axios.post(registerURL + "/register", { 

                firstname: this.state.firstname,
                lastname: this.state.lastname,
<<<<<<< HEAD
                email: this.state.email,
=======
                username: this.state.email,
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
                password: this.state.password

            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    console.log(res.body);
            
                    if (res.data) {
<<<<<<< HEAD
                        // window.location = "/login"
                        this.setState({
                            // redirectTo: '/login'
                            
                        })
=======
                         
                        this.setState({
                             redirectTo: '/login'
                             
                            
                            
                        })

                        console.log('success!')
                        // window.location = "/login"
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
                    } else if (res.data.redirect === '/login') {
                        // window.location = "/login"
                        
                    }
                }).catch(error => {
                    console.log(error);
                    // window.location = "/login"
                    
                });
<<<<<<< HEAD
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
=======
        
        // this.onRegisterSuccess();
      }
    
     


    //   openModal(initialTab) { //
    //     this.setState({
    //             showModal: true,
    //         });
    //   }
     
    //     onLoginFail(method, response) {

    //         this.setState({
    //         loading: false,
    //         error: response
    //         })
    //     }
    
     
    //     startLoading() {
    //      this.setState({
    //       loading: true
    //      })
    //     }
     
    //   finishLoading() {
    //     this.setState({
    //       loading: false
    //     })
    //   }
     

    //     afterTabsChange() {
    //         this.setState({
    //         error: null,
    //         recoverPasswordSuccess: false,
    //         });
    //     }


    //     closeModal() {
    //         this.setState({
    //           showModal: false,
    //           error: null
    //         });
    //     }
          
        
        
        // handleSelect(key) { //tab
        //     alert(`selected ${key}`);
        //     this.setState({ key });
        // }


        render() {
            return (

            // const loggedIn = this.state.loggedIn
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
            // ? <div>
            //     <p>You are signed in with: {this.state.loggedIn}</p>
            //   </div>
            // : <div>
            //     <p>You are signed out</p>
            // </div>;
<<<<<<< HEAD
      
            const isLoading = this.state.loading;
            
                return (
=======
            // const isLoading = this.state.loading;
            

>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5

                <header className="masthead text-center text-white d-flex">
        
                    <div className="container my-auto">
                                            
                        <div className="row">
                        
                            <div className="col-lg-10 mx-auto">

<<<<<<< HEAD
                            <li className="animated fadeInDownBig">
                                <img class="smt" src="/images/SMT.png" alt="SMT"/>   
                            </li>

                                
=======
                                <li className="animated fadeInDownBig">
                                    <img className="smt" src="/images/SMT.png" alt="SMT"/>   
                                </li>           
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
                            </div>
                           
                            <div className="col-lg-8 mx-auto headerDiv">
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
<<<<<<< HEAD
                                <button className="RML-btn" onClick={() => this.openModal('login')}>Get Styled</button>

                                {/* <h1 className="headerText text-uppercase"> <strong>The Best Way to Travel is in Style</strong> </h1> */}
                                {/* <p className="text-faded mb-5 headerText">Going somewhere exciting? Not sure what to wear? We will help you pick out the perfect outfit for where ever you are going.</p> */}
                             
                               
                               
                            <div>

                                <ReactModalLogin 
                                    // componentDidMount = {this.compHEonentDidMount.bind(this)}
                                    // updateUser = {this.updateUser.bind(this)}
                                    onLoginSuccess = {this.onLoginSuccess.bind(this)} //*  LogIn handleSubmit
                                    handleInputChange = {this.handleInputChange.bind(this)}
                                    onRegisterSuccess = {this.onRegisterSuccess.bind(this)} // * REG handleSubmit
                                    handleInputChange = {this.handleInputChange.bind(this)} //*  REG



                                    updateUser = {this.updateUser}
                                    loggedIn = {this.state.loggedIn}

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

                                        
                                        // onLoginSuccess: this.onLoginSuccess.bind(this), //*  LogIn handleSubmit
                                        // handleLogin: this.handleRegister.bind(this),
                                        // onRegisterSuccess: this.onRegisterSuccess.bind(this), // * REG handleSubmit
                                        // handleRegister: this.handleRegister.bind(this), //*  REG
                                
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
                                        label: "Log in",
                                        method: 'post',
                                        // onClick: this.onLoginSuccess,
                                        onClick: this.onLogin,
                                        type: 'submit'
                                      
                                        },
                                        registerBtn: {
                                        label: "Register",
                                        method: 'post',
                                        onClick: this.onRegisterSuccess,
                                        onClick: this.onRegister,
                                        type: 'submit'
                                        
                                        },
                                        recoverPasswordBtn: {
                                        label: "Send new password"
                                        },

                                        loginInputs: [
                                        {
                                            
                                            containerClass: 'RML-form-group',
                                            action: "/login",
                                            label: 'email',
                                            type: 'email',
                                            inputClass: 'RML-form-control',
                                            id: 'email',
                                            name: 'email',
                                            placeholder: 'Email',
                                            value: this.state.email,
                                            // onChange: this.onLoginSuccess.bind(this)
                                            onChange: this.handleInputChange.bind(this)


                                        
                                        },
                                        {
                                            containerClass: 'RML-form-group',
                                            action: "/register",
                                            label: 'password',
                                            type: 'password',
                                            inputClass: 'RML-form-control',
                                            id: 'password',
                                            name: 'password',
                                            placeholder: 'Password',
                                            value: this.state.password,
                                            // onChange: this.onLoginSuccess.bind(this)
                                            onChange: this.handleInputChange.bind(this)
                                            
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
                                            value: this. state.firstname,
                                            // onChange: this.onRegisterSuccess.bind(this)
                                            onChange: this.handleInputChange.bind(this)
                            
                                          
                                        },
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'Last Name',
                                            type: 'text',
                                            inputClass: 'RML-form-control',
                                            id: 'lastname',
                                            name: 'lastname',
                                            placeholder: 'Last Name',
                                            value: this.state.lastname,
                                            // onChange: this.onRegisterSuccess.bind(this)
                                            onChange: this.handleInputChange.bind(this)
                                           
                                        },
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'email',
                                            type: 'email',
                                            inputClass: 'RML-form-control',
                                            id: 'email',
                                            name: 'email',
                                            placeholder: 'Email',
                                            value: this.state.email,
                                            // onChange: this.onRegisterSuccess.bind(this)
                                            onChange: this.handleInputChange.bind(this)
                                            
                                        },
                                        {
                                            containerClass: 'RML-form-group',
                                            label: 'password',
                                            type: 'password',
                                            inputClass: 'RML-form-control',
                                            id: 'password',
                                            name: 'password',
                                            placeholder: 'Password',
                                            value: this.state.password,
                                            // onChange: this.onRegisterSuccess.bind(this)
                                            onChange: this.handleInputChange.bind(this)
                                            
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
                                
                                    />
                                    {loggedIn}
                                </div>
                            </div>
                        </div>
                        </div>
                 </header>
            
                
                );
=======
                                {/* <button className="RML-btn" onClick={() => this.setState({ show:true })}>Get Styled</button>  */}
                                <Card className="container" style= {{
                                        background:'transparent',
                                }}>
                                    {Auth.isUserAuthenticated() ? (
                                        <CardText style={{ fontSize: '16px', color: 'white' }}>Welcome! You are logged in.</CardText>
                                    ) : (
                                        <CardText style={{ fontSize: '16px', color: 'white' }}>You are not logged in.</CardText>
                                    )}
                                </Card>
                            </div>






                                
                                   
{/*                                 
                                <div>

                                    <div style={{
                                            display: this.state.showModal ? 'block' : 'none',
                                            position: 'fixed',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            background: 'white',
                                            width: 300,
                                            height: 300,
                                            color: 'black',
                                        }}>
                                            <div onClick={() => this.goToTab(0)}>Login</div>
                                            <div onClick={() => this.goToTab(1)}>Register</div>

                                            <div style={{
                                                display: this.state.activeTab === 0 ? 'block' : 'none'
                                                }}><h1>Login</h1>

                                            </div>
                                            
                                            <div style={{
                                                display: this.state.activeTab === 1 ? 'block' : 'none'
                                                }}><h1>Register</h1>

                                            </div>

                                    </div>
                                   
                                </div> */}
                             </div>
                        </div> 
                   
                </header>
            
                
            );
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
        } 
}


export default Header;
