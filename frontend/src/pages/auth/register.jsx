import { registerFormControls } from '../../config/config'
import CommonForm from '../../components/common/form'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '@/store/authSlice/authSlice'
import { toast } from "sonner"


const initialState = {
  userName : '',
  email : '',
  password : ''
}


const AuthRegister = () => {

  const [formData, setFormData] = useState(initialState);
  const dispatch =  useDispatch();
  const navigate = useNavigate()



  function onSubmit(event){
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if(data?.payload?.success) {
        toast("Registration Successfully.");
        navigate('/auth/login')
      }else{
         toast("User Already exists! please try with another email id");
      }
    })
  }
 

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