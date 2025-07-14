import React, { createContext, useState, useEffect } from "react";

export const HeadingContext = createContext();

export const HeadingProvider = ({ children }) => {
  const [heading, setHeading] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHeading = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/heading");
      if (!res.ok) throw new Error("Failed to fetch heading");
      const data = await res.json();
      setHeading(data.heading);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeading();
  }, []);

  return (
    <HeadingContext.Provider value={{ heading, setHeading, fetchHeading, loading, error }}>
      {children}
    </HeadingContext.Provider>
  );
};
