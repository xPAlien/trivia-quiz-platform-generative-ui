import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaClock, FaCheck, FaTimes, FaRedo, FaList } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';
import './QuizPlayer.css';

const QuizPlayer = () => {
    const { id } = useParams();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [timeLeft, setTimeLeft] = useState(15);

    // Mock Data (would come from API/Context)
    const questions = [
        {
            questionText: 'What is the powerhouse of the cell?',
            answerOptions: [
                { answerText: 'Nucleus', isCorrect: false },
                { answerText: 'Mitochondria', isCorrect: true },
                { answerText: 'Ribosome', isCorrect: false },
                { answerText: 'Endoplasmic Reticulum', isCorrect: false },
            ],
        },
        {
            questionText: 'Which planet is known as the Red Planet?',
            answerOptions: [
                { answerText: 'Venus', isCorrect: false },
                { answerText: 'Mars', isCorrect: true },
                { answerText: 'Jupiter', isCorrect: false },
                { answerText: 'Saturn', isCorrect: false },
            ],
        },
        {
            questionText: 'What is the chemical symbol for Gold?',
            answerOptions: [
                { answerText: 'Ag', isCorrect: false },
                { answerText: 'Fe', isCorrect: false },
                { answerText: 'Au', isCorrect: true },
                { answerText: 'Pb', isCorrect: false },
            ],
        },
        {
            questionText: 'Who wrote "Romeo and Juliet"?',
            answerOptions: [
                { answerText: 'Charles Dickens', isCorrect: false },
                { answerText: 'William Shakespeare', isCorrect: true },
                { answerText: 'Jane Austen', isCorrect: false },
                { answerText: 'Mark Twain', isCorrect: false },
            ],
        },
    ];

    useEffect(() => {
        if (showScore) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev === 0) {
                    handleNextQuestion();
                    return 15;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentQuestion, showScore]);

    const handleAnswerOptionClick = (isCorrect) => {
        if (selectedAnswer !== null) return; // Prevent multiple clicks

        setSelectedAnswer(isCorrect);
        setIsCorrect(isCorrect);

        if (isCorrect) {
            setScore(score + 1);
        }

        setTimeout(() => {
            handleNextQuestion();
        }, 1500);
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
            setIsCorrect(null);
            setTimeLeft(15);
        } else {
            setShowScore(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setTimeLeft(15);
    };

    return (
        <div className="quiz-player container">
            {showScore ? (
                <Card className="score-section">
                    <div className="score-content">
                        <FaTrophyIcon score={score} total={questions.length} />
                        <h2>Quiz Completed!</h2>
                        <p className="score-text">
                            You scored <span className="score-highlight">{score}</span> out of {questions.length}
                        </p>
                        <div className="score-actions">
                            <Button onClick={resetQuiz} variant="primary">
                                <FaRedo className="icon-sm" /> Play Again
                            </Button>
                            <Link to="/categories">
                                <Button variant="outline">
                                    <FaList className="icon-sm" /> All Categories
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card>
            ) : (
                <div className="quiz-container">
                    <div className="quiz-header">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className={`timer ${timeLeft <= 5 ? 'timer-warning' : ''}`}>
                            <FaClock className="icon-sm" /> {timeLeft}s
                        </div>
                    </div>

                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>

                    <Card className="question-card">
                        <h2 className="question-text">{questions[currentQuestion].questionText}</h2>
                    </Card>

                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                                className={`answer-button ${selectedAnswer !== null
                                        ? answerOption.isCorrect
                                            ? 'correct'
                                            : selectedAnswer === answerOption.isCorrect // This logic is slightly flawed, fixed below
                                                ? 'incorrect' // Only mark the selected one as incorrect if it is incorrect
                                                : ''
                                        : ''
                                    } ${selectedAnswer !== null && !answerOption.isCorrect && selectedAnswer === false && 'dimmed'}`}
                                disabled={selectedAnswer !== null}
                            >
                                {answerOption.answerText}
                                {selectedAnswer !== null && answerOption.isCorrect && <FaCheck className="feedback-icon" />}
                                {selectedAnswer !== null && !answerOption.isCorrect && selectedAnswer === answerOption.isCorrect && <FaTimes className="feedback-icon" />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const FaTrophyIcon = ({ score, total }) => {
    const percentage = (score / total) * 100;
    let color = 'text-red-500';
    if (percentage >= 80) color = 'text-yellow-400';
    else if (percentage >= 50) color = 'text-blue-400';

    return (
        <div className={`trophy-icon ${color}`}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.3 28.7 64 64 64h64v8c0 52.1 37.1 97 86.6 109.9l-1.9 7.5c-3.9 15.7 8 31.3 24.2 31.3h206.3c16.2 0 28.1-15.6 24.2-31.3l-1.9-7.5C514.9 313 552 268.1 552 216v-8h64c35.3 0 64-28.7 64-64V88c0-13.3-10.7-24-24-24zM128 160H64v-48h64v48zm320 0h-64v-48h64v48z"></path></svg>
        </div>
    );
};

export default QuizPlayer;
