import React from 'react' ;
import Tilt from 'react-tilt' ;
import './Navigation.css' ;

const Navigation = ({onRouteChange, isSignin}) => {
        if(isSignin){
            return (
                <div className='ma4 mt0 flex'>
                <Tilt className="Tilt br2 shadow-2  w-25 pa3 mr2" options={{ max : 35 }} style={{ height: 50, width: 150 }} >
                     <div className="Tilt-inner b white">  DAFA AI </div>
                </Tilt>
                <a onClick={() => onRouteChange('SignIn')} href='#'> 
                <Tilt className="Tilt br2 shadow-2  w-25 pa3 mr2" options={{ max : 35 }} style={{ height: 50, width: 150 }} >
                     <div className="Tilt-inner b white"> LOGOUT </div>
                </Tilt>
                </a>                          
            </div>
    
            );
        }else{
            return (
                <div className='ma4 mt0 flex'>
                <Tilt className="Tilt br2 shadow-2  w-25 pa3 mr2" options={{ max : 35 }} style={{ height: 50, width: 150 }} >
                     <div className="Tilt-inner b white">  DAFA AI </div>
                </Tilt>
                <a onClick={() => onRouteChange('SignIn')} href='#'> 
                <Tilt className="Tilt br2 shadow-2  w-25 pa3 mr2" options={{ max : 35 }} style={{ height: 50, width: 150 }} >
                     <div className="Tilt-inner b white"> SIGN IN </div>
                </Tilt>
                </a>                          
                <a onClick={() => onRouteChange('register')} href='#'> 
                <Tilt className="Tilt br2 shadow-2  w-25 pa3 mr2" options={{ max : 35 }} style={{ height: 50, width: 150 }} >
                     <div className="Tilt-inner b white"> REGISTER  </div>
                </Tilt>
                </a>                          
            </div>
            )      ;       
        }
}

export default Navigation ;