import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // login(email, password)
        // .then(result => {
        //     const user = result.user;

        // })
    }

    return (
        <div className='w-6/12 mx-auto'>
            <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8 bg-slate-300  text-gray-900">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center text-gray-400">Dont have account?
                    <Link to='/signup' className="focus:underline hover:underline">Sign up here</Link>
                </p>
                <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">

                        <p>Login with Google</p>
                    </button>
                    <button aria-label="Login with GitHub" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">


                        <p>Login with GitHub</p>
                    </button>

                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-400" />
                    <p className="px-3 text-gray-900">OR</p>
                    <hr className="w-full text-gray-400" />
                </div>
                <form onSubmit={handleSubmit} className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor='email' className="block text-sm">Email address</label>
                            <input type="email" name="email" id='email' placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-gray-900 focus:border-violet-400" />
                        </div>
                        <div className="space-y-2">
                            <input type="password" name="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-gray-900  focus:border-violet-400" />
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;