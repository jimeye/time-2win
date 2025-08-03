'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Redirection vers localhost:3001/index
    window.location.href = 'http://localhost:3001/index';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirection...</h1>
        <p className="text-lg">Vers http://localhost:3001/index</p>
      </div>
    </div>
  );
}
