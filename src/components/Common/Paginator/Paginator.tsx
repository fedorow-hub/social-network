import React, {useState} from 'react';

// @ts-ignore
import styles from './Paginator.module.css';

type PropsType = {
    totalItemsCount: number
    pageSize: number
    portionSize?: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, portionSize=10, currentPage, onPageChanged}) => {

  const countPage = Math.ceil(totalItemsCount / pageSize);

  const pages =[];

  for(let i = 1; i <= countPage; i++){
    pages.push(i);
  }

  const portionCount = Math.ceil(countPage / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber-1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.pagination}>
      {portionNumber > 1 &&
                <button onClick={()=>{setPortionNumber(portionNumber-1);}}>Prev</button>
      }
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          return <span className={currentPage === p && styles.selectedPage}
                       key={p.id}
                        onClick={() => {
                          onPageChanged(p);
                        }}><span className={styles.page}>{p}</span></span>;
        })}
      {portionCount > portionNumber &&
                <button onClick={()=>{setPortionNumber(portionNumber+1);}}>Next</button>
      }
    </div>
  );
};

export default Paginator;
