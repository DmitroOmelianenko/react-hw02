import React from 'react';
import Greeting from './components/Gretting';
import Message from './components/Message';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    console.log('Кнопку натиснуто!');
  };

  return (
    <div>
      <Greeting name="Дмитро" />
      <Message text="Ласкаво просимо до нашого сайту!" />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
