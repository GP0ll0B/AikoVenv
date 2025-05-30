
import React, { useState, useCallback } from 'react';
import { generateAikoVenvResponse } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';

const GeminiInteraction: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) {
      setError('Please enter a question.');
      setResponse('');
      return;
    }

    setIsLoading(true);
    setError('');
    setResponse('');

    try {
      const result = await generateAikoVenvResponse(query);
      setResponse(result);
    } catch (err) {
      const errorMessage = (err instanceof Error) ? err.message : 'An unexpected error occurred.';
      setError(errorMessage);
      setResponse(''); // Clear previous successful response if any
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  return (
    <section id="ai-interaction" className="py-12 sm:py-16 bg-white rounded-xl shadow-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark text-center mb-4">
          Ask AikoVenv's Vision Bot
        </h2>
        <p className="text-secondary text-center mb-8 sm:mb-10 max-w-xl mx-auto">
          Curious about AikoVenv's approach to technology, innovation, or our vision for the future? Ask our AI.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <div>
            <label htmlFor="aiQuery" className="sr-only">Your Question</label>
            <textarea
              id="aiQuery"
              rows={3}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., How does AikoVenv plan to innovate using Google AI?"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-light focus:border-primary-light transition duration-150 ease-in-out resize-none"
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50 transition duration-150 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? <LoadingSpinner /> : 'Ask Vision Bot'}
          </button>
        </form>

        {error && (
          <div className="mt-6 max-w-xl mx-auto p-4 bg-red-100 text-red-700 border border-red-300 rounded-lg text-sm">
            <p className="font-semibold">Error:</p>
            <p>{error}</p>
          </div>
        )}

        {response && !error && (
          <div className="mt-8 max-w-xl mx-auto p-6 bg-sky-50 border border-sky-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-primary-dark mb-3">Vision Bot's Response:</h3>
            <p className="text-secondary whitespace-pre-wrap leading-relaxed">{response}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GeminiInteraction;
