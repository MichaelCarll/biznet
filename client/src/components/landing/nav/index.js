import React from 'react';
import Modal from './Modal';

class navBar extends React.Component{
  state={

  }

    render(){
        return (
            <div className='navbarr'>
                <img src={process.env.PUBLIC_URL+'favicon.ico'} alt="logo" />
                <i className="fas fa-bars" id='signUp'></i>
                <i className="fas fa-bars" id='loginn'></i>
                <Modal />
            </div>
        )
    }
}
export default navBar;