import React, {Component} from 'react' ;

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail : '',
            signInPassword : '' 
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail : event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword : event.target.value })
    }
    onSubmitSignIn = () => {
        const {signInEmail, signInPassword} = this.state ;
        if(signInEmail && signInPassword){
            fetch('https://ancient-fortress-54719.herokuapp.com/signin', {
                method : 'post',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({
                    email: signInEmail,
                    password: signInPassword 
                })
            }).then( response => response.json())
            .then(data => {
                    if(data.id){
                        this.props.loadUser(data) ;
                        console.log(data)
                        this.props.onRouteChange('home') ;                    
                    }else{
                        alert('wrong username / password')
                    }
            }).catch(err => {
                alert(err)
            })
        }else{
            alert('fill the field')
        }
    }
    render(){
        const { onRouteChange } = this.props ;
        return (
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0 ">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" >Email</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            onChange={this.onEmailChange} 
                             />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Password</label>
                        <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange={this.onPasswordChange} 
                             />
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
                        onClick={this.onSubmitSignIn}            
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                    <a 
                        onClick={() => onRouteChange('register')}            
                        href="#" 
                        className="f6 link dim black db">Sign up</a>
                    </div>
                </div>
                </main>
            </article>
            )
    }

}

export default SignIn ;