import React, { Component } from 'react';
import { Spinner,Jumbotron } from 'reactstrap';
class Profile extends Component {
        render() {
                return (
                        <div className="text-center">
                                
                                <Jumbotron>
                                <h1 className="display-3">Hello, User!</h1>
                                <p className="lead">Welcome to SMS Manage Center</p>
                                <hr className="my-2" />
                                <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" color="info" />
                                <p className="lead">
                                
                                </p>
                        </Jumbotron>
                        
                        </div>
                );
        }
}

export default Profile;