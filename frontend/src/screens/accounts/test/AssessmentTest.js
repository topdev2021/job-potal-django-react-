import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

// Import Libraries
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

// Import Components
import AnswerOptionCard from '../../../components/accounts/AnswerOptionCard'

// Import Redux Stuff
import { connect } from 'react-redux'
import {
  getFirstQuestion,
  getQuestionAnswers,
  getNextQuestion,
  submitAnswer,
  getUserAnswers,
} from '../../../actions/assessments'

const AssessmentTest = ({
  getFirstQuestion,
  getQuestionAnswers,
  getNextQuestion,
  submitAnswer,
  getUserAnswers,
  question,
  answers,
  userAnswers,
  user,
}) => {
  useEffect(() => {
    getFirstQuestion()
    getQuestionAnswers()
    getUserAnswers()
  }, [getFirstQuestion, getQuestionAnswers])

  const [formData, setFormData] = useState({
    answer_: '',
  })
  const { answer_ } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    getNextQuestion(question.id)
    submitAnswer(user && user.id, question.id, answer_)
  }

  return (
    <Container fluid className='assessment-test-page'>
      <Row>
        <Col md={6}>
          {/* <div className='mb-5'>
            <Link
              to='/dashboard'
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <FaArrowLeft style={{ fontSize: '12px', marginRight: '6px' }} />{' '}
              Go to Dashboard
            </Link>
          </div> */}
          {userAnswers.length === 0 && question ? (
            <>
              <h4>Assessment Test</h4>
              <p>Question 1/10</p>
            </>
          ) : (
            ''
          )}

          <div className='mt-5 question'>
            <h4>
              {userAnswers.length === 0 && question
                ? question.question
                : 'You have already taken the Assessment.'}
            </h4>
          </div>
        </Col>
        <Col md={6}>
          {userAnswers.length === 0 && question ? (
            <Row>
              <Col md={8}>Select one answer</Col>
              {/* <Col md={4} className='text-center'>
                00:00:00
              </Col> */}
              {/* <Col md={4} style={{ textAlign: 'end' }}>
              <Button variant='primary'>Next Question</Button>
            </Col> */}
            </Row>
          ) : (
            ''
          )}

          <div className='answers mt-5'>
            <div className='radio-toolbar'>
              <Form onSubmit={(e) => onSubmit(e)}>
                {userAnswers.length === 0
                  ? answers && question
                    ? answers
                        .filter((qa) => qa.question === question.id)
                        .map((ans) => (
                          <div key={ans.id}>
                            <input
                              type='radio'
                              id={ans.id}
                              name='answer_'
                              value={ans.id}
                              onChange={(e) => onChange(e)}
                              required
                            />
                            <label htmlFor={ans.id} style={{ width: '100%' }}>
                              {ans.answer}
                            </label>
                          </div>
                        ))
                    : 'Please go to dashboard to see the results.'
                  : ''}
                <div>
                  {userAnswers.length === 0 ? (
                    answers && question ? (
                      <Button
                        variant='primary'
                        type='submit'
                        block
                        className='mt-2'
                      >
                        Next
                      </Button>
                    ) : (
                      <Link to='/technical-assessment'>
                        <Button variant='primary' block className='mt-2'>
                          Back to Dashboard
                        </Button>
                      </Link>
                    )
                  ) : (
                    <>
                      <p>Please go to dashboard to see the results.</p>
                      <Link to='/technical-assessment'>
                        <Button variant='primary' block>
                          Back to Dashboard
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </Form>
              {/* <AnswerOptionCard
                question_id={question.id}
                id='1'
                answer={question.answer_1}
              />
             */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

// Import States
const mapStateToProps = (state) => ({
  user: state.auth.user,
  question: state.assessments.question,
  answers: state.assessments.answers,
  userAnswers: state.assessments.userAnswers,
})

export default connect(mapStateToProps, {
  getFirstQuestion,
  getQuestionAnswers,
  getNextQuestion,
  submitAnswer,
  getUserAnswers,
})(AssessmentTest)
