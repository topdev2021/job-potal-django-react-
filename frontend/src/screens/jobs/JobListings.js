import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

// Import Libraries
import { Helmet } from 'react-helmet'

// Import Components
import Screen from '../../components/layout/Screen'
import SingleJobCard from '../../components/jobs/SingleJobCard'
import RolesCard from '../../components/jobs/RolesCard'

// DEMO DATA
const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    description: 'Morbi at neque a orci convallis tincidunt non ut tortor.',
  },
  {
    id: 2,
    title: 'Data Scientist',
    description:
      'Morbi at neque a orci convallis tincidunt non ut tortor. Morbi at neque a orci convallis tincidunt non ut tortor.',
  },
  {
    id: 3,
    title: 'Software Tech Lead',
    description: 'Morbi at neque a orci convallis tincidunt non ut tortor.',
  },
  {
    id: 4,
    title: 'Sr. Software Engineer',
    description:
      'Morbi at neque a orci convallis tincidunt non ut tortor. Morbi at neque a orci convallis tincidunt non ut tortor.',
  },
  {
    id: 5,
    title: 'Project Manager',
    description:
      'Morbi at neque a orci convallis tincidunt non ut tortor. Morbi at neque a orci convallis tincidunt non ut tortor.',
  },
]

const roles = [
  {
    id: 1,
    title: 'Full Stack',
  },
  {
    id: 2,
    title: 'Frontend',
  },
  {
    id: 3,
    title: 'Backend',
  },
  {
    id: 4,
    title: 'DevOps',
  },
  {
    id: 5,
    title: 'Mobile',
  },
  {
    id: 6,
    title: 'AI/ML/Data',
  },
]

const skills = [
  {
    id: 1,
    title: 'ReactJS',
  },
  {
    id: 2,
    title: 'NodeJS',
  },
  {
    id: 3,
    title: 'Python',
  },
  {
    id: 4,
    title: 'Android',
  },
  {
    id: 5,
    title: 'GoLang',
  },
  {
    id: 6,
    title: 'Ruby',
  },
  {
    id: 7,
    title: 'Django',
  },
  {
    id: 8,
    title: 'VueJS',
  },
  {
    id: 9,
    title: 'PHP',
  },
  {
    id: 10,
    title: 'Angular',
  },
  {
    id: 11,
    title: 'IOS',
  },
  {
    id: 12,
    title: 'AI/ML',
  },
  {
    id: 13,
    title: 'Computer Vision',
  },
  {
    id: 14,
    title: 'Data Engineering',
  },
]

