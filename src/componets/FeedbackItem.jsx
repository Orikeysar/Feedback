import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedBackProvider";

function FeedbackItem({ item }) {
  // Getting Feedback Delete Function from Provider to here
  const { feedBackDelete } = useContext(FeedbackContext);
  const { editFeedback } = useContext(FeedbackContext);
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>

      {/* Close Feedback item Icon  */}
      <button className="close" onClick={() => feedBackDelete(item.id)}>
        <FaTimes color="purple" />
      </button>

      {/* Edit Feedback item Icon  */}
      <button className="edit" onClick={()=>{editFeedback(item)}}>
        <FaEdit color="purple" />
      </button>

      {/* Feedback item Text */}
      <div className="text-display">{item.text}</div>
    </div>
  );
}

export default FeedbackItem;
