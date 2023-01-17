
import React from 'react';
import Home from './Screens/Home';

export default function App() {

  return (
    <>
      <div className="mainApp">
      <div className="topBar">
        <div className="titleBar">         
          <div className="title">
            My App Top Bar 2
          </div>          
        </div>
      </div>
      <div className="contentArea">
        <div className="contentPages">
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
        </div>
      </div>
    </div>
    </>
  )
} 