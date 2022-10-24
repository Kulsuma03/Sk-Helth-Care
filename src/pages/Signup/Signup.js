import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Signup = () => {
    const {signup} = useContext(AuthContext);
    
    const handleSignup = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        signup(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            console.log(user);
        })
        .catch((error) => {
           console.error(error)
          });
    }
    return (

        <div className="flex items-center justify-center text-center  text-gray-900">
            <form onSubmit={handleSignup} className="flex flex-col bg-slate-300 my-8 w-full max-w-lg p-12 rounded shadow-lg ng-untouched ng-pristine ng-valid">
                <label htmlFor="name"  className="self-start text-xs font-semibold">Username or Email</label>
                <input id="name" name='name' type="text" placeholder='Your Name' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400" />
                <label htmlFor="email" className="self-start text-xs font-semibold">Your Email</label>
                <input id="email" type="email" name='email' placeholder='Your Email' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400" />
                <label htmlFor="password" className="self-start mt-3 text-xs font-semibold">Password</label>
                <input id="password" name='password' type="password" placeholder='Password' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400" />
                <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-violet-400 text-gray-900">Sign Up</button>
                <div className="flex justify-center mt-6 space-x-2 text-xs text-red-600">
                    <p className="">Already have an account</p>
                    <span className="">/</span>
                    <Link to='/login' className="">Login</Link>
                </div>
            </form>
        </div>

    );
};

export default Signup;