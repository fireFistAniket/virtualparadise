import { useState, useEffect } from "react";

function useFetch(url, body = null) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only proceed if url is not null
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const options = {
          method: body ? "POST" : "GET",
          headers: {
            "Content-Type": "application/json",
            // Additional headers can go here if needed
          },
          body: body ? JSON.stringify({ query: body }) : null,
        };

        const response = await fetch(url, options);
        const responseData = await response.json();

        setData(responseData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, body]);

  return { data, error, loading };
}

export default useFetch;
