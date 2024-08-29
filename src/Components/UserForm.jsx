import React from 'react'
import {FcGoogle} from "react-icons/fc"

const UserForm = () => {
  return (
    <div id='userdata' className="flex max-w-sm flex-col gap-y-4 border-3">
         <div className="flex gap-x-4">
                <label className='relative'>
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    First Name <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                    required
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>
                <label className='relative'>
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Last Name <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>
                </div>
                
                <label className='relative'>
                    <p className="mb-1 max-w-sm text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Email Address <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type="text"
                        name="email"
                        placeholder="Enter email address"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>
                <label className='relative'>
                    <p className="mb-1 max-w-sm text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Phone Number <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type="text"
                        name="number"
                        placeholder="Enter Phone Number"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>
                
                <div className="flex gap-x-4">
                <label className='relative'>
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Create Password <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                    required
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>
                <label className='relative'>
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Confirm Password <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                    required
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />    
                    <div className='bg-slate-700 w-full h-[3px] absolute'></div>
                </label>
        </div>
                <button
                type="submit"
                className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
                >
                Create Account
                </button>

                <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-1 mb-6'>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>
    </div>
  )
}

export default UserForm