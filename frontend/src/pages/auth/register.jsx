import { registerFormControls } from '../../config/config'
import CommonForm from '../../components/common/form'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const initialState = {
  userName : '',
  email : '',
  passowrd : ''
}


const AuthRegister = () => {

  const [formData, setFormData] = useState(initialState);
  function onSubmit(){}


  return (
      <div className='mx-auto w-ful max-w-md space-y-6'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-foreground mb-7'>Create new account</h1>
        <CommonForm
          formControls={registerFormControls}
          buttonText={'Sign Up'}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
          <p className='mt-7'>Already have an account &nbsp;  
              <Link className='font-medium text-primary hover:underline' to='/auth/login'>Login</Link>
          </p>
        </div>
      </div>
  )
}

export default AuthRegister