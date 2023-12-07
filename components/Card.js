
import React from 'react';
import Link from 'next/link';

const Card = ({ id, thumbnail, title }) => {
  return (
    <Link href={`/details/${id}`} passHref>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
