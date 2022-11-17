import{FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem';
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedBackProvider';



function FeedbeckItemList() {
const {feedback} = useContext(FeedbackContext)

// output if we dint have feedback
  if (!feedback || feedback.length === 0) {
    return <p>Do not have a feedback yet</p>;
  }

  return (
    
    <div className="feedback-list">

    {/* animate for fade the content in page  */}
    <AnimatePresence> 
      {/* MAP FOR GET EVRY FEEDBACK FROM LIST      */}
     {Object.values(feedback).map((item)=> (
      <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} >
         <FeedbackItem key={item.id} item={item} /> 
      </motion.div>
      ))}
    </AnimatePresence>
    </div>
   
  )
  //Without Animation!!!
  // return (
    
  //   <div className="feedback-list">       
  //    {Object.values(feedback).map((item)=> (
  //    <FeedbackItem key={item.id} item={item} FeedBackDeleteDrillUP ={FeedBackDeleteDrillUP}/> ))}
  //   </div>
   
  // )
}

export default FeedbeckItemList;
