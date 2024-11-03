import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";
import "./styles.css"

export const StarRating = ({numberOfStars = 5}) => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }

    function handleMouthEnter(getCurrentIndex) {
        setHover(getCurrentIndex)
    }

    function handleMouthLeave() {
        setHover(rating)
    }

    return (
        <div className="star-rating">
            {
                [...Array(numberOfStars)].map((star, index) => {
                    index += 1

                    return <FaStar
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouthEnter(index)}
                        onMouseLeave={() => handleMouthLeave()}
                        className={`star ${index <= (hover || rating) ? "active" : "inactive"}  `}
                    />
                })
            }
        </div>
    );
};