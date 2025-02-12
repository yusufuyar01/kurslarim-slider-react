function Course({id,content,title,price, renoveOneCourse}) {
    
    return <div>
        <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <p>{content}</p>
            <h4 className="cardPrice">{price}TL</h4>
            <button className="cardDelete" onClick={() => renoveOneCourse(id)}>SİL</button>
        </div>
    </div>;
}

export default Course;