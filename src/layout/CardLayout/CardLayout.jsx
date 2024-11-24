import React from 'react';
import Card from '../../components/Card/Card'; 

const CardLayout = () => {
  return (
    <section className="card_section">
      <div className="card_wrapper">
        <Card 
          title="Background"
          to="/about" 
          emoji="📜"
          pillText="Start Here"
        />
        <Card 
          title="Projects"
          to="/portfolio" 
          emoji="📂"
          pillText="Featured"
        />
        <Card 
          title="Thoughts"
          to="/blog"  
          emoji="📝"
          pillText="Latest"
        />
        <Card 
          title="Resources"
          to="/portfolio" 
          emoji="💼"
          pillText="Highlights"
        />
      </div>
    </section>
  );
};

export default CardLayout;



