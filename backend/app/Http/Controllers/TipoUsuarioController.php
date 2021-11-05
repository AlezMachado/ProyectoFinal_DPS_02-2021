<?php

namespace App\Http\Controllers;
//declarando modelo a usar en controller
use App\Models\TipoUsuario;

use Illuminate\Http\Request;

class TipoUsuarioController extends Controller
{
    public function index()
    {
        //seleccionando todos los registros de la tabla por medio del modelo
        $tipousuarios = TipoUsuario::all();
        if(is_null($tipousuarios) || $tipousuarios == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($tipousuarios,$code);
    }

    public function update(Request $request, $id)
    {
        //seleccionando registro segun id para modifircarlo
        $tipo = TipoUsuario::find($id);
        //asignando datos del request al objeto
        $tipo->detalle = $request->input('detalle');
        
        //guardando cambios en el registro
        if($tipo->save()){
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
        $usuario = TipoUsuario::find($id);
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
