import React from 'react'
import { Button } from "@/components/ui/button"

function Signup() {
  return (
    <div>
      <div className="flex justify-center items-center md:p-10 bg-slate-100">
        {/* login */}
        <div className="flex items-center justify-center text-center h-screen">
          <div className="flex items-center justify-center p-12 bg-white shadow-xl rounded-lg overflow-auto w-[750px]">
            <div>
              <div className="mb-10">
                <div className=" font-bold text-3xl ">Signup Page</div>
                <div className="text-black py-2 hidden">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
        
              <form className="flex flex-col gap-10 w-auto md:w-[500px] mx-auto">
                <input
                  type="text"
                  required
                  placeholder="Username"
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone"
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                <input
                  type="password"
                  required
                  placeholder="Confirm Password"
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />

                <Button>
                  Sign up
                </Button>
                <div className="text-black text-sm flex justify-center items-center gap-1">
                  Already a Member ?
                  <a href="/login" className="text-blue-500">
                    Login   
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
