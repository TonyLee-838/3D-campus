import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

const circleLength = 9;

const Progress = () => {
  const classes = useStyle();
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setActive(active + 1);
    }, 800);
  }, [active]);

  return (
    <div className={classes.container}>
      <div className={classes.dots}>
        {Array.from({ length: circleLength }).map((_, i) => (
          <div
            key={i}
            className={[classes.dot, i === active % circleLength ? classes.light : ''].join(' ')}
          />
        ))}
      </div>
      <h2 className={classes.text}>
        Loading
        {Array((active % 3) + 1)
          .fill('.')
          .join('')}
      </h2>
    </div>
  );
};

const useStyle = createUseStyles(() => ({
  container: {},
  text: {
    color: '#ffffff',
    fontFamily: 'agency_fb, monospace',
    fontWeight: 400,
    textAlign: 'center',
  },
  dots: {
    display: 'flex',
    flexDirection: 'row',
  },
  dot: {
    width: '20px',
    height: '20px',
    borderRadius: '50px',
    border: '3px solid white',
    margin: '0 10px',
    backgroundColor: '#04002e',
    transition: 'background 0.8s ease, transform 0.5s ease',
  },
  light: {
    backgroundColor: '#ffffff',
    transform: 'scale(1.2)',
  },
}));

export default Progress;
