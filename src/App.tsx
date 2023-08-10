import React from 'react';
import Navbar from './components/navbar';
import Card from './components/card';
import Button from './components/button';
import Form from './components/form';
import Modal from './components/modal';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-2 gap-4">
          <Card />
          <Button />
          <Form />
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default App;
