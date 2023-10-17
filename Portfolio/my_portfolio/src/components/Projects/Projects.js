import './Projects.css';
import Slider from '../Slider/Slider';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useState } from 'react';

function Projects(props) {
    const images = ["1", "2", "3", "4", "5", "6", "7", "8"];
    const [startEnd, setStartEnd] = useState([0, 4]);

    const nextSlide = () => {
        if (startEnd[1] === images.length) {
            setStartEnd([0, 4]);
        } 
        else {
            setStartEnd(startEnd.map((item)=>{
                return item + 4;
            }));
        }
    };
    const prevSlide = () => {
        if (startEnd[0] === 0) {
            setStartEnd([images.length-4, images.length])
        } 
        else {
            setStartEnd(startEnd.map((item)=>{
                return item - 4;
            }));
        }
    };

    return (
        <div className='container' id={props.id}>
            <h2 className='animate__animated animate__fadeInDown animate__delay-1s'>My Projects</h2>
            <div className='gallery animate__animated animate__fadeInDown'>
                <Slider images={images} startEndPoints={startEnd}/>
            </div>
            <div className='slider-buttons animate__animated animate__fadeInDown'>
                <AiOutlineArrowLeft onClick={prevSlide} id={props.id} className='left-arrow' />
                <AiOutlineArrowRight onClick={nextSlide} id={props.id} className='right-arrow' />
            </div>
        </div>
    );
}

export default Projects;