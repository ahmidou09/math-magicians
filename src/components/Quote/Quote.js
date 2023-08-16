import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const category = 'love';
    const apiKey = 'YFsFy9KojEgPBCbeWzF6nw==6qthtK3zADwmr5pz';

    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setQuote(data[0].quote);
        } else {
          setError('No quotes found for the specified category.');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(`Error fetching quote: ${err.message}`);
        setLoading(false);
      });
  }, []);

  return (
    <div className="quote">
      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}
      {quote && !loading && !error ? <p>{quote}</p> : null}
    </div>
  );
};

export default Quote;
