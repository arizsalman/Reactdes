import { useState , useEffect } from "react";
function FirstTask() {

    const [view, setView] = useState('list');
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [media, setMedia] = useState({
      videos: [],
      pdfs: [],
      quizzes: [],
    });
  
    useEffect(() => {
      if (selectedCourse) {
        setTitle(selectedCourse.title);
        setDescription(selectedCourse.description);
      } else {
        setTitle('');
        setDescription('');
      }
    }, [selectedCourse]);
  
    const handleAddCourse = () => {
      setSelectedCourse(null);
      setView('form');
    };
  
    const handleEditCourse = (course) => {
      setSelectedCourse(course);
      setView('form');
    };
  
    const handleDeleteCourse = (id) => {
      setCourses(courses.filter(course => course.id !== id));
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (selectedCourse) {
        setCourses(courses.map(course =>
          course.id === selectedCourse.id ? { ...course, title, description } : course
        ));
      } else {
        setCourses([...courses, { id: courses.length + 1, title, description }]);
      }
      setView('list');
    };
  
    const handleMediaUpload = (e, type) => {
      const files = Array.from(e.target.files);
      setMedia({ ...media, [type]: [...media[type], ...files] });
    };
  
  
    return(
        <div className="App">
        <header className="app-header">
          <h1>Beautiful Course Management System</h1>
        </header>
        {view === 'list' && (
          <>
            <div className="course-header">
              <button className="btn primary-btn" onClick={handleAddCourse}>Add Course</button>
            </div>
            <ul className="course-list">
              {courses.map(course => (
                <li key={course.id} className="course-item">
                  <div className="course-info">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </div>
                  <div className="course-actions">
                    <button className="btn secondary-btn" onClick={() => handleEditCourse(course)}>Edit</button>
                    <button className="btn danger-btn" onClick={() => handleDeleteCourse(course.id)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
        {view === 'form' && (
          <>
            <h2>{selectedCourse ? 'Edit Course' : 'Add Course'}</h2>
            <form onSubmit={handleFormSubmit} className="course-form">
              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
              <button className="btn primary-btn" type="submit">
                {selectedCourse ? 'Update' : 'Add'} Course
              </button>
              <button className="btn secondary-btn" onClick={() => setView('list')}>Back to Courses</button>
            </form>
          </>
        )}
        {view === 'media' && (
          <>
            <h2>Upload Multimedia</h2>
            <div className="form-group">
              <label>Videos:</label>
              <input
                type="file"
                multiple
                accept="video/*"
                onChange={(e) => handleMediaUpload(e, 'videos')}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>PDFs:</label>
              <input
                type="file"
                multiple
                accept=".pdf"
                onChange={(e) => handleMediaUpload(e, 'pdfs')}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Quizzes:</label>
              <input
                type="file"
                multiple
                onChange={(e) => handleMediaUpload(e, 'quizzes')}
                className="input-field"
              />
            </div>
            <button className="btn secondary-btn" onClick={() => setView('list')}>Back to Courses</button>
          </>
        )}
        <div>
          <button className="btn primary-btn" onClick={() => setView('media')}>Upload Multimedia</button>
        </div>
  
        <style>{`
          .App {
            font-family: 'Roboto', sans-serif;
            background: #f7f9fc;
            padding: 20px;
            max-width: 900px;
            margin: auto;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
  
          .app-header {
            background-color: #007bff;
            padding: 20px;
            color: white;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
  
          .course-header {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 20px;
          }
  
          .course-list {
            list-style-type: none;
            padding: 0;
          }
  
          .course-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            padding: 20px;
            margin-bottom: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
  
          .course-info h3 {
            margin: 0;
            font-size: 1.5rem;
            color: #333;
          }
  
          .course-info p {
            margin: 5px 0 0;
            color: #777;
          }
  
          .course-actions .btn {
            margin-left: 10px;
          }
  
          .course-form {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
  
          .form-group {
            margin-bottom: 15px;
          }
  
          .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
          }
  
          .input-field {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 5px;
            background: #f7f9fc;
            color: #333;
          }
  
          .btn {
            padding: 15px 15px;
            
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
          }
  
          .primary-btn {
      
            background-color: #007bff;
            color: white;
          }
  
          .primary-btn:hover {
            background-color: #0056b3;
          }
  
          .secondary-btn {
           padding: 15px 15px;
            background-color: #6c757d;
            color: white;
          }
  
          .secondary-btn:hover {
            background-color: #5a6268;
          }
  
          .danger-btn {
           padding: 15px 15px;
            background-color: #dc3545;
            color: white;
          }
  
          .danger-btn:hover {
            background-color: #c82333;
          }
        `}</style>
      </div>
    )
}

export default FirstTask;