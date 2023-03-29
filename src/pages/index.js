// Step 1: Import React
import * as React from 'react';
import { Link } from 'gatsby';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to='/about'>About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/lLfCvi6KVok'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>
      <h4>Vimeo</h4>
      <iframe
        src='https://player.vimeo.com/video/198661221?h=37f11c0160&title=0&byline=0&portrait=0'
        width='640'
        height='360'
        frameborder='0'
        allow='autoplay; fullscreen; picture-in-picture'
        allowfullscreen
      ></iframe>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
