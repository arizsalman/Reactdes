import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function SecondTask() {


    const [progress, setProgress] = useState(0);
    const [quizScore, setQuizScore] = useState(null);
    const [certificate, setCertificate] = useState(false);

    
    const videoUrl = 'https://www.youtube.com/watch?v=u-V2RgiY5UQ';

    
    const questions = [
        {
            question: 'What is the capital of Pakistan ?',
            options: ['Lahore', 'Islamabad', 'Karachi', 'Peshawar'],
            answer: 'Islamabad',
        },
        {
            question: 'What is 2 + 3?',
            options: ['3', '4', '5', '6'],
            answer: '5npm ',
        },
    ];

    const handleQuizSubmit = (answers) => {
        let score = 0;
        answers.forEach((answer, index) => {
            if (answer === questions[index].answer) {
                score += 1;
            }
        });
        setQuizScore(score);
        setProgress(progress + 50);
        if (progress + 50 === 100) {
            setCertificate(true);
        }
    };

    const handleCompleteCourse = () => {
        setProgress(100);
        setCertificate(true);
    };
    return (
        <div className="App">
            <h1>Interactive Learning Platform</h1>

         
            <section>
                <h2>Video Lecture</h2>
                <ReactPlayer url={videoUrl} controls onEnded={handleCompleteCourse} />
            </section>

          
            <section>
                <h2>Quiz</h2>
                {questions.map((question, index) => (
                    <div key={index}>
                        <h3>{question.question}</h3>
                        {question.options.map((option, idx) => (
                            <div key={idx}>
                                <input
                                    type="radio"
                                    id={`q${index}o${idx}`}
                                    name={`q${index}`}
                                    value={option}
                                />
                                <label htmlFor={`q${index}o${idx}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                ))}
                <button
                    onClick={() => {
                        const answers = questions.map((_, index) =>
                            document.querySelector(`input[name="q${index}"]:checked`)
                                ? document.querySelector(`input[name="q${index}"]:checked`).value
                                : ''
                        );
                        handleQuizSubmit(answers);
                    }}
                >
                    Submit Quiz
                </button>
                {quizScore !== null && <p>Your score: {quizScore} / {questions.length}</p>}
            </section>

            <section>
                <h2>Progress</h2>
                <p>Course Progress: {progress}%</p>
                {certificate && (
                    <div>
                        <h3>Congratulations! You've completed the course.</h3>
                        <button onClick={() => alert('Certificate Generated!')}>
                            Download Certificate
                        </button>
                    </div>
                )}
            </section>
            <style>{
                `.App {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1, h2, h3 {
  color: #333;
}

button {
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

section {
  margin-bottom: 40px;
}
`
             }
            </style>
        </div>

    )
}

export default SecondTask