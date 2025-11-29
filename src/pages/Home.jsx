import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaFire, FaBrain, FaRocket } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
    const featuredQuizzes = [
        {
            id: 1,
            title: 'Science & Nature',
            description: 'Test your knowledge of the natural world, from physics to biology.',
            questions: 15,
            plays: '1.2k',
            icon: <FaBrain />,
            color: 'text-indigo-400'
        },
        {
            id: 2,
            title: 'Pop Culture',
            description: 'Movies, music, and celebrities. How well do you know the stars?',
            questions: 10,
            plays: '3.5k',
            icon: <FaFire />,
            color: 'text-pink-400'
        },
        {
            id: 3,
            title: 'Space Exploration',
            description: 'Journey through the cosmos and answer questions about the universe.',
            questions: 20,
            plays: '850',
            icon: <FaRocket />,
            color: 'text-teal-400'
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-content">
                    <h1 className="hero-title">
                        Master the Art of <span className="text-gradient">Trivia</span>
                    </h1>
                    <p className="hero-subtitle">
                        Join thousands of players, compete in daily challenges, and climb the global leaderboard.
                    </p>
                    <div className="hero-actions">
                        <Link to="/categories">
                            <Button variant="primary" size="lg">
                                <FaPlay className="icon-sm" /> Start Playing
                            </Button>
                        </Link>
                        <Link to="/create">
                            <Button variant="outline" size="lg">
                                Create Quiz
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="hero-background-glow"></div>
            </section>

            {/* Featured Quizzes */}
            <section className="featured-section container">
                <div className="section-header">
                    <h2>Featured Quizzes</h2>
                    <Link to="/categories" className="view-all-link">View All</Link>
                </div>

                <div className="quiz-grid">
                    {featuredQuizzes.map((quiz) => (
                        <Link to={`/quiz/${quiz.id}`} key={quiz.id}>
                            <Card hover className="quiz-card">
                                <div className={`quiz-icon ${quiz.color}`}>
                                    {quiz.icon}
                                </div>
                                <h3 className="quiz-title">{quiz.title}</h3>
                                <p className="quiz-description">{quiz.description}</p>
                                <div className="quiz-meta">
                                    <span>{quiz.questions} Questions</span>
                                    <span>{quiz.plays} Plays</span>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section container">
                <div className="cta-card">
                    <div className="cta-content">
                        <h2>Ready to challenge your friends?</h2>
                        <p>Create your own custom quizzes and share them with the world.</p>
                        <Link to="/create">
                            <Button variant="secondary" size="lg">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
