import React from 'react';
import axios from 'axios';

class modal extends React.Component{
    state={
        
    }
    handleChange=(event)=>{
        event.preventDefault();
        const {name,value} = event.target;
        console.log(name,value)
        this.setState({[name]:value})
    }
    signupSend=(event)=>{
        event.preventDefault();
        axios.post('/auth/signup',function(res,err){
            console.log(res)
        })
    }
    loginSend=(event)=>{
        event.preventDefault();
        axios.post('/auth/login',function(res,err){
            console.log(res)
        })
    }

    render(){
        return (
            <div>
                <div className="modal landingModal1" tabIndex="-1" role="dialog">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Sign up Modal</h5>
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
                        <button type="button" onClick={this.signupSend}  name={this.state.email} data-pass={this.state.password} className="btn btn-primary">Save </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal landingModal2" tabIndex="-1" role="dialog">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">login Modal</h5>
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
                        <button type="button" onClick={this.loginSend} name={this.state.email} data-pass={this.state.password} className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
                
            </div>
        )
    }
}
export default modal;