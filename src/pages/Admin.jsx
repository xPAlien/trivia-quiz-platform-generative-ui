import React from 'react';
import { FaUsers, FaQuestionCircle, FaFlag, FaChartLine, FaTrash, FaEdit } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';
import './Admin.css';

const Admin = () => {
    const stats = [
        { label: 'Total Users', value: '12,450', icon: <FaUsers />, color: 'text-indigo-400' },
        { label: 'Total Quizzes', value: '3,280', icon: <FaQuestionCircle />, color: 'text-teal-400' },
        { label: 'Active Reports', value: '15', icon: <FaFlag />, color: 'text-red-400' },
        { label: 'Daily Plays', value: '45.2k', icon: <FaChartLine />, color: 'text-green-400' },
    ];

    const reportedQuizzes = [
        { id: 1, title: 'Inappropriate Content Quiz', author: 'BadUser123', reason: 'Offensive language', date: '2024-03-15' },
        { id: 2, title: 'Spam Quiz 9000', author: 'SpammerX', reason: 'Spam content', date: '2024-03-14' },
        { id: 3, title: 'Fake News Trivia', author: 'TrollMaster', reason: 'Misinformation', date: '2024-03-13' },
    ];

    return (
        <div className="admin-page container">
            <div className="page-header">
                <h1>Admin Console</h1>
                <p>Manage users, content, and platform health.</p>
            </div>

            <div className="admin-stats-grid">
                {stats.map((stat, index) => (
                    <Card key={index} className="admin-stat-card">
                        <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
                        <div className="stat-info">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="admin-content-grid">
                <Card className="reported-content-card">
                    <div className="card-header">
                        <h3>Reported Content</h3>
                        <Button variant="ghost" size="sm">View All</Button>
                    </div>
                    <div className="report-list">
                        {reportedQuizzes.map((report) => (
                            <div key={report.id} className="report-item">
                                <div className="report-details">
                                    <h4>{report.title}</h4>
                                    <p>By {report.author} • {report.date}</p>
                                    <span className="report-reason">Reason: {report.reason}</span>
                                </div>
                                <div className="report-actions">
                                    <Button variant="outline" size="sm" className="action-btn">
                                        <FaEdit />
                                    </Button>
                                    <Button variant="danger" size="sm" className="action-btn">
                                        <FaTrash />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="system-health-card">
                    <h3>System Health</h3>
                    <div className="health-metrics">
                        <div className="metric-item">
                            <div className="metric-header">
                                <span>Server Load</span>
                                <span className="metric-value ok">24%</span>
                            </div>
                            <div className="metric-bar">
                                <div className="metric-fill" style={{ width: '24%', backgroundColor: '#22c55e' }}></div>
                            </div>
                        </div>
                        <div className="metric-item">
                            <div className="metric-header">
                                <span>Database Usage</span>
                                <span className="metric-value warn">68%</span>
                            </div>
                            <div className="metric-bar">
                                <div className="metric-fill" style={{ width: '68%', backgroundColor: '#fbbf24' }}></div>
                            </div>
                        </div>
                        <div className="metric-item">
                            <div className="metric-header">
                                <span>Memory Usage</span>
                                <span className="metric-value ok">45%</span>
                            </div>
                            <div className="metric-bar">
                                <div className="metric-fill" style={{ width: '45%', backgroundColor: '#22c55e' }}></div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Admin;
