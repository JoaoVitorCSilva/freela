<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\VagaController;

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

// Esta rota vai renderizar o componente React
Route::get('/Vagas', function () {
    return Inertia::render('Vagas/index');
});
Route::get('/Teste', function () {
    return Inertia::render('Teste/index');
});


// Esta rota servirá como a API para o seu componente React
Route::get('/api/vagas', [VagaController::class, 'index']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // Mantenha as rotas de recurso para as operações CRUD que você fará no backend
    Route::resource('vaga', VagaController::class)->except(['index']);
});

require __DIR__.'/auth.php';