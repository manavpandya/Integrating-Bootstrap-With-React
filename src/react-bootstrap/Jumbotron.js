import React, { Component } from 'react';
import  { Jumbotron , Button } from 'react-bootstrap';

class JumbotronDemo extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>React-bootstrap Jumbotron</h1>
                    <p>
                       This is the simple example which shows the simple demo for Jumbotron of react-bootstrap
                    </p>
                    <p>
                        <Button bsStyle="primary">Click Me</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

export default JumbotronDemo;
