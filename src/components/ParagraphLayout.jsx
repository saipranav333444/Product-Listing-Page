import React from 'react';
import './ParagraphLayout.css'; // Assuming you have a separate CSS file for styles

const ParagraphLayout = () => {
    return (
        <div className="container">
            <p className="paragraph start">Lorem ipsum dolor</p>
            <p className="paragraph center">Lorem ipsum dolor</p>
            <p className="paragraph end">Lorem ipsum dolor</p>
        </div>
    );
};

export default ParagraphLayout;
