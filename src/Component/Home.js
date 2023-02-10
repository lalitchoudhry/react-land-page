import React from 'react';
import pic from './../image/user.png'

export default function Home() {
  return (
    <div className='head'>
        <div className='input-container'>
            <div className='text-area'>
                <h2>An inspiring design delivered to your inbox every morning</h2>
                <p>Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox</p>
                <h3>Show me how it looks</h3>
            </div>
            <div className='input-area'>
                <input type="email" placeholder='Your e-mail address' />
                <button className='btn btn-primary btn-lg btn-dark' type='submit'>Register Now</button>
            </div>
            <div className='spam'>Free - No Spam - No Data Sharing</div>
        </div>
        <div className='img-container'>
            <img src={pic} alt="user" />
        </div>
    </div>
  )
}
