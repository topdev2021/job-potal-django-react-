import React, { useState } from 'react'

const AnswerOptionCard = ({ id, answer, question_id }) => {
  const [formData, setFormData] = useState({
    answer_: '',
  })

  const { answer_ } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div>
        <input
          type='radio'
          id={id}
          name='answer_'
          value={answer}
          onChange={(e) => onChange(e)}
        />
        <label
          htmlFor={id}
          style={{
            width: '100%',
          }}
        >
          {answer}
        </label>
      </div>
    </>
  )
}

export default AnswerOptionCard
