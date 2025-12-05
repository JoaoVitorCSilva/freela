import { Link } from '@inertiajs/react';
import React from 'react';

export default function Banner() {
  const backgroundImageUrl = '/img/bg_banner.jpg'; 

  return (
    <section
      className="bg-white lg:grid lg:h-screen lg:place-content-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-prose">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Freela, absolutamente do
            <strong className="text-indigo-600"> seu </strong>
            jeito
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            O freela é um projeto voltado para atender as necessidades de freelancers e clientes, oferecendo uma plataforma simples e eficiente.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <Link
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="/login?redirect=/Transicao"
            >
              Quero postar uma vaga
            </Link>

            <Link
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              href="/login?redirect=/Vagas"
            >
              Quero ver as vagas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}