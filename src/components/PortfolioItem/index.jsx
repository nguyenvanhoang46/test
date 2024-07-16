import React from 'react';

const PortfolioItem = ({ project }) => {
    return (
        <div className="portfolio-item">
            <img src={project.image} alt={project.title} />
            <div className="card">
                <h4>{project.title}</h4>
                <span>{`>`}</span>
            </div>
        </div>
    );
};

export default PortfolioItem;