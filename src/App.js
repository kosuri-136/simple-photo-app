import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css'; // You can create this CSS file to style the carousel if needed

const images = [
  {
    url: 'https://img.particlenews.com/image.php?type=thumbnail_580x000&url=3ydq29_0kNXr9q800',
    thumbnailUrl: 'https://img.particlenews.com/image.php?type=thumbnail_580x000&url=3ydq29_0kNXr9q800',
  },
  {
    url: 'https://www.telegraph.co.uk/content/dam/films/2020/02/07/TELEMMGLPICT000224006835_trans_NvBQzQNjv4BqVnGZDHLVbaDWtLqzwQh5-XkyztDRjf0dUW_myY0VgWI.jpeg?imwidth=960',
    thumbnailUrl: 'https://www.telegraph.co.uk/content/dam/films/2020/02/07/TELEMMGLPICT000224006835_trans_NvBQzQNjv4BqVnGZDHLVbaDWtLqzwQh5-XkyztDRjf0dUW_myY0VgWI.jpeg?imwidth=960',
  },
  {
    url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17428/production/_110827259_tomandjerry.jpg.webp',
    thumbnailUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17428/production/_110827259_tomandjerry.jpg.webp',
  },
  {
    url: 'https://static.euronews.com/articles/stories/07/38/86/86/773x435_cmsv2_34816e51-346c-525e-9d16-c92108f88346-7388686.jpg',
    thumbnailUrl: 'https://static.euronews.com/articles/stories/07/38/86/86/773x435_cmsv2_34816e51-346c-525e-9d16-c92108f88346-7388686.jpg',
  },
  // Add more images as needed
];

function App() {
  return (
    <center>
    <div className="carousel-container">
      <Carousel showThumbs={true}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={`Image ${index + 1}`} />
            <p className="legend">Image {index + 1}</p>
          </div>
        ))}
      </Carousel>
    </div>
    </center>
  );
}

export default App;
