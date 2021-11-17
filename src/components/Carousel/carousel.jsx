import Carousel from 'react-bootstrap/Carousel';
import Slider1 from './../../Assests/slider-1.jfif';
// import Slider2 from './../../Assests/slider-2.jfif';
// import Slider3 from './../../Assests/slider-3.jfif';

import "./carousel.css";

export const ImageSliders = () =>{
    return(
        <Carousel>
            <Carousel.Item>
                <div className=" overlay-item">
                    <img className="d-block w-100 bg-image"
                        src={Slider1}
                        alt="First slide" />
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className=" overlay-item">
                    <img className="d-block w-100 bg-image"
                        src={Slider1}
                        alt="First slide" />
                </div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className=" overlay-item">
                    <img className="d-block w-100 bg-image"
                        src={Slider1}
                        alt="First slide" />
                </div>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}