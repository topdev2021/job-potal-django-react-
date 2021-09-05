import React from 'react'

// Import Libraries
import { useForm, useStep } from 'react-hooks-helper'

// Import Components
import TitlePart from './TitlePart'
import SkillsPart from './SkillsPart'
import BasicInfoPart from './BasicInfoPart'
import Submit from './Submit'

const steps = [
  { id: 'title' },
  { id: 'skills' },
  { id: 'basic_info' },
  { id: 'submit' },
]

const AddJobForm = () => {
  const [formData, setFormData] = useForm({
    title: '',
    description: '',
    skills: [{ skill: '', rating: '' }],
    email: '',
    hiring_need: '',
    company_size: '',
    name: '',
    phone: '',
    website: '',
  })

  const { step, navigation } = useStep({ initialStep: 0, steps })
  const { id } = step

  const props = { formData, setFormData, navigation }

  switch (id) {
    case 'title':
      return <TitlePart {...props} />
    case 'skills':
      return <SkillsPart {...props} />
    case 'basic_info':
      return <BasicInfoPart {...props} />
    case 'submit':
      return <Submit {...props} />
    default:
      return null
  }
}

export default AddJobForm
