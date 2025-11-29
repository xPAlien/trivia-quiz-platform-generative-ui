import React, { useState } from 'react';
import { FaTrophy, FaMedal, FaCrown } from 'react-icons/fa';
import Card from '../components/Card';
import './Leaderboard.css';

const Leaderboard = () => {
    const [timeframe, setTimeframe] = useState('weekly');

    const leaderboardData = [
        { rank: 1, name: 'QuizMaster99', score: 15420, quizzes: 142, avatar: '👑' },
        { rank: 2, name: 'Brainiac_Jane', score: 14850, quizzes: 138, avatar: '🧠' },
        { rank: 3, name: 'TriviaKing', score: 13200, quizzes: 125, avatar: '🦁' },
        { rank: 4, name: 'SmartyPants', score: 12100, quizzes: 110, avatar: '🤓' },
        { rank: 5, name: 'TheProfessor', score: 11500, quizzes: 105, avatar: '🎓' },
        { rank: 6, name: 'KnowItAll', score: 10800, quizzes: 98, avatar: '📚' },
        { rank: 7, name: 'QuizWizard', score: 10200, quizzes: 92, avatar: '🧙‍♂️' },
        { rank: 8, name: 'FactFinder', score: 9800, quizzes: 88, avatar: '🔍' },
        { rank: 9, name: 'CuriousMind', score: 9500, quizzes: 85, avatar: '💡' },
        { rank: 10, name: 'TopScorer', score: 9200, quizzes: 80, avatar: '⭐' },
    ];

    const getRankIcon = (rank) => {
        switch (rank) {
            case 1: return <FaCrown className="rank-icon gold" />;
            case 2: return <FaMedal className="rank-icon silver" />;
            case 3: return <FaMedal className="rank-icon bronze" />;
            default: return <span className="rank-number">{rank}</span>;
        }
    };

    return (
        <div className="leaderboard-page container">
            <div className="page-header">
                <h1>Global Leaderboard</h1>
                <p>See who's dominating the trivia world.</p>
            </div>

            <div className="leaderboard-controls">
                <button
                    className={`control-btn ${timeframe === 'weekly' ? 'active' : ''}`}
                    onClick={() => setTimeframe('weekly')}
                >
                    Weekly
                </button>
                <button
                    className={`control-btn ${timeframe === 'monthly' ? 'active' : ''}`}
                    onClick={() => setTimeframe('monthly')}
                >
                    Monthly
                </button>
                <button
                    className={`control-btn ${timeframe === 'alltime' ? 'active' : ''}`}
                    onClick={() => setTimeframe('alltime')}
                >
                    All Time
                </button>
            </div>

            <Card className="leaderboard-card">
                <div className="leaderboard-table-header">
                    <div className="col-rank">Rank</div>
                    <div className="col-player">Player</div>
                    <div className="col-quizzes">Quizzes</div>
                    <div className="col-score">Score</div>
                </div>

                <div className="leaderboard-list">
                    {leaderboardData.map((player) => (
                        <div key={player.rank} className={`leaderboard-row ${player.rank <= 3 ? 'top-rank' : ''}`}>
                            <div className="col-rank">
                                {getRankIcon(player.rank)}
                            </div>
                            <div className="col-player">
                                <div className="player-avatar">{player.avatar}</div>
                                <span className="player-name">{player.name}</span>
                                {player.rank === 1 && <span className="status-badge">Champion</span>}
                            </div>
                            <div className="col-quizzes">{player.quizzes}</div>
                            <div className="col-score">{player.score.toLocaleString()}</div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Leaderboard;
