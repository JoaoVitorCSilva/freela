export default function Banner() {
  const backgroundImageUrl = '/img/bg_banner.jpg'; 


    return (

<section class="bg-white lg:grid lg:h-screen lg:place-content-center "
  style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>

  <div class="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    
    <div class="max-w-prose">
      <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
        Freela, absolutamente do
        <strong class="text-indigo-600"> seu </strong>
        jeito
      </h1>

      <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
        O freela é um projeto voltado para atender as necessidades de freelancers e clientes, oferecendo uma plataforma simples e eficiente.
      </p>

      <div class="mt-4 flex gap-4 sm:mt-6">
        <a
          class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          href="/Teste/"
        >
          Quero postar uma vaga
        </a>

        <a
          class="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
          href="/register"
        >
          Quero ver as vagas
        </a>
      </div>
    </div>
  </div>
</section>
    );
  }