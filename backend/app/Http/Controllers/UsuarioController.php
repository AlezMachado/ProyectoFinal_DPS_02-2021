<?php

namespace App\Http\Controllers;

//declarando modelo a usar en controller
use App\Models\Usuario;

use Illuminate\Http\Request;

class UsuarioController extends Controller
{

    public function index()
    {
        //seleccionando todos los registros de la tabla por medio del modelo
        $usuarios = Usuario::all();
        if(is_null($usuarios) || $usuarios == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($usuarios,$code);
    }

    public function store(Request $request)
    {
        //creando obj del modelo Usuario para guardar nuevo registro
        $usuario = new Usuario();
        //asignando datos del request al objeto
        $usuario->nombres = $request->input('nombres');
        $usuario->apellidos = $request->input('apellidos');
        $usuario->correo = $request->input('correo');
        $usuario->telefono = $request->input('telefono');
        $usuario->password = $request->input('password');
        $usuario->tipousuario_id = $request->input('tipousuario_id');;
        //guardando cliente
        if($usuario->save()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);

    }

    public function show($id)
    {
        $usuario = Usuario::find($id);
        return json_encode($usuario);
    }

    public function update(Request $request, $id)
    {
        //seleccionando registro segun id para modifircarlo
        $usuario = Usuario::find($id);
        //asignando datos del request al objeto
        $usuario->nombres = $request->input('nombres');
        $usuario->apellidos = $request->input('apellidos');
        $usuario->correo = $request->input('correo');
        $usuario->telefono = $request->input('telefono');
        $usuario->password = $request->input('password');
        $usuario->categoria = $request->input('categoria');
        //guardando cambios en el registro
        if($usuario->save()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);
    }

    public function destroy($id)
    {
        //buscando registro por id
        $usuario = Usuario::find($id);
        if($usuario->delete()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);
    }
}
