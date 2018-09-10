import React, { Component } from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

class CarouselDemo extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="https://dummyimage.com/900x500/000/fff" />
                        <Carousel.Caption>
                            <h3>Slide 1 Label</h3>
                            <p>This is the slide 1 description</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="https://dummyimage.com/900x500/000/fff" />
                        <Carousel.Caption>
                            <h3>Slide 2 Label</h3>
                            <p>This is the slide 2 description</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="https://dummyimage.com/900x500/000/fff" />
                        <Carousel.Caption>
                            <h3>Slide 3 Label</h3>
                            <p>This is the slide 3 description</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default CarouselDemo;
