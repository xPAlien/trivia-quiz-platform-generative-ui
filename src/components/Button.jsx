import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    to,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/30',
        secondary: 'bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-500/30',
        outline: 'border-2 border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white bg-transparent',
        ghost: 'text-slate-400 hover:text-white hover:bg-slate-800',
        danger: 'bg-red-500 hover:bg-red-600 text-white',
    };

    const sizes = {
        sm: 'text-sm px-3 py-1.5 rounded-md',
        md: 'text-base px-5 py-2.5 rounded-lg',
        lg: 'text-lg px-8 py-3 rounded-xl',
    };

    // Map custom CSS variables if Tailwind is not used (simulating Tailwind classes with inline styles or CSS modules would be better, but for now using style prop for dynamic values if needed, or just relying on global CSS classes if I were to define them. 
    // However, since I'm using vanilla CSS with variables, I should probably use a CSS module or BEM.
    // Given the instructions "Use Vanilla CSS", I should avoid Tailwind classes in the className unless I set up Tailwind.
    // The user didn't ask for Tailwind, but I see I used Tailwind-like classes in the string above.
    // I should rewrite this to use standard CSS classes defined in a CSS file or inline styles.
    // Wait, the prompt said "Avoid using TailwindCSS unless the USER explicitly requests it".
    // I made a mistake in the thought process above thinking in Tailwind.
    // I will rewrite the component to use a CSS file `Button.css` or styled-components approach (but I don't have styled-components installed).
    // I'll use CSS Modules or just a plain CSS file for the component.
    // Let's use a plain CSS file `src/components/Button.css` and import it.

    return (
        to ? (
            <Link
                to={to}
                className={`btn btn-${variant} btn-${size} ${className}`}
                {...props}
            >
                {children}
            </Link>
        ) : (
            <button
                className={`btn btn-${variant} btn-${size} ${className}`}
                {...props}
            >
                {children}
            </button>
        )
    );
};

export default Button;
