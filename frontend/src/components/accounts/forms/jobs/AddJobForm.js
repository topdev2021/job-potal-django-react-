import React, { useState } from 'react'

// Import Components
import TitlePart from './TitlePart'
import SkillsPart from './SkillsPart'
import BasicInfoPart from './BasicInfoPart'
import Submit from './Submit'

const AddJobForm = () => {
  const [formData, setFormData] = useState({
    step: 1,
    title: '',
    description: '',
    skills: [
      {
        id: 1,
        text: 'React',
        value: 'React',
        rating: 0,
        isChecked: false,
      },
      {
        id: 2,
        text: 'Node.js',
        value: 'Node.js',
        rating: 0,
        isChecked: false,
      },
      {
        id: 3,
        text: 'Python',
        value: 'Python',
        rating: 0,
        isChecked: false,
      },
      {
        id: 4,
        text: 'Angular',
        value: 'Angular',
        rating: 0,
        isChecked: false,
      },
      {
        id: 5,
        text: 'Swift',
        value: 'Swift',
        rating: 0,
        isChecked: false,
      },
      {
        id: 6,
        text: 'React Native',
        value: 'React Native',
        rating: 0,
        isChecked: false,
      },
      {
        id: 7,
        text: 'Android',
        value: 'Android',
        rating: 0,
        isChecked: false,
      },
      {
        id: 8,
        text: 'Java',
        value: 'Java',
        rating: 0,
        isChecked: false,
      },
      {
        id: 9,
        text: 'Ruby on Rails',
        value: 'Ruby on Rails',
        rating: 0,
        isChecked: false,
      },
      { id: 10, text: 'Go', value: 'Go', rating: 0, isChecked: false },
      {
        id: 11,
        text: 'Vue.js',
        value: 'Vue.js',
        rating: 0,
        isChecked: false,
      },
      {
        id: 12,
        text: 'PHP',
        value: 'PHP',
        rating: 0,
        isChecked: false,
      },
      {
        id: 13,
        text: 'DevOps',
        value: 'DevOps',
        rating: 0,
        isChecked: false,
      },
      {
        id: 14,
        text: 'Machine Learning',
        value: 'Machine Learning',
        rating: 0,
        isChecked: false,
      },
      {
        id: 15,
        text: 'Scala',
        value: 'Scala',
        rating: 0,
        isChecked: false,
      },
      {
        id: 16,
        text: 'TypeScript',
        value: 'TypeScript',
        rating: 0,
        isChecked: false,
      },
    ],
    work_email: '',
    hiring_needs: '',
    current_employees: '',
    name: '',
    phone: '',
    website: '',
  })

  const {
    step,
    title,
    description,
    skills,
    work_email,
    hiring_needs,
    current_employees,
    name,
    phone,
    website,
  } = formData

  const values = {
    title,
    description,
    skills,
    work_email,
    hiring_needs,
    current_employees,
    name,
    phone,
    website,
  }

  const nextStep = () => {
    setFormData({ ...formData, step: step + 1 })
  }

  const prevStep = () => {
    setFormData({ ...formData, step: step - 1 })
  }

  const onChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value })
  }

  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...skills]
    list[index][name] = value
    setFormData({ ...formData, skills: list })
  }

  switch (step) {
    case 1:
      return (
        <TitlePart
          values={values}
          onChange={onChange}
          nextStep={nextStep}
          formData={formData}
          setFormData={setFormData}
        />
      )
    case 2:
      return (
        <SkillsPart
          values={values}
          onChange={onChange}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )
    case 3:
      return (
        <BasicInfoPart
          values={values}
          onChange={onChange}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      )
    case 4:
      return <Submit values={values} prevStep={prevStep} />
    default:
      return 0
  }
}

export default AddJobForm
