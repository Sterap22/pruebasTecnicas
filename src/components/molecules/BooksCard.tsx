import { UILabel } from '../atoms/UILabel';
import { BooksCardProps } from '../../Interfaces/props/BooksCard.props';

export const BooksCard = ({ 
    classCus = '', 
    cover = '', 
    synopsis = '',
    onClickCus = () => {},
  }:BooksCardProps) => {
  return (
    <div className="BooksCard-container" onClick={onClickCus}>
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
