import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader, Container, Row, Col,Jumbotron,  } from 'reactstrap';
class Landing extends Component {
    clickToast=()=>{
        alert('Clocked')
    }

    render() {
        return (
            <div style={{ background: 'black' }}>
                <div>
                    <Container fluid>
                        <h1 className="display-3">Fluid jumbotron</h1>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col xs="6" sm="4">
                            <div className="p-3 my-2 rounded" style={{ background: '#E76A19' }}>
                                <Toast>
                                    <ToastHeader><h4>USERS</h4></ToastHeader>
                                    <ToastBody>
                                    <h6>Manage All users</h6> 
                                    </ToastBody>
                                </Toast>
                            </div>
                        </Col>
                        <Col xs="6" sm="4">
                            <div className="p-3 my-2 rounded" style={{ background: '#E76A19' }}>
                                <Toast>
                                    <ToastHeader><h4>USERS</h4></ToastHeader>
                                    <ToastBody>
                                    <h6>Manage All users</h6> 
                                    </ToastBody>
                                </Toast>
                            </div>
                        </Col>
                        <Col sm="4">
                            <div className="p-3 my-2 rounded" style={{ background: '#E76A19' }}>        
                                <Toast>
                                    <ToastHeader><h4>USERS</h4></ToastHeader>
                                    <ToastBody>
                                    <h6>Manage All users</h6> 
                                    </ToastBody>
                                </Toast>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6" sm="4">
                            <div className="p-3 my-2 rounded" style={{ background: '#E76A19' }}>
                                <Toast>
                                    <ToastHeader><h4>USERS</h4></ToastHeader>
                                    <ToastBody>
                                    <h6>Manage All users</h6> 
                                    </ToastBody>
                                </Toast>
                            </div>
                        </Col>
                        <Col xs="6" sm="4">
                            <div className="p-3 my-2 rounded" style={{ background: '#E76A19' }}>
                                <Toast>
                                    <ToastHeader><h4>USERS</h4></ToastHeader>
                                    <ToastBody>
                                    <h6>Manage All users</h6> 
                                    </ToastBody>
                                </Toast>
                            </div>
                        </Col>
                        <Col sm="4">
                            <div className="p-3 my-2 rounded" style={{ background: '#E76A19' }}>        
                                <Toast>
                                    <ToastHeader><h4>USERS</h4></ToastHeader>
                                    <ToastBody>
                                    <h6>Manage All users</h6> 
                                    </ToastBody>
                                </Toast>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6" sm="4">
                            <div className="p-3 my-2 rounded" style={{ background: '#E76A19' }}>
                                <Toast>
                                    <ToastHeader><h4>USERS</h4></ToastHeader>
                                    <ToastBody>
                                    <h6>Manage All users</h6> 
                                    </ToastBody>
                                </Toast>
                            </div>
                        </Col>
                        <Col xs="6" sm="4">
                            <div className="p-3 my-2 rounded" style={{ background: '#E76A19' }}>
                                <Toast>
                                    <ToastHeader><h4>USERS</h4></ToastHeader>
                                    <ToastBody>
                                    <h6>Manage All users</h6> 
                                    </ToastBody>
                                </Toast>
                            </div>
                        </Col>
                        <Col sm="4">
                            <div className="p-3 my-2 rounded" style={{ background: '#E76A19' }}>        
                                <Toast>
                                    <ToastHeader><h4>USERS</h4></ToastHeader>
                                    <ToastBody>
                                    <h6>Manage All users</h6> 
                                    </ToastBody>
                                </Toast>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Landing;