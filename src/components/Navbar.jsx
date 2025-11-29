import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBrain, FaTrophy, FaPlus, FaUser, FaList } from 'react-icons/fa';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="navbar-logo">
                    <FaBrain className="logo-icon" />
                    <span className="logo-text">QuizMaster</span>
                </Link>

                <div className="navbar-links">
                    <Link to="/" className={isActive('/')}>Home</Link>
                    <Link to="/categories" className={isActive('/categories')}>Categories</Link>
                    <Link to="/leaderboard" className={isActive('/leaderboard')}>Leaderboard</Link>
                </div>

                <div className="navbar-actions">
                    <Link to="/create">
                        <Button variant="primary" size="sm">
                            <FaPlus className="icon-sm" /> Create
                        </Button>
                    </Link>
                    <Link to="/profile" className="profile-link">
                        <div className="avatar-placeholder">
                            <FaUser />
                        </div>
                    </Link>
                </div>

                {/* Mobile Menu Button (simplified for now) */}
                <button className="mobile-menu-btn">
                    <FaList />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
