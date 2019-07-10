import React from 'react';

class navBar extends React.Component{

    render(){
        return (
            <div className='navbarr'>
                <img src={process.env.PUBLIC_URL+'favicon.ico'} alt="logo" />
                <i className="fas fa-bars" id='loginn'></i>
                <div className="modal modalOne" tabIndex="-1" role="dialog">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>Modal body text goes here.</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}
export default navBar;