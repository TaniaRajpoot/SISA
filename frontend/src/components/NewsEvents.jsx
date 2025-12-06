import React from 'react';
import '../styles/NewsEvents.css';

const NewsEvents = () => {
  const newsData = [
    {
      id: 1,
      category: 'FINANCE',
      title: 'when deunkno printer took galley of scrambled',
      author: 'Eduvalt',
      date: 'June 22, 2023',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
    },
    {
      id: 2,
      category: 'BUSINESS',
      title: 'Full Stack GraphQL With Next.js And Vercel',
      author: 'Eduvalt',
      date: 'June 22, 2023',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'
    },
    {
      id: 3,
      category: 'DATA SCIENCE',
      title: 'What Leonardo Teach us About Web Design',
      author: 'Eduvalt',
      date: 'June 22, 2023',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80'
    }
  ];

  return (
    <section className="news-events-section">
      <div className="news-container">
        <p className="section-subtitle">Always Smart To Hear News</p>
        <h2 className="section-title">
          Latest <span className="highlight">News</span> & Events
        </h2>
        <p className="section-description">
          Receive huge benefits with our lifetime Plumbing Receive huge benefits with our<br />
          lifetime Plumbing email address will be shown
        </p>

        <div className="news-grid">
          {newsData.map((news) => (
            <div key={news.id} className="news-card">
              <div className="card-image-wrapper">
                <img src={news.image} alt={news.title} className="card-image" />
                <div className="image-overlay"></div>
              </div>
              <div className="card-content">
                <span className="card-category">{news.category}</span>
                <h3 className="card-title">{news.title}</h3>
                <div className="card-meta">
                  <span className="card-author">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="currentColor"/>
                    </svg>
                    By {news.author}
                  </span>
                  <span className="card-date">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12.6667 1.33333H12V0H10.6667V1.33333H5.33333V0H4V1.33333H3.33333C2.59333 1.33333 2.00667 1.93333 2.00667 2.66667L2 14C2 14.7333 2.59333 15.3333 3.33333 15.3333H12.6667C13.4 15.3333 14 14.7333 14 14V2.66667C14 1.93333 13.4 1.33333 12.6667 1.33333ZM12.6667 14H3.33333V5.33333H12.6667V14Z" fill="currentColor"/>
                    </svg>
                    {news.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;