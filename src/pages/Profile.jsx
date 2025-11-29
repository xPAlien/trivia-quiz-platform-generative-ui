import React from 'react';
import { FaUser, FaTrophy, FaHistory, FaEdit, FaCog } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';
import './Profile.css';

const Profile = () => {
    const user = {
        name: 'Alex Johnson',
        username: '@quizmaster_alex',
        joinDate: 'Member since Jan 2024',
        level: 12,
        xp: 4500,
        nextLevelXp: 5000,
        stats: {
            quizzesPlayed: 142,
            quizzesCreated: 8,
            totalScore: 15420,
            winRate: '78%',
        },
        achievements: [
            { id: 1, name: 'Early Bird', icon: '🌅', unlocked: true },
            { id: 2, name: 'Ten Streak', icon: '🔥', unlocked: true },
            { id: 3, name: 'Quiz Creator', icon: '✍️', unlocked: true },
            { id: 4, name: 'Champion', icon: '👑', unlocked: false },
        ],
        history: [
            { id: 1, quiz: 'Science & Nature', score: '12/15', date: '2 hours ago' },
            { id: 2, quiz: 'Pop Culture', score: '9/10', date: 'Yesterday' },
            { id: 3, quiz: 'History of Rome', score: '18/20', date: '3 days ago' },
        ]
    };

    return (
        <div className="profile-page container">
            <div className="profile-header">
                <div className="profile-cover"></div>
                <div className="profile-info-container">
                    <div className="profile-avatar">
                        <FaUser />
                    </div>
                    <div className="profile-details">
                        <div className="profile-names">
                            <h1>{user.name}</h1>
                            <span className="username">{user.username}</span>
                        </div>
                        <div className="profile-meta">
                            <span>{user.joinDate}</span>
                            <span className="level-badge">Lvl {user.level}</span>
                        </div>
                    </div>
                    <div className="profile-actions">
                        <Button variant="outline" size="sm">
                            <FaEdit className="icon-sm" /> Edit Profile
                        </Button>
                        <Button variant="ghost" size="sm">
                            <FaCog />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="profile-grid">
                <div className="profile-left">
                    <Card className="stats-card">
                        <h3>Statistics</h3>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-value">{user.stats.quizzesPlayed}</span>
                                <span className="stat-label">Played</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">{user.stats.quizzesCreated}</span>
                                <span className="stat-label">Created</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">{user.stats.totalScore.toLocaleString()}</span>
                                <span className="stat-label">Total Score</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">{user.stats.winRate}</span>
                                <span className="stat-label">Win Rate</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="achievements-card">
                        <h3>Achievements</h3>
                        <div className="achievements-grid">
                            {user.achievements.map((achievement) => (
                                <div key={achievement.id} className={`achievement-item ${achievement.unlocked ? '' : 'locked'}`} title={achievement.name}>
                                    <div className="achievement-icon">{achievement.icon}</div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="profile-right">
                    <Card className="history-card">
                        <h3>Recent Activity</h3>
                        <div className="history-list">
                            {user.history.map((item) => (
                                <div key={item.id} className="history-item">
                                    <div className="history-icon">
                                        <FaHistory />
                                    </div>
                                    <div className="history-details">
                                        <h4>{item.quiz}</h4>
                                        <span className="history-date">{item.date}</span>
                                    </div>
                                    <div className="history-score">{item.score}</div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Profile;
