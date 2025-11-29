import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaFlask, FaGlobeAmericas, FaFilm, FaMusic, FaGamepad,
    FaHistory, FaCode, FaBook, FaPalette
} from 'react-icons/fa';
import Card from '../components/Card';
import './Categories.css';

const Categories = () => {
    const categories = [
        { id: 'science', name: 'Science', icon: <FaFlask />, color: 'text-indigo-400', count: 42 },
        { id: 'geography', name: 'Geography', icon: <FaGlobeAmericas />, color: 'text-teal-400', count: 35 },
        { id: 'movies', name: 'Movies', icon: <FaFilm />, color: 'text-pink-400', count: 56 },
        { id: 'music', name: 'Music', icon: <FaMusic />, color: 'text-purple-400', count: 28 },
        { id: 'gaming', name: 'Gaming', icon: <FaGamepad />, color: 'text-green-400', count: 64 },
        { id: 'history', name: 'History', icon: <FaHistory />, color: 'text-yellow-400', count: 31 },
        { id: 'tech', name: 'Technology', icon: <FaCode />, color: 'text-blue-400', count: 45 },
        { id: 'literature', name: 'Literature', icon: <FaBook />, color: 'text-red-400', count: 22 },
        { id: 'art', name: 'Art', icon: <FaPalette />, color: 'text-orange-400', count: 18 },
    ];

    return (
        <div className="categories-page container">
            <div className="page-header">
                <h1>Explore Categories</h1>
                <p>Choose a topic to start your trivia journey.</p>
            </div>

            <div className="categories-grid">
                {categories.map((category) => (
                    <Link to={`/category/${category.id}`} key={category.id}>
                        <Card hover className="category-card">
                            <div className={`category-icon ${category.color}`}>
                                {category.icon}
                            </div>
                            <div className="category-info">
                                <h3>{category.name}</h3>
                                <span>{category.count} Quizzes</span>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
