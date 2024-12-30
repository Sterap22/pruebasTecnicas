import React from 'react';
import { UILabel } from '../atoms/UILabel';

export const BooksCard = ({ classCus = '', cover, synopsis}) => {
  return (
    <div className="BooksCard-container">
      <div className={`BooksCard ${classCus}`}>
        {/* Lado frontal con la imagen */}
        <div
          className="BooksCard-front"
          style={{ backgroundImage: `url(${cover})` }}
        ></div>

        {/* Lado trasero con la sinopsis */}
        <div className="BooksCard-back">
          <UILabel tagCus="p">{synopsis}</UILabel>
        </div>
      </div>
    </div>
  );
};
