import React, { useState, useEffect } from 'react';
import VagaCard from '@/Components/VagaCard'; // Ajuste o nome do arquivo se necessário
import HeaderIntDark from '@/Components/HeaderIntDark';
import Footer from '@/Components/Footer';

export default function index() {
  const [vagas, setVagas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/vagas')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na rede ou no servidor');
        }
        return response.json();
      })
      .then(data => {
        setVagas(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Carregando vagas...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro: {error}</div>;
  }

  return (
    <main>
      <div>
        <HeaderIntDark />

      </div>
      <div className='mt-11'>
        <h1 className=' text-3xl text-center text-green-800'>O que é o projeto Freela?</h1>
        <p className='text-xl text-center mt-2 mx-96'> O projeto freela foi desenvolvido com o intuito de ajudar empreendedores e microempreendedores a emcontrar mão de obra de forma ágil e segura e a trabalhadores encontrarem vagas em suas áreas, seja ela qual for. Estamos animmados e engajados no projeto afim de criar novas oportunidades de mercado para todos.</p>

      </div>
      <div className=' mt-14 bg-slate-90'>
        <h2 className='text-3xl text-center mt-24'>Lista de Vagas</h2>
        {/* <a href="/vagas/create" className="btn btn-primary" style={{ width: '80px' }}>Novo</a> */}
        <br />
        <br />
        {/* Aqui você vai iterar sobre o array 'vagas' e renderizar um 'VagaCard' para cada item */}
        <div className=''>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-10/12 center mx-auto ">
            {vagas.map(vaga => (
              <VagaCard key={vaga.id} vaga={vaga} />
            ))}
          </div>
        </div>
            <div className='mt-14'>
              <Footer />
            </div>
      </div>
    </main>
  );
}