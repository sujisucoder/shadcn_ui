import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase-config'
import { Link, useNavigate } from 'react-router-dom';


function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();


  const register = async (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("reached here");
    console.log("registerEmail:", registerEmail);
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log("this is user:", user);
      navigate('/login');

    } catch (error) {
      console.log("register function error", error.message);
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center md:p-10 bg-slate-100">
        {/* login */}
        <div className="flex items-center justify-center text-center h-screen">
          <div className="flex items-center justify-center p-12 bg-white shadow-xl rounded-lg overflow-auto w-[750px]">
            <div>
              <div className="mb-10">
                <div className="font-bold text-3xl">Signup Page</div>
                <div className="text-black py-2 hidden">
                  Lorem ipsum dolor sit amet
                </div>
              </div>

              <form onSubmit={register} className="flex flex-col gap-10 w-auto md:w-[500px] mx-auto">
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="Username"
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone"
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  placeholder="Confirm Password"
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />

                <Button type="submit">
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
