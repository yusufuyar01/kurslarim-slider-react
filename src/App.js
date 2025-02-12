import './App.css';
import { useEffect, useState } from 'react'; 
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)

  const deleteCourse = (id) => {
    console.log(id+" id'li kurs silindi.");
    const afterDeletedCourses = courses.filter((courses) => courses.id !== id )
    setCourses(afterDeletedCourses);

  }

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/courses');
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, [])//sayfa ilk yüklendiğinde çalışır
  
  return (
    <div className="App">
      {loading ? (<Loading/>)
      :<>
      {courses.length === 0 ? (
        <div className='refleshDiv'>
          <h2>Bütün Kursları sildiniz!</h2>
          <button className='cardDelete' onClick={fetchCourses}>Yenile</button>
        </div>
      ) : (<Courses courses={courses} renoveCourse={deleteCourse} />)}
      </>
      }
      
    </div>
  );
}

export default App;
