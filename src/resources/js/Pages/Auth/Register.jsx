// resources/js/Pages/Auth/Register.jsx

import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';

export default function RegisterCard() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('register'));
  };

  return (
    <>
      <Head title="Registro" />
      <div className="bg-sky-100 flex justify-center items-center h-screen">
        {/* Left: Image */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src="/img/bg_login.jpg"
            alt="Placeholder"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Right: Register Form */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <div className='mx-24'>
          <h1 className="text-2xl font-semibold mb-4">Registro</h1>
          <form onSubmit={submit}>
            {/* Name Input */}
            <div className="mb-4 bg-sky-100">
              <label htmlFor="name" className="block text-gray-600">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
              {errors.name && (
                <div className="text-red-500 text-sm mt-1">{errors.name}</div>
              )}
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800">
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
            {/* Password Confirmation Input */}
            <div className="mb-4">
              <label htmlFor="password_confirmation" className="block text-gray-800">
                Confirmar Senha
              </label>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                value={data.password_confirmation}
                onChange={(e) => setData('password_confirmation', e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
              {errors.password_confirmation && (
                <div className="text-red-500 text-sm mt-1">{errors.password_confirmation}</div>
              )}
            </div>
            {/* Register Button */}
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
              disabled={processing}
            >
              {processing ? 'Registrando...' : 'Registrar'}
            </button>
          </form>
          {/* Já tem registro? Link */}
          <div className="mt-6 text-indigo-700 text-center">
            <p>
              Você já tem registro?{' '}
              <a href={route('login')} className="hover:underline">
                Entre aqui
              </a>
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}