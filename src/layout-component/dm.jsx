
import Menubar from './Menubar'
import Friends from './content'
import Sidebar from './Sidebar'


export default function Dm() {
  return (
   <div className='dm'>
       <Sidebar/> 
       <Menubar />
       <Friends/> 
   </div>
  )
}
