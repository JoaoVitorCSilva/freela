import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';

export default function CreateEmpresa() {
    // useForm gerencia tudo: dados, erros, estado de processamento, etc.
    const { data, setData, post, processing, errors, wasSuccessful, reset } = useForm({
        nome_empresa: '',
        email_contato: '',
        telefone_whatsapp: '',
        logo_url: null, // Para arquivos, o valor inicial é null
    });

    // Manipulador de submissão do formulário.
    const handleSubmit = (e) => {
        e.preventDefault();
        // A função 'post' do useForm faz todo o trabalho pesado!
        // Ela envia os dados, incluindo o arquivo, com os cabeçalhos corretos.
        post('/empresas', {
            // onSuccess é chamado quando o backend responde com sucesso.
            onSuccess: () => {
                // 'reset' limpa os campos do formulário após o sucesso.
                reset(); 
            },
        });
    };

    // Efeito para mostrar a mensagem de sucesso e depois limpá-la.
    // Isso é opcional, mas uma boa prática de UX.
    useEffect(() => {
        if (wasSuccessful) {
            // Você pode usar uma notificação toast aqui ou um estado simples.
            console.log('Empresa criada com sucesso!');
        }
    }, [wasSuccessful]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100/50 p-4">
            <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-xl">
                <form onSubmit={handleSubmit}>
                    {wasSuccessful && (
                        <div className="mb-4 text-sm text-green-700 bg-green-100 p-3 rounded-md">
                            Empresa criada com sucesso!
                        </div>
                    )}

                    <div className="mb-6">
                        <label htmlFor="nome_empresa" className="block mb-2 text-sm font-semibold text-gray-700">
                            Nome da Empresa
                        </label>
                        <input
                            type="text"
                            id="nome_empresa"
                            name="nome_empresa"
                            value={data.nome_empresa}
                            // O segundo argumento de setData é o nome do campo.
                            onChange={(e) => setData('nome_empresa', e.target.value)}
                            placeholder="Nome da sua empresa"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        {/* O objeto 'errors' é preenchido automaticamente pelo useForm */}
                        {errors.nome_empresa && <p className="mt-1 text-sm text-red-500">{errors.nome_empresa}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email_contato" className="block mb-2 text-sm font-semibold text-gray-700">
                            Email de Contato
                        </label>
                        <input
                            type="email"
                            id="email_contato"
                            name="email_contato"
                            value={data.email_contato}
                            onChange={(e) => setData('email_contato', e.target.value)}
                            placeholder="contato@empresa.com"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        {errors.email_contato && <p className="mt-1 text-sm text-red-500">{errors.email_contato}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="telefone_whatsapp" className="block mb-2 text-sm font-semibold text-gray-700">
                            Telefone WhatsApp
                        </label>
                        <input
                            type="tel"
                            id="telefone_whatsapp"
                            name="telefone_whatsapp"
                            value={data.telefone_whatsapp}
                            onChange={(e) => setData('telefone_whatsapp', e.target.value)}
                            placeholder="(00) 00000-0000"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        {errors.telefone_whatsapp && <p className="mt-1 text-sm text-red-500">{errors.telefone_whatsapp}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="logo_url" className="block mb-2 text-sm font-semibold text-gray-700">
                            Logo da Empresa (Opcional)
                        </label>
                        <input
                            type="file"
                            id="logo_url"
                            // Para arquivos, use `setData` com o objeto File do evento.
                            onChange={(e) => setData('logo_url', e.target.files[0])}
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                        />
                        {errors.logo_url && <p className="mt-1 text-sm text-red-500">{errors.logo_url}</p>}
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            // 'processing' é o equivalente a 'loading'
                            disabled={processing}
                            className="w-full py-3 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {processing ? 'Salvando...' : 'Criar Empresa'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}