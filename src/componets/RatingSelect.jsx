
import {useState,useContext,useEffect} from 'react'
import FeedbackContext from '../Context/FeedBackProvider';
function RatingSelect({select}) {
    
    const [selected, setSelected] = useState(10)
    const {feedbackEdit} = useContext(FeedbackContext)
    //IN CASE WE WHANT TO EDIT
    useEffect(()=>{
        if(feedbackEdit.edit === true){
         setSelected(feedbackEdit.item.rating)
        }
         }, [feedbackEdit])
        
//regular cange on change
    const handleChange = (e) => {
        //change string to number with +
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
    const radioButtons = [1,2,3,4,5,6,7,8,9,10]
 
    return (
        <ul className='rating'>
            {radioButtons.map((num, index) => (
                <li key={index}>
                    <input 
                    type='radio'
                    id={`num${num}`}
                    name='rating'
                    value={`${num}`}
                    onChange={handleChange}
                    checked={selected === num}
                    />
                    <label htmlFor={`num${num}`}>{`${num}`}</label>
                </li>
            ))}
        </ul>
    )
}
 
export default RatingSelect