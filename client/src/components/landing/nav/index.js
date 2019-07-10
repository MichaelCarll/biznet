import React from 'react';

class navBar extends React.Component{
  state={

  }
  handleChange=(event)=>{
    event.preventDefault();
    const {name,value} = event.target;
    console.log(name,value)
    console.log(event.target)
    this.setState({[name]:value})
  }


    render(){
        return (
            <div className='navbarr'>
                <img src={process.env.PUBLIC_URL+'favicon.ico'} alt="logo" />
                <i className="fas fa-bars" id='signUp'></i>
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
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" name='email' value={this.state.email} onChange={this.handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" name='password' onChange={this.handleChange} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
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