import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa";

function Courses({courses }) {
    const [index, setIndex] = useState(0)
    const { content, title, price}  = courses[index];

    const prevCourse = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        })
    }
    const nextCourse = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        })
    }
    const checkIndex = (index)  => {}

    return <div className="courses-general">
        <div>
            <h2>KURSLARIM</h2>
        </div>
        <div className="cardDiv">
        <button className="prevNext" onClick={prevCourse}><FaChevronLeft /></button>
        <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <p>{content}</p>
            <h4 className="cardPrice">{price}TL</h4>
        </div>
        <button className="prevNext" onClick={nextCourse}><FaChevronRight /></button>
        </div>
    </div> ;
}

export default Courses;