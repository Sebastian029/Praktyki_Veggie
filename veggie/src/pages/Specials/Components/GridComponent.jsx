import React, { useEffect, useRef, useState } from 'react';
import styles from '../index.module.css';
import items from "./items.json";
import image1 from "../../../assets/5.png";
import image2 from "../../../assets/6.png";
import image3 from "../../../assets/7.png";
import image4 from "../../../assets/8.png";
import image5 from "../../../assets/9.png";
import image6 from "../../../assets/10.png";

function GridComponent() {
  const gridRef = useRef(null);
  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
    const calculateRows = () => {
      const grid = gridRef.current;
      if (grid) {
        const children = Array.from(grid.children);
        if (children.length > 0) {
          const childHeight = children[0].getBoundingClientRect().height;
          const gridHeight = grid.getBoundingClientRect().height;
          setRowCount(Math.ceil(gridHeight / childHeight));
        }
      }
    };

    calculateRows();
    window.addEventListener('resize', calculateRows);

    return () => {
      window.removeEventListener('resize', calculateRows);
    };
  }, []);

  return (
    <div>
      <div ref={gridRef} className={styles.grid}>
        {items.map((item, index) => {
          const isEvenRow = Math.floor(index / rowCount) % 2 === 0;
          return (
            <div
              key={index}
              className={`${styles.gridItem} ${isEvenRow ? styles.evenRow : styles.oddRow}`}
            >
              {isEvenRow ? (
                <>
                  <div className={styles.info}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.line} />
                    <div className={styles.description}>{item.description}</div>
                    <div className={styles.price}>{item.price}</div>
                  </div>
                  <div className={styles.imageContainer}>
                    {item.id === 1 && <img src={image1} className={styles.image} alt={item.name} />}
                    {item.id === 2 && <img src={image2} className={styles.image} alt={item.name} />}
                    {item.id === 3 && <img src={image3} className={styles.image} alt={item.name} />}
                    {item.id === 4 && <img src={image4} className={styles.image} alt={item.name} />}
                    {item.id === 5 && <img src={image5} className={styles.image} alt={item.name} />}
                    {item.id === 6 && <img src={image6} className={styles.image} alt={item.name} />}
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.imageContainer}>
                    {item.id === 1 && <img src={image1} className={styles.image} alt={item.name} />}
                    {item.id === 2 && <img src={image2} className={styles.image} alt={item.name} />}
                    {item.id === 3 && <img src={image3} className={styles.image} alt={item.name} />}
                    {item.id === 4 && <img src={image4} className={styles.image} alt={item.name} />}
                    {item.id === 5 && <img src={image5} className={styles.image} alt={item.name} />}
                    {item.id === 6 && <img src={image6} className={styles.image} alt={item.name} />}
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.line} />
                    <div className={styles.description}>{item.description}</div>
                    <div className={styles.price}>{item.price}</div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <div>Number of Rows: {rowCount}</div>
    </div>
  );
}

export default GridComponent;
