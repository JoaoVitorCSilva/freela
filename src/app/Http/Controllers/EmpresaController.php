<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Empresa;
use Inertia\Inertia; // Importante: Adicione o use para Inertia

class EmpresaController extends Controller
{
    /**
     * Exibe a lista de empresas.
     * (Adicionei este método como exemplo de para onde redirecionar)
     */
    public function index()
    {
        return Inertia::render('Empresas/index', [
            'empresas' => Empresa::latest()->get(),
        ]);
    }

    /**
     * Mostra o formulário para criar uma nova empresa.
     */
    public function create()
    {
        // Apenas renderiza o componente React/Vue do formulário.
        return Inertia::render('Empresas/Create');
    }

    /**
     * Armazena uma nova empresa no banco de dados.
     */
    public function store(Request $request)
    {
        // Validação dos dados (seu código já está correto aqui).
        $validatedData = $request->validate([
            'nome_empresa' => 'required|string|max:255|unique:empresas',
            'email_contato' => 'required|email|unique:empresas,email_contato',
            'telefone_whatsapp' => 'required|string|max:20',
            'logo_url' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Adicionei svg se precisar
        ]);

        // Salva a logo se ela existir (seu código já está correto aqui).
        if ($request->hasFile('logo_url')) {
            $path = $request->file('logo_url')->store('logos', 'public');
            $validatedData['logo_url'] = $path;
        }

        // Cria a empresa no banco de dados.
        Empresa::create($validatedData);

        // --- A CORREÇÃO ESTÁ AQUI ---
        // Em vez de retornar JSON, redirecione para a página de listagem
        // com uma mensagem de sucesso "flash".
        return redirect()->route('vagas.index')
                         ->with('success', 'Empresa cadastrada com sucesso!');
    }
}