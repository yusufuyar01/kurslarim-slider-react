import Course from "./Course";

function Courses({courses , renoveCourse}) {
    
    return <div className="courses-general">
        <div>
            <h2>KURSLARIM</h2>
        </div>
        <div className="courses">
            {
                courses.map((course) => {
                    return <Course key={course.id} {...course} renoveOneCourse = {renoveCourse} />
                    // course={course} bu propsu kullanmak yerine ...course kullandım. Böylece coursenin içindekileri props olarak gönderebildim.
                })
            }
        </div>
    </div> ;
}

export default Courses;