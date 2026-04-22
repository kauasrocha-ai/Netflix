/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const POSTERS = [
  'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=400&auto=format&fit=crop', // Sci-fi
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&auto=format&fit=crop', // Cinema
  'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=400&auto=format&fit=crop', // Drama
  'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=400&auto=format&fit=crop', // Classic
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&auto=format&fit=crop', // Film
  'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=400&auto=format&fit=crop', // Tech
  'https://images.unsplash.com/photo-1535016120720-40c646bebbfc?q=80&w=400&auto=format&fit=crop', // Action
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=400&auto=format&fit=crop', // Retro
  'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=400&auto=format&fit=crop', // Horror
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=400&auto=format&fit=crop', // Theatre
];

export const BackgroundMosaic: React.FC = () => {
  // Triple the posters to ensure we fill the screen and have variety
  const allPosters = [...POSTERS, ...POSTERS, ...POSTERS, ...POSTERS, ...POSTERS, ...POSTERS];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-50 bg-black">
      <div 
        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 w-[110%] h-[110%] -translate-x-4 -translate-y-4 blur-[3px] scale-[1.1]"
      >
        {allPosters.map((url, i) => (
          <div 
            key={i} 
            className="aspect-[2/3] w-full overflow-hidden rounded-[4px] bg-neutral-900"
          >
            <img 
              src={url} 
              alt={`Poster ${i}`} 
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
    </div>
  );
};
