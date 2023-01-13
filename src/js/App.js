
import React from 'react';

export default function App() {

  return (
    <>
      <h1>I am App Component!!! erwrw</h1>
      <button className='btn btn-primary' onClick={() => {
          electron.notificationApi.sendNotification('My custom notification!');
       }}>Notify</button>
    </>
  )
}
