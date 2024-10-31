
import Pend from '/src/assets/layout-images/pending.png'
export default function Pending() {
  return (
    <div className='content'>
        <div className='friends_chat_img'>
           <img className='img7' src={Pend} alt="" />
        </div>
        <div className='friends_profile'>
            <h3 className='act'>Active Now</h3>
            <h5 className='text1'>It&apos;s quiet for now...</h5>
            <p className='txt'>When a friend starts an activity--like playing <br /> a game or hanging out on voice--we&apos;ll show it here!</p>
            </div>
    </div>
  )
}