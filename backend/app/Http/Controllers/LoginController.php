<?php

namespace App\Http\Controllers;

//declarando modelo a usar en controller
use App\Models\Usuario;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $correoLogin = $request->input('correo');
        $passwordLogin = $request->input('password');

        //seleccionando todos los registros de la tabla por medio del modelo
        $usuario = Usuario::where('correo', $correoLogin)->where('password', $passwordLogin)->first();
        if(is_null($usuario) || $usuario == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($usuario,$code);
    }
}
