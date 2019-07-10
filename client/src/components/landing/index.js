import React from 'react';
import NavBar from './nav';
class landingPage extends React.Component{

    render(){
        return (
            <div>
                <NavBar class="navbar navbar-inverse" />
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#biznetNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="">BZNC</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="index.html">Home</a></li>
                            <li><a href="started.html">Getting Started</a></li>
                            <li><a href="schedule.html">Schedules</a></li>
			                <li><a href="field">Field Location</a></li>
                        </ul>
                    </div> 
                </div>
            </div>
        )
    }
}
export default landingPage;