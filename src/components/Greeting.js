import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greetingSlice';

const Greeting = () => {
  const { message, isLoading } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(fetchGreeting());
  };

  if (isLoading) {
    return <h1 style={{ textAlign: 'center' }}>Loading...</h1>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'blue' }}>{message}</h1>
      <button
        type="button"
        style={{
          padding: '10px',
          background: 'hotpink',
          color: 'white',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        Random Greeting
      </button>

    </div>
  );
};

export default Greeting;
