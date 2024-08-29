import React from 'react'
import {useState} from 'react'
import UserForm from '../Components/UserForm'
import AgencyForm from '../Components/AgencyForm'

const SignUp = () => {

    const [accountType, setAccountType] = useState("user");

    return (
        <div className='bg-richblack-900  flex item-center justify-center pt-20 '>
            <div className='text-richblack-100' id='signup'>

                <div className='flex bg-richblack-800 overflow-y-hidden p-1 gap-x-1 my-6 rounded-full max-w-max' id='useragency'>
                    <button className={`${accountType === "user" ? "bg-richblack-900 text-richblack-5"
                    :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("user")}>
                        User
                    </button>

                    <button className={`${accountType === "agency" ? "bg-richblack-900 text-richblack-5"
                    :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("agency")}>
                        Agency
                    </button>
                </div>

            <form>
            {accountType === "user" ? (
            <div>
              <UserForm />
            </div>
          ) : (
            <div>
              <AgencyForm />
            </div>
          )}
            
            </form>
         </div>
       </div>
    )
}

export default SignUp