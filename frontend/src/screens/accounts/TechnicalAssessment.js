import React, { useEffect, Fragment } from 'react'
import { Button } from 'react-bootstrap'

// Import Libraries
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// Import Components
import Screen from '../../components/accounts/Screen'
import PageTitle from '../../components/accounts/PageTitle'

// Import Redux Stuff
import { connect } from 'react-redux'
import {
  getAllQuestions,
  getUserAnswers,
  getQuestionAnswers,
} from '../../actions/assessments'

const TechnicalAssessment = ({
  getAllQuestions,
  getUserAnswers,
  getQuestionAnswers,
  allQuestions,
  userAnswers,
  answers,
}) => {
  useEffect(() => {
    getAllQuestions()
    getUserAnswers()
    getQuestionAnswers()
  }, [getAllQuestions, getUserAnswers])
  return (
    <Screen>
      <Helmet>
        <title>Technical Assessment</title>
      </Helmet>
      <PageTitle title='Technical Assessment' />
      {userAnswers.length === 0 ? (
        <Link to='/assessment-test'>
          <Button variant='primary'>Start Test</Button>
        </Link>
      ) : (
        <section className='mt-2'>
          {allQuestions.map((question, index) =>
            answers.map((answer, index) =>
              userAnswers
                .filter((ua) => ua.question === question.id)
                .filter((ua) => ua.answer === answer.id)
                .map((ans) => (
                  <Fragment key={index}>
                    <b>{question.question}</b>
                    <p>{answer.answer}</p>
                  </Fragment>
                ))
            )
          )}
        </section>
      )}
    </Screen>
  )
}

// Import States
const mapStateToProps = (state) => ({
  allQuestions: state.assessments.allQuestions,
  userAnswers: state.assessments.userAnswers,
  answers: state.assessments.answers,
})

export default connect(mapStateToProps, {
  getAllQuestions,
  getUserAnswers,
  getQuestionAnswers,
})(TechnicalAssessment)
