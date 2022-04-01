import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'Hello world..',
      rating: 2,
    },
  ])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: true,
  })
  //delete Feedback
  const deleteFeedback = id => {
    if (window.confirm('Ara you sure want to delete ?'))
      setFeedback(feedback.filter(el => el.id !== id))
  }

  // Add feedback
  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    console.log(newFeedback)
  }
  // Edit feedback
  const editFeedback = (item) =>{
      console.log(item);
      setFeedbackEdit ({
          item,
          edit:false,
      })
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}
export default FeedbackContext