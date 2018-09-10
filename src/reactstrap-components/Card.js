import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class ReactCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src="https://dummyimage.com/318x180/000/fff" alt="Image Not Found" />
                    <CardBody>
                        <CardTitle>This is card title</CardTitle>
                        <CardSubtitle>This is card subtitle</CardSubtitle>
                        <CardText>This is the card text section where you can use different bootstrap element</CardText>
                        <Button>Click Me</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ReactCard;
