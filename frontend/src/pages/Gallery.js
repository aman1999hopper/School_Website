import React, { useState } from 'react';
import './Gallery.css'; // Import CSS for styling

const galleryItems = [
  {
    type: 'Event',
    date: '2024-05-01',
    title: 'Sports Day',
    mediaUrl: 'https://media.istockphoto.com/id/1178822090/vector/sports-day-poster-invitation-vector-illustration-trophy-with-sport-equipments-on-green.jpg?s=612x612&w=0&k=20&c=ezC9u8ObKLW10BSzrx6NKRURA5vvDZywebLdspStyqo=',
    mediaType: 'image', // 'image' or 'video'
    description: 'Students participating in various sports events.',
  },
  {
    type: 'Infrastructure',
    date: '2024-03-15',
    title: 'New Science Lab',
    mediaUrl: 'https://media.istockphoto.com/id/1354171893/photo/modern-medical-research-laboratory-scientific-lab-drug-engineering-center-full-of-high-tech.jpg?s=612x612&w=0&k=20&c=_j4NTj72PM1_4Q404hFwr4QiEE3kH7fOxzWaQzUv3jM=',
    mediaType: 'image',
    description: 'Students presenting their science projects',
  },
  {
    type: 'Event',
    date: '2023-12-20',
    title: 'Annual Cultural Fest',
    mediaUrl: 'https://media.istockphoto.com/id/1208614802/vector/summer-fest-concept-of-live-music-festival-jazz-and-rock-food-street-fair-family-fair-event.jpg?s=612x612&w=0&k=20&c=xLs8l1Ov7BQIMUUlNU8dE_bo1JHbBEOnBh9qGfIBHpA=',
    mediaType: 'image',
    description: 'Students performing in the cultural fest..',
  },
  {
    type: 'Activity',
    date: '2023-11-10',
    title: 'Art Exhibition',
    mediaUrl: 'https://media.istockphoto.com/id/1530807718/photo/young-latin-woman-artist-selling-her-art-at-outdoor-market.jpg?s=612x612&w=0&k=20&c=c9tPwgBGWB96GCLLQ7uhX0vNE0iyiWP_I0R_znpI8R0=',
    mediaType: 'image',
    description: 'Students reading and studying in the school library.',
  },
  // Add more gallery items as needed
];

function Gallery() {
  const [filter, setFilter] = useState({ type: 'All', date: 'All' });

  const filteredItems = galleryItems.filter(item => {
    const matchesType = filter.type === 'All' || item.type === filter.type;
    const matchesDate = filter.date === 'All' || item.date === filter.date;
    return matchesType && matchesDate;
  });

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1>Gallery</h1>
        <p>Explore photos and videos from our various school events, activities, and facilities.</p>

        <div className="gallery-filters">
          <select onChange={(e) => setFilter({ ...filter, type: e.target.value })}>
            <option value="All">All Types</option>
            <option value="Event">Event</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Activity">Activity</option>
          </select>
          <select onChange={(e) => setFilter({ ...filter, date: e.target.value })}>
            <option value="All">All Dates</option>
            <option value="2024-05-01">May 2024</option>
            <option value="2024-03-15">March 2024</option>
            <option value="2023-12-20">December 2023</option>
            <option value="2023-11-10">November 2023</option>
            {/* Add more date options as needed */}
          </select>
        </div>
      </header>

      <div className="gallery-grid">
        {filteredItems.map((item, index) => (
          <div key={index} className="gallery-item">
            {item.mediaType === 'image' ? (
              <img src={item.mediaUrl} alt={item.title} />
            ) : (
              <video controls src={item.mediaUrl}></video>
            )}
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><strong>Date:</strong> {item.date}</p>
              <p><strong>Type:</strong> {item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
