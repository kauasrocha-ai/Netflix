/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const NetflixLogo: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 p-8 z-40">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
        className="w-32 md:w-40 drop-shadow-xl" 
        alt="Netflix"
        id="netflix-logo-img"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
