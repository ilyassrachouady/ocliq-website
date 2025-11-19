import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="animate-pulse">
        <div className="h-16 bg-gray-200"></div>
        <div className="h-96 bg-gray-200"></div>
        <div className="h-64 bg-gray-200 mt-8"></div>
        <div className="h-64 bg-gray-200 mt-8"></div>
        <div className="h-64 bg-gray-200 mt-8"></div>
        <div className="h-64 bg-gray-200 mt-8"></div>
        <div className="h-64 bg-gray-200 mt-8"></div>
        <div className="h-64 bg-gray-200 mt-8"></div>
        <div className="h-64 bg-gray-200 mt-8"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
