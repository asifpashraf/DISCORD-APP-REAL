import { useState } from 'react';

import unlock from '/src/assets/settings-images/unlock.png';
import card from '/src/assets/settings-images/card.png'
import paypal from '/src/assets/settings-images/paypal.png'
import debitcard from'/src/assets/settings-images/debitcard.png'
import visacard from'/src/assets/settings-images/visacard.png'
import discover from '/src/assets/settings-images/discover.png'
import master from'/src/assets/settings-images/mastercaed.png'
import PostBox from './PostBox';
import Esc from './Esc';
// import { PostBox } from './PostBox'; // Use destructuring to import named exports

function Billing() {
  const [modal, SetModal] = useState(false);
  const [cards, SetCards] = useState(false);
 
  const payemend = () => {
    SetModal(true);
  };

  
  const closeModal = () => {
    SetModal(false);
  };
  
  const cardpaymente=()=>{
    SetCards(true)
  }
  const closepaymente=()=>{
    SetCards(false)
  }

  return (
    <div className='billigfirst'>
      <div className='billingsecond'>
        <div className='billingbox'>
          <img src={unlock} alt="unlock" />
          <h2>Payment Methods</h2>
        </div>
        {/* <button onClick={closeModal}>×</button>
        <h6>ESC</h6> */}
        <div className="billingparagraph">
          <p>No payment method saved</p>
          <p id='billingp'>Checkout faster by saving a payment method</p>
        </div>
        <button id='billingbutton' onClick={payemend }>Add Payment Method</button>

        {modal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>ADD A NEW PAYMENT METHOD</h2>
              <p>Select payment method</p>
              <button onClick={closeModal} className='closebutton'>×</button>
              <div className="paymentbuttons">
                <button id='cardbutton' onClick={cardpaymente}>
                  <img src={card} alt="Card" /> Card
                </button>
              
                <button id='paybutton'>
                  <img src={paypal} alt="PayPal" /> PayPal
                </button>
              </div>
                {cards && (
                  <div className='paycards'>
                    <div className='paycardsecond'>
                      <button onClick={closepaymente} id='closepay'>×</button>
                      <h2>ADD A NEW PAYMENT METHOD</h2>
                       <div className='cardsfirst'>
                            <div className="cardssecond">
                              <p>Card Number</p>
                            </div>
                            <div className='cardstherd'>
                               <img src={card} alt="" />
                               <img src={debitcard} alt="" />
                               <img src={visacard} alt="" />
                               <img src={discover} alt="" />
                               <img src={master} alt="" />
                            </div>
                       </div>
                      <div className="cardnumber">
                        <div className="cardnumbersecond">
                          <img src={card} alt="" />
                          <input type="text" placeholder='Card Number' />
                        </div>
                        <div className='cardinpute'>
                             <p>Expierian Date</p>
                            <input type="text" placeholder='MM/YY' />
                            <p id='cvcp'>cvc</p>
                            <input type="text" placeholder='Security Code' />
                        </div>
                        <div className='nameinput'>
                          <p>NAME ON THE CAR</p>
                             <input type="text" placeholder='Name' />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
        )}
        <PostBox isLoggedIn={true} hedding="Transaction History"/>
    <div className="post-box">
       <h3 id='transaction-h3'>Transaction History</h3>
        <div className='post-boxfirst'>
        <div className="post-boxsecond">
          <p>Psst!Looking to redeem a discord key?we've moved it to <a href="">your inventory</a> .</p>
        </div>
     </div> 
     </div>

      </div>
      <Esc/>
    </div>
  );
}

export default Billing;




