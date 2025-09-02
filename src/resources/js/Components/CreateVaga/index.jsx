import React, { useState } from 'react';

export default function Create() {
    // Usando useState para gerenciar o estado do formulário.
    const [data, setData] = useState({
        id_empresa: '',
        titulo_vaga: '',
        descricao_vaga: '',
        valor_freelancer: '',
        periodo_pagamento: 'por_hora',
        endereco: '',
        horario_trabalho: '',
        beneficios: '',
        status: 'ativa',
    });

    // Estados para processamento e erros.
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(null);

    // Manipulador de mudança para todos os campos do formulário.
    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
        setMessage(null);

        try {
            const response = await fetch('/api/vagas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                // Se a resposta não for OK, assuma que são erros de validação
                setErrors(result.errors || {});
                setMessage('Erro ao salvar a vaga. Verifique os campos.');
            } else {
                setMessage('Vaga salva com sucesso!');
                // Limpa o formulário após o sucesso
                setData({
                    id_empresa: '',
                    titulo_vaga: '',
                    descricao_vaga: '',
                    valor_freelancer: '',
                    periodo_pagamento: 'por_hora',
                    endereco: '',
                    horario_trabalho: '',
                    beneficios: '',
                    status: 'ativa',
                });
            }
        } catch (error) {
            console.error('Falha na requisição:', error);
            setMessage('Ocorreu um erro inesperado.');
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="flex items-center justify-center p-12 bg-gray-100 min-h-screen">
            <div className="mx-auto w-full max-w-[550px] bg-white rounded-lg shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Criar Nova Vaga</h1>

                {message && (
                    <div className={`p-4 mb-4 text-sm rounded-lg ${message.includes('sucesso') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* Título da Vaga */}
                    <div className="mb-5">
                        <label htmlFor="titulo_vaga" className="mb-3 block text-base font-medium text-[#07074D]">
                            Título da Vaga
                        </label>
                        <input
                            type="text"
                            name="titulo_vaga"
                            id="titulo_vaga"
                            value={data.titulo_vaga}
                            onChange={handleDataChange}
                            placeholder="Desenvolvedor Backend Júnior"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        {errors.titulo_vaga && <div className="text-red-500 text-sm mt-1">{errors.titulo_vaga}</div>}
                    </div>

                    {/* Descrição da Vaga */}
                    <div className="mb-5">
                        <label htmlFor="descricao_vaga" className="mb-3 block text-base font-medium text-[#07074D]">
                            Descrição da Vaga
                        </label>
                        <textarea
                            name="descricao_vaga"
                            id="descricao_vaga"
                            value={data.descricao_vaga}
                            onChange={handleDataChange}
                            rows="4"
                            placeholder="Detalhes sobre a vaga e responsabilidades..."
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                        {errors.descricao_vaga && <div className="text-red-500 text-sm mt-1">{errors.descricao_vaga}</div>}
                    </div>

                    <div className="-mx-3 flex flex-wrap">
                        {/* Valor Freela */}
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="valor_freelancer" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Valor Freela
                                </label>
                                <input
                                    type="number"
                                    name="valor_freelancer"
                                    id="valor_freelancer"
                                    value={data.valor_freelancer}
                                    onChange={handleDataChange}
                                    placeholder="0.00"
                                    step="0.01"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                                {errors.valor_freelancer && <div className="text-red-500 text-sm mt-1">{errors.valor_freelancer}</div>}
                            </div>
                        </div>
                        {/* Período de Pagamento */}
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="periodo_pagamento" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Período de Pagamento
                                </label>
                                <select
                                    name="periodo_pagamento"
                                    id="periodo_pagamento"
                                    value={data.periodo_pagamento}
                                    onChange={handleDataChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                >
                                    <option value="por_hora">Por Hora</option>
                                    <option value="por_dia">Por Dia</option>
                                    <option value="por_projeto">Por Projeto</option>
                                </select>
                                {errors.periodo_pagamento && <div className="text-red-500 text-sm mt-1">{errors.periodo_pagamento}</div>}
                            </div>
                        </div>
                    </div>

                    {/* Endereço */}
                    <div className="mb-5">
                        <label htmlFor="endereco" className="mb-3 block text-base font-medium text-[#07074D]">
                            Endereço
                        </label>
                        <input
                            type="text"
                            name="endereco"
                            id="endereco"
                            value={data.endereco}
                            onChange={handleDataChange}
                            placeholder="Rua, Cidade, Estado"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        {errors.endereco && <div className="text-red-500 text-sm mt-1">{errors.endereco}</div>}
                    </div>

                    {/* Horário de Trabalho */}
                    <div className="mb-5">
                        <label htmlFor="horario_trabalho" className="mb-3 block text-base font-medium text-[#07074D]">
                            Horário de Trabalho
                        </label>
                        <input
                            type="text"
                            name="horario_trabalho"
                            id="horario_trabalho"
                            value={data.horario_trabalho}
                            onChange={handleDataChange}
                            placeholder="Ex: 8h às 17h, flexível"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        {errors.horario_trabalho && <div className="text-red-500 text-sm mt-1">{errors.horario_trabalho}</div>}
                    </div>

                    {/* Benefícios */}
                    <div className="mb-5">
                        <label htmlFor="beneficios" className="mb-3 block text-base font-medium text-[#07074D]">
                            Benefícios (Opcional)
                        </label>
                        <input
                            type="text"
                            name="beneficios"
                            id="beneficios"
                            value={data.beneficios}
                            onChange={handleDataChange}
                            placeholder="Vale-refeição, Plano de saúde, etc."
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        {errors.beneficios && <div className="text-red-500 text-sm mt-1">{errors.beneficios}</div>}
                    </div>

                    {/* Status */}
                    <div className="mb-5">
                        <label htmlFor="status" className="mb-3 block text-base font-medium text-[#07074D]">
                            Status
                        </label>
                        <select
                            name="status"
                            id="status"
                            value={data.status}
                            onChange={handleDataChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                            <option value="ativa">Ativa</option>
                            <option value="pausada">Pausada</option>
                            <option value="concluida">Concluída</option>
                        </select>
                        {errors.status && <div className="text-red-500 text-sm mt-1">{errors.status}</div>}
                    </div>

                    {/* ID da Empresa (campo oculto ou gerenciado de outra forma) */}
                    <input type="hidden" name="id_empresa" value={data.id_empresa} />

                    <div>
                        <button
                            type="submit"
                            disabled={processing}
                            className={`hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none ${
                                processing ? 'cursor-not-allowed opacity-50' : ''
                            }`}
                        >
                            {processing ? 'Salvando...' : 'Salvar Vaga'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
