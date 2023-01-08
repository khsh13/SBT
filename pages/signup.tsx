import React from 'react'

const signup = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col mt-0.5">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-4 py-2 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center text-[#095b3d]">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-[#095b3d] hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-[#095b3d] mt-4">
                        By signing up, you agree to the,_  
                        <a className="text-decoration-line: underline border-b border-grey-dark text-grey-dark" href="#">
                             Terms of Service
                        </a> and  
                        <a className="text-decoration-line: underline border-b border-grey-dark text-grey-dark" href="#">
                            _Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-[#0CCF89] mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-[#0CCF89] " href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
  )
}

export default signup