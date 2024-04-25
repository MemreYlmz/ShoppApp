import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Slider() {
  return (
    <div>
      <Carousel className='slider-carousel'>
        <Carousel.Item >
          <img
          className='carouselItem-img'
            src="https://www.webtekno.com/images/editor/default/0003/68/5b2ae4da1c0cd20cb5d441da32f8165720a07e90.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
          <img
           className='carouselItem-img'
            src="https://www.webtekno.com/images/editor/default/0003/68/5b2ae4da1c0cd20cb5d441da32f8165720a07e90.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
  )
}

export default Slider