<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Declarando controladores
use App\Http\Controllers\CitaController;
use App\Http\Controllers\DiagnosticoController;
use App\Http\Controllers\MascotaController;
use App\Http\Controllers\TipoCitaController;
use App\Http\Controllers\TipoUsuarioController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//***********ruta para acceder al backend


//ruta a metodos del controller login
Route::resource('vetya-login', LoginController::class);
Route::post('/login', [LoginController::class, 'login']);

//ruta a metodos del controller citas
Route::resource('vetya-citas', CitaController::class);

//ruta a metodos del controller diagnosticos
Route::resource('vetya-diagnosticos', DiagnosticoController::class);

//ruta a metodos del controller mascotas
Route::resource('vetya-mascotas', MascotaController::class);

//ruta a metodos del controller tipo citas
Route::resource('vetya-tipocitas', TipoCitaController::class);

//ruta a metodos del controller tipo usuarios
Route::resource('vetya-tipousuarios', TipoUsuarioController::class);

//ruta a metodos del controller usuarios
Route::resource('vetya-usuarios', UsuarioController::class);