const JobListings = () => {
  return (
    <Screen>
      <Helmet>
        <title>Jobs Listings</title>
      </Helmet>
      <Container style={{ paddingTop: '5%', paddingBottom: '5%' }}>
        <section className='text-center page-section-bg'>
          <Row>
            <Col md={10} className='m-auto'>
              <h1>Top U.S. Remote Software</h1>
              <h1 className='mb-4'>Developers Jobs</h1>
              <h3>No Visa Needed</h3>
              <div className='mt-4'>
                <p>
                  Turing is where top U.S. companies hire remote software
                  engineers.
                </p>
                <p>
                  Apply to full-stack, frontend, backend, mobile, DevOps, UI/UX,
                  Machine Learning, Data Engineering, and other software
                  engineering jobs.
                </p>
                <p>
                  Once you're a Turing engineer, you will never have to apply
                  for another job.
                </p>
              </div>
            </Col>
            <Col md={3} className='m-auto'>
              <Button
                className='mt-2'
                variant='primary'
                block
                size='lg'
                style={{ fontSize: '16px' }}
              >
                APPLY TODAY
              </Button>
            </Col>
          </Row>
        </section>

        <section className='page-section-bg mt-5 skills'>
          <Row>
            <Col md={10} className='m-auto'>
              <h1 className='text-center mb-5'>Check Open Positions</h1>
              <h3 className='text-center'>Based On Your Skills</h3>
              <Row className='mt-4'>
                {skills.map((skill) => (
                  <Col md={3} key={skill.id}>
                    <RolesCard title={skill.title} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </section>

        <section className='page-section-bg mt-5 roles'>
          <Row>
            <Col md={10} className='m-auto'>
              <h3 className='text-center'>Based On Your Role</h3>
              <Row className='mt-4'>
                {roles.map((role) => (
                  <Col md={3} key={role.id}>
                    <RolesCard title={role.title} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </section>

        <section className='page-section-bg mt-5 jobs'>
          <Row>
            <Col md={10} className='m-auto'>
              <h3 className='text-center'>Based On Your Seniority</h3>
              <div className='mt-5'>
                {jobs.map((job) => (
                  <SingleJobCard
                    key={job.id}
                    title={job.title}
                    description={job.description}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </section>

        <section className='page-section-bg mt-5'>
          <Row>
            <Col md={10} className='m-auto'>
              <h2>What is Turing?</h2>
              <div className='mt-4'>
                <p>
                  Turing is based in Palo Alto, California, U.S.A., also known
                  as “Silicon Valley”. We connect exceptional software engineers
                  from around the world to top U.S. and Silicon Valley companies
                  that are hiring for remote software positions. Turing is
                  backed by well-known investors like:
                </p>
                <ul>
                  <li>- Facebook's first CTO (Adam D'Angelo)</li>
                  <li>
                    - Executives from Google, Facebook, Amazon, and Twitter
                  </li>
                  <li>
                    - Foundation Capital and other investors in Facebook, Tesla,
                    Asana, etc.
                  </li>
                </ul>
                <p>
                  Turing is led by Stanford University alumni and successful
                  A.I. entrepreneurs Jonathan Siddharth and Vijay Krishnan,
                  whose last A.I. company leveraged elite remote talent and had
                  a successful acquisition. (Techcrunch story).
                </p>
              </div>
            </Col>
          </Row>
        </section>

        <section className='page-section-bg mt-5'>
          <Row>
            <Col md={10} className='m-auto'>
              <h2>Who Can Become a Turing Engineer?</h2>
              <div className='mt-4'>
                <p>
                  - You are likely in the top 1% of the world’s software
                  engineers.
                </p>
                <p>
                  - You can work full-time (40 hours/week) with a U.S. software
                  company. We can allow part-time work during a short transition
                  period, but we’ll need you to transition to full-time work
                  quickly.
                </p>
                <p>
                  - You have at least 3 years of industry experience as a
                  software engineer after you finished your college studies. If
                  you have worked as a senior software engineer, tech lead, or
                  architect, you will have even more job opportunities on
                  Turing.
                </p>
                <p>
                  - You can spend 5-10 hours on our programming tests, skill
                  challenges, and video interviews. These tests were designed by
                  our leadership (ex-Engineering Managers from Facebook and
                  Google and a Stanford AI scientist) to find the top 1% of the
                  world's engineers.
                </p>
                <p>
                  - You can adjust work hours to overlap at least 4 hours a day
                  with a company in Silicon Valley or New York.
                </p>
                <p>
                  - You are a fluent English communicator, and you will be able
                  to communicate effectively over daily video calls with
                  engineering managers at U.S. Software companies.s a day with a
                  company in Silicon Valley or New York.
                </p>
                <p>
                  - You can function effectively and be valuable to U.S.
                  engineering management without too much hand-holding and
                  micromanagement. You don’t need your manager to write detailed
                  JIRA tickets for you. You are capable of discussing your
                  manager’s objectives and proposing a working roadmap and
                  specific tasks to the manager for approval.
                </p>
                <p>
                  - You are an extremely proactive communicator, who understands
                  the challenges of remote work and the need to over-communicate
                  to offset those challenges.
                </p>
                <p>
                  - You are good at feature planning and estimation. You can
                  discuss business priorities with U.S. companies and propose
                  sensible software/business tradeoffs that are in line with
                  their priorities.
                </p>
              </div>
            </Col>
          </Row>
        </section>

        <section className='page-section-bg mt-5'>
          <Row>
            <Col md={10} className='m-auto'>
              <h2>Benefits of Becoming a Turing Engineer</h2>
              <div className='mt-4'>
                <p>
                  - Turing’s salaries are higher than local software engineer
                  salaries in most countries.
                </p>
                <p>
                  - You don’t need a US visa since you’ll be working remotely.
                </p>
                <p>
                  - You’ll be able to join an exceptional community of
                  engineers. Turing has engineers that graduated from Stanford
                  and other top U.S. universities. They’ve also worked at
                  companies like Microsoft, Google, and Facebook.
                </p>
                <p>
                  - Turing’s qualification process is difficult and
                  time-consuming. But once you qualify, Turing will match you
                  with top U.S. Software companies. Once you qualify for Turing,
                  you may never have to interview for a job again.
                </p>
                <p>
                  - Once you qualify for Turing, you can live in any part of the
                  world you like and still be plugged into the very best Silicon
                  Valley job opportunities.
                </p>
                <p>
                  - Turing only partners with U.S. Software companies whose
                  project engagements are full-time and expected to last 6
                  months or more. Today, a Turing developer works full time with
                  a single Turing partner company for 6-9 months on average,
                  compared to most freelancing websites with very short gigs.
                  Turing projects are typically long term, which gives you the
                  opportunity to grow as a software engineer, which is hard with
                  gigs.
                </p>
                <p>
                  - If a Turing developer's work with a partner company
                  completes in a few months, Turing re-matches engineers to
                  other partner companies within 2-3 weeks on average.
                </p>
                <p>
                  - Turing also offers mentorship and guidance regarding
                  technologies most valued by US companies and also resources to
                  help you grow fast as a software engineer. Today this is
                  accessible to engineers working locally for Silicon Valley
                  companies, but we want the same to be available to exceptional
                  software engineers all over the world.
                </p>
                <p>
                  - Today, Turing partners with a number of U.S. companies in
                  Silicon Valley, Texas, New York, Washington, and Florida. We
                  help fill a large number of full-time remote roles including
                  full-stack, frontend, backend, mobile, UI/UX, DevOps, AI and
                  Data Engineering, and more, and so we can match you with the
                  perfect role for you.
                </p>
              </div>
            </Col>
            <Col md={3} className='m-auto'>
              <Button
                className='mt-2'
                variant='primary'
                block
                size='lg'
                style={{ fontSize: '16px' }}
              >
                APPLY TODAY
              </Button>
            </Col>
          </Row>
        </section>
      </Container>
    </Screen>
  )
}

export default JobListings
