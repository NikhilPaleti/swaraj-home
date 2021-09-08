import { Carousel,Item,CarouselControl,CarouselIndicators,CarouselCaption } from 'react-bootstrap';
import React from 'react'
import lemon from '../assets/Lemon 1.jpg';
import chilli from '../assets/Green Chilli 1.jfif';
import ginger from '../assets/Ginger 1.jpg';
import './carousel.css';

export default function MyCarousel() {
    return (
            <Carousel className="carousel-main text-center">
                <Carousel.Item> 
                    <img className="carousel-img" src={lemon} alt="Image of Lemon" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-img" src={chilli} alt="Image of Chilli" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-img" src={ginger} alt="Image of Ginger" />
                </Carousel.Item>
            </Carousel>
    )
}
