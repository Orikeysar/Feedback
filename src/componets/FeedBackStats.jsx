import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedBackProvider";

function ArrFeedBackStats({}) {
  const { feedback } = useContext(FeedbackContext);

  // Calculte the Average of all feedbacks
  let AVGrating =
  feedback.reduce((acc, current) => {
      return acc + current.rating;
    }, 0) / feedback.length;
    AVGrating =AVGrating.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Ratting:{AVGrating}</h4>
    </div>
  );
}

export default ArrFeedBackStats;
