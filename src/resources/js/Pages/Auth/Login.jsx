// resources/js/Pages/Auth/Login.jsx

import React from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function LoginCard() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('login'));
  };

  return (
    <>
      <Head title="Login" />
      <div className="bg-sky-100 flex justify-center items-center h-screen">
        {/* Left: Image */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src="/img/bg_login.jpg"
            alt="Placeholder"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <div className='mx-24'>
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form onSubmit={submit}>
            {/* Email Input (Inertia prefere email para autenticação) */}
            <div className="mb-4 bg-sky-100">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-800">
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
              {errors.password && (
                <div className="text-red-500 text-sm mt-1">{errors.password}</div>
              )}
            </div>
            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={data.remember}
                onChange={(e) => setData('remember', e.target.checked)}
                className="text-red-500"
              />
              <label htmlFor="remember" className="text-green-900 ml-2">
                Lembre-me
              </label>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
              disabled={processing}
            >
              {processing ? 'Entrando...' : 'Login'}
            </button>
          </form>
            <div className="mt-6 text-indigo-700 text-center">
              <a href="/VerifyEmail" className="hover:underline">
              Esqueci minha senha

              </a>
            </div>
          {/* Sign up  Link */}
          <div className="mt-6 text-indigo-700 text-center">         
            <a href="/register" className="hover:underline">
              Registre-se

            </a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}