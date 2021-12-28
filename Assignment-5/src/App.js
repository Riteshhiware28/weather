import { useState } from 'react';
import './App.css';
import Form from  "./components/Form";
import Posts from './components/Posts';

function App() {
  const [newpost,setnewpost]=useState(false);
  return (
    <div className="app">
      <Form setnewpost={setnewpost}/>
      <Posts newpost={newpost} newposthandler={setnewpost}/>
    </div>
  );
}

export default App;
