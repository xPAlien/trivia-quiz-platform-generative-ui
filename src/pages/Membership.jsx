import React from 'react';
import { FaCheck, FaTimes, FaStar } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';
import './Membership.css';

const Membership = () => {
    const tiers = [
        {
            name: 'Free',
            price: '$0',
            period: '/month',
            description: 'Perfect for casual players.',
            features: [
                { text: 'Access to 100+ quizzes', included: true },
                { text: 'Create 1 quiz per week', included: true },
                { text: 'Basic stats', included: true },
                { text: 'Ad-supported experience', included: true },
                { text: 'Exclusive tournaments', included: false },
                { text: 'Detailed analytics', included: false },
            ],
            cta: 'Current Plan',
            variant: 'outline',
            popular: false,
        },
        {
            name: 'Pro',
            price: '$4.99',
            period: '/month',
            description: 'For the serious trivia enthusiast.',
            features: [
                { text: 'Unlimited quizzes', included: true },
                { text: 'Create unlimited quizzes', included: true },
                { text: 'Advanced stats & history', included: true },
                { text: 'Ad-free experience', included: true },
                { text: 'Exclusive tournaments', included: true },
                { text: 'Detailed analytics', included: false },
            ],
            cta: 'Upgrade to Pro',
            variant: 'primary',
            popular: true,
        },
        {
            name: 'Elite',
            price: '$9.99',
            period: '/month',
            description: 'The ultimate experience for masters.',
            features: [
                { text: 'Everything in Pro', included: true },
                { text: 'Priority support', included: true },
                { text: 'Early access to new features', included: true },
                { text: 'Custom profile badges', included: true },
                { text: 'Host private tournaments', included: true },
                { text: 'Detailed analytics', included: true },
            ],
            cta: 'Get Elite',
            variant: 'secondary',
            popular: false,
        },
    ];

    return (
        <div className="membership-page container">
            <div className="page-header">
                <h1>Upgrade Your Experience</h1>
                <p>Unlock premium features and dominate the leaderboards.</p>
            </div>

            <div className="pricing-grid">
                {tiers.map((tier, index) => (
                    <Card key={index} className={`pricing-card ${tier.popular ? 'popular' : ''}`}>
                        {tier.popular && (
                            <div className="popular-badge">
                                <FaStar className="icon-xs" /> Most Popular
                            </div>
                        )}
                        <div className="tier-header">
                            <h3>{tier.name}</h3>
                            <div className="price">
                                <span className="amount">{tier.price}</span>
                                <span className="period">{tier.period}</span>
                            </div>
                            <p className="description">{tier.description}</p>
                        </div>

                        <div className="features-list">
                            {tier.features.map((feature, idx) => (
                                <div key={idx} className={`feature-item ${feature.included ? '' : 'excluded'}`}>
                                    {feature.included ? <FaCheck className="check-icon" /> : <FaTimes className="times-icon" />}
                                    <span>{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <Button variant={tier.variant} className="w-full">
                            {tier.cta}
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Membership;
