<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VagaController;
use App\Http\Controllers\EmpresaController;

// Rotas públicas (acesso livre)
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Páginas React
Route::get('/Vagas', fn() => Inertia::render('Vagas/index'));
Route::get('/Empresa', fn() => Inertia::render('Empresa/index'));
Route::get('/Transicao', fn() => Inertia::render('Transicao/index'));
Route::get('/Novavaga', fn() => Inertia::render('Novavaga/index'));

// Rotas de formulário
Route::get('/empresas/create', [EmpresaController::class, 'create'])->name('empresas.create');
Route::post('/empresas', [EmpresaController::class, 'store'])->name('empresas.store');

// Rota para listar empresas
Route::get('/empresas', [EmpresaController::class, 'index'])->name('empresas.index');

// Rotas de Vagas
Route::get('/vagas', [VagaController::class, 'index'])->name('vagas.index');
Route::get('/vagas/create', [VagaController::class, 'create'])->name('vagas.create');
Route::post('/vagas', [VagaController::class, 'store'])->name('vagas.store');

// Rotas da API
Route::get('/api/vagas', [VagaController::class, 'index']);

// Rotas protegidas (middleware auth)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // Rotas de recurso para operações CRUD (exceto index, que está na API)
    Route::resource('vaga', VagaController::class)->except(['index']);
});

require __DIR__.'/auth.php';