import { useState } from 'react';
import quotes from './assets/quotes.json';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './App.css';

interface Quote {
  quote: string;
  author: string;
};

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 155);
  const green = Math.floor(Math.random() * 155);
  const blue = Math.floor(Math.random() * 155);

  return `rgb(${red}, ${green}, ${blue})`;
}

const transition = 'all 1s';

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
    <div className="background" style={{ backgroundColor: randomColor, transition }}>
      <div id="quote-box" style={{ backgroundColor: 'white' }}>
        <div className="quote-content" style={{ color: randomColor, transition }}>
          <h2 id="text">
            <FaQuoteLeft size='30' style={{ marginRight: '8' }} />
            {quote.quote}
            <FaQuoteRight size='30' style={{ marginLeft: '8' }} />
            </h2>
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a href="twitter.com/intent/tweet" 
          id="tweet-quote" 
          style={{ 
            backgroundColor: randomColor,
            transition, 
            marginRight: '10px' 
            }}>
              <FaTwitter style={{ color: 'white' }}/>
            </a>
            <button id="new-quote" onClick={changeQuote} style={{ color: 'white', backgroundColor: randomColor, transition }}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App