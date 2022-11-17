import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect, useContext } from "react";
import MakeButton from "../Shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../Context/FeedBackProvider";

function FeedBackItemForm() {
  //initials props for FeedBackItemForm
  const [btnDisable, SetBtnDisable] = useState("true");
  const [message, SetMessage] = useState("");
  const [text, SetText] = useState("");
  const [rating, SetRating] = useState("10");
  //addin the context feom provider
  const { addNewFeedBack, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  //function whem we click edit feedback we chang form looking ,[feedbackEdit] is to get in evry click
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      SetBtnDisable(false);
      SetText(feedbackEdit.item.text);
      SetRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const ChangeTextHandler = (e) => {
    if (text == "") {
      SetBtnDisable('true');
      SetMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      SetBtnDisable('true');
      SetMessage("need 10 chars at least ");
    } else {
      SetBtnDisable('false');
      SetMessage("Send Avilable");
    }
    SetText(e.target.value);
  };

  const HandleSubmitFeedback = (e) => {
    //Prevent the file to collapse
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = { rating, text };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      }else{
        addNewFeedBack(newFeedback);
      
      }
      SetText(" ");
    }
  };

  return (
    <div className="card">
      <form onSubmit={HandleSubmitFeedback}>
        <h2>Would you rate are servies?</h2>
        <RatingSelect select={(rating) => SetRating(rating)} />
        <div className="input-group">
          <input
            value={text}
            type="text"
            placeholder="Write a Review"
            onChange={ChangeTextHandler}
          ></input>
          <MakeButton type="submit" version="secondary" disable={btnDisable}>
            send
          </MakeButton>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
}

export default FeedBackItemForm;
