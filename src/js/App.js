
import React from 'react';
import Home from './Screens/Home';

export default function App() {

  return (
    <>
      <h1>I am App Component!!! Hello !</h1>
      <Home />
      <button className='btn btn-primary' onClick={() => {
          electron.notificationApi.sendNotification('My custom notification!');
       }}>Notify</button>


      <button className='btn btn-primary' onClick={() => {
          electron.notificationApi.newWindow('');
       }}>Yeni encere aç</button>

      <br/><br/><br/><br/>
      <button className='btn btn-primary' onClick={() => {
          electron.notificationApi.quitApp();
       }}>Uygulamadan çık</button>


    </>
  )
} 