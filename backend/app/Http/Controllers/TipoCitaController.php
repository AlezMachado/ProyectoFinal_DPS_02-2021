<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TipoCita;


class TipoCitaController extends Controller
{
    public function index()
    {
        //seleccionando todos los registros de la tabla por medio del modelo
        $tipocitas = TipoCita::all();
        if(is_null($tipocitas) || $tipocitas == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($tipocitas,$code);
    }

    public function store(Request $request)
    {
        //creando obj del modelo Usuario para guardar nuevo registro
        $tipousuarios = new TipoCita();
        //asignando datos del request al objeto
        $tipousuarios->detalle = $request->input('detalle');
       
        //guardando cliente
        if($tipousuarios->save()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);
    }

    public function update(Request $request, $id)
    {
        //seleccionando registro segun id para modifircarlo
        $tipo = TipoCita::find($id);
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
        $tipo = TipoCita::find($id);
        if($tipo->delete()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);
    }
}
