import { useState } from 'react'
import './App.css'
import Otp from './components/Otp'

function App() {
  const [mobile, setMobile] = useState("")
  const [showOtp, setShowOtp] = useState(false)

  const handleMobileChange = (e) => {
    if(isNaN(e.target.value)) return
    setMobile(e.target.value)
  } 

  const handleSubmit = (e) => {
    e.preventDefault()

    //phone validations

    const regex = /[^0-9]g/
    if(mobile.length<10 || regex.test(mobile)){
      alert("Invalid Phone Number")
      return;
    }

    //call your backend API

    //show OTP Field
    setShowOtp(true)
  }

  return (
    <>
     {!showOtp ?
      <form onSubmit={handleSubmit}>
      <label htmlFor="mobile">Enter your mobile no.</label><br/>
      <input
      onChange={(e)=>handleMobileChange(e)}
      value={mobile}
      placeholder='Enter your mobile number'
      />
      <button type='submit'>Submit</button>
     </form>
    : <Otp/> 
    }
    </>
  )
}

export default App
