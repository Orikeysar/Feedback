import React from "react";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

// THIS PAGE SEND ALL THE FEESBACKS DATA AND CONTEXT TO DIFFRENT COMPONENTS
export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    //MAKEING INITIAL DATA FOR FEEDBACKS
    {
      id: 23,
      rating: 8,
      text: "From Provider.",
    },
  ]);

  // DECLEAR elemnt and FUNCTION FOR EDIT FEEDBACK ITEM !!!ON FORM!!!
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  //SET FEEDBACK TO EDIT functiom !!!ON FORM!!!
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  //ACSUAL UPDATE AN EDIT FEEDBACK ITEM
  const updateFeedback = (id, updateItem)=>{
    //עובר על כל רשימת הפידבקים ועובר על כל פידבק אם הפידבק תואם 
    // לפידבק שרוצים לערוך אז הוא מחליף בינהם אם לא הוא משאיר אותו ככה
  setFeedback(feedback.map((item)=> item.id===id ?{ ...item, ...updateItem } : item))
  }
 
  //DELETE FUNCTION FOR FEEDBACK ITEM
  const feedBackDelete = (id) => {
    if (window.confirm("Are you Sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //ADD FUNCTION FOR FEEDBACK ITEM
  const addNewFeedBack = (newFeedBack) => {
    newFeedBack.id = uuidv4();
    console.log(newFeedBack);
    setFeedback([newFeedBack, ...feedback]);
  };

  //HERE WE CATH AND SEND ALL FUNCTION AND DATA TO ANTHER COMPONENT
  return (
    <FeedbackContext.Provider
      //editFeedback IS THE FUNCTION, feedbackEdit is the edit element with the item
      value={{
        feedback,
        feedbackEdit,
        feedBackDelete,
        addNewFeedBack,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
