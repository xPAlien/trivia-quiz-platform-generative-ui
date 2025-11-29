import React, { useState } from 'react';
import { FaPlus, FaTrash, FaSave } from 'react-icons/fa';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import './CreateQuiz.css';

const CreateQuiz = () => {
    const [quizData, setQuizData] = useState({
        title: '',
        description: '',
        category: 'general',
        questions: [
            {
                questionText: '',
                answers: [
                    { text: '', isCorrect: false },
                    { text: '', isCorrect: false },
                    { text: '', isCorrect: false },
                    { text: '', isCorrect: false },
                ]
            }
        ]
    });

    const handleQuizInfoChange = (e) => {
        const { name, value } = e.target;
        setQuizData({ ...quizData, [name]: value });
    };

    const handleQuestionChange = (index, value) => {
        const newQuestions = [...quizData.questions];
        newQuestions[index].questionText = value;
        setQuizData({ ...quizData, questions: newQuestions });
    };

    const handleAnswerChange = (qIndex, aIndex, value) => {
        const newQuestions = [...quizData.questions];
        newQuestions[qIndex].answers[aIndex].text = value;
        setQuizData({ ...quizData, questions: newQuestions });
    };

    const handleCorrectAnswerChange = (qIndex, aIndex) => {
        const newQuestions = [...quizData.questions];
        newQuestions[qIndex].answers.forEach((ans, idx) => {
            ans.isCorrect = idx === aIndex;
        });
        setQuizData({ ...quizData, questions: newQuestions });
    };

    const addQuestion = () => {
        setQuizData({
            ...quizData,
            questions: [
                ...quizData.questions,
                {
                    questionText: '',
                    answers: [
                        { text: '', isCorrect: false },
                        { text: '', isCorrect: false },
                        { text: '', isCorrect: false },
                        { text: '', isCorrect: false },
                    ]
                }
            ]
        });
    };

    const removeQuestion = (index) => {
        if (quizData.questions.length === 1) return;
        const newQuestions = quizData.questions.filter((_, idx) => idx !== index);
        setQuizData({ ...quizData, questions: newQuestions });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Quiz Data:', quizData);
        alert('Quiz Created! (Check console for data)');
    };

    return (
        <div className="create-quiz-page container">
            <div className="page-header">
                <h1>Create a Quiz</h1>
                <p>Share your knowledge with the world.</p>
            </div>

            <form onSubmit={handleSubmit} className="create-quiz-form">
                <Card className="quiz-info-card">
                    <h2>Quiz Details</h2>
                    <Input
                        label="Quiz Title"
                        placeholder="e.g., The Ultimate History Quiz"
                        name="title"
                        value={quizData.title}
                        onChange={handleQuizInfoChange}
                        required
                    />
                    <div className="input-wrapper">
                        <label className="input-label">Description</label>
                        <textarea
                            className="input-field textarea-field"
                            placeholder="Briefly describe your quiz..."
                            name="description"
                            value={quizData.description}
                            onChange={handleQuizInfoChange}
                            rows="3"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label">Category</label>
                        <select
                            className="input-field select-field"
                            name="category"
                            value={quizData.category}
                            onChange={handleQuizInfoChange}
                        >
                            <option value="general">General Knowledge</option>
                            <option value="science">Science</option>
                            <option value="history">History</option>
                            <option value="movies">Movies</option>
                            <option value="music">Music</option>
                        </select>
                    </div>
                </Card>

                <div className="questions-list">
                    {quizData.questions.map((question, qIndex) => (
                        <Card key={qIndex} className="question-editor-card">
                            <div className="question-header">
                                <h3>Question {qIndex + 1}</h3>
                                {quizData.questions.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeQuestion(qIndex)}
                                        className="delete-btn"
                                    >
                                        <FaTrash />
                                    </button>
                                )}
                            </div>

                            <Input
                                label="Question Text"
                                placeholder="Type your question here..."
                                value={question.questionText}
                                onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                                required
                            />

                            <div className="answers-editor">
                                <label className="input-label">Answers (Select the correct one)</label>
                                {question.answers.map((answer, aIndex) => (
                                    <div key={aIndex} className="answer-row">
                                        <input
                                            type="radio"
                                            name={`correct-${qIndex}`}
                                            checked={answer.isCorrect}
                                            onChange={() => handleCorrectAnswerChange(qIndex, aIndex)}
                                            required
                                        />
                                        <Input
                                            placeholder={`Option ${aIndex + 1}`}
                                            value={answer.text}
                                            onChange={(e) => handleAnswerChange(qIndex, aIndex, e.target.value)}
                                            className="flex-grow"
                                            required
                                        />
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="form-actions">
                    <Button type="button" onClick={addQuestion} variant="outline">
                        <FaPlus className="icon-sm" /> Add Question
                    </Button>
                    <Button type="submit" variant="primary">
                        <FaSave className="icon-sm" /> Publish Quiz
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreateQuiz;
