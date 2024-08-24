import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState(''); // Changed from credential to username
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://127.0.0.1:5555/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }), // Updated to username
            });

            if (response.ok) {
                navigate('/dashboard');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Failed to login');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-12">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="KAM Logo"
                    src="https://kam.co.ke/wp-content/uploads/2022/02/KAM-Logo.jpg"
                    className="mx-auto h-60 w-auto"
                />
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
                    Sign In To Your Account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6">
                            Email address or Phone number
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} // Updated to username
                                autoComplete="username"
                                className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-blue-500 hover:text-blue-600">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    {error && <div className="text-red-500 text-sm">{error}</div>}

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md border border-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-blue-500 shadow-sm hover:bg-blue-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="/register" className="font-semibold leading-6 text-blue-500 hover:text-blue-600">
                        Register Here
                    </a>
                </p>
            </div>
        </div>
    );
}
