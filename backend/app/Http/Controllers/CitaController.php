<?php

namespace App\Http\Controllers;

//declarando modelo a usar en controller
use App\Models\Cita;

use Illuminate\Http\Request;

class CitaController extends Controller
{

    public function index()
    {
        //seleccionando todos los registros de la tabla por medio del modelo
        $citas = Cita::all();
        if(is_null($citas) || $citas == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($citas,$code);
    }

    public function store(Request $request)
    {
        //creando obj del modelo Empleado para guardar nuevo registro
        $cita = new Cita();
        //asignando datos del request al objeto
        $cita->id_cliente = $request->input('id_cliente');
        $cita->nombre_mascota = $request->input('nombre_mascota');
        $cita->fecha_cita = $request->input('fecha_cita');
        $cita->hora = $request->input('hora');
        $cita->tipo_cita = $request->input('tipo_cita');
        $cita->especificaciones = $request->input('especificaciones');
        $cita->estado = $request->input('estado');
        $cita->id_empleado = $request->input('id_empleado');
        $cita->id_formulario = $request->input('id_formulario');
        //guardando cita
        if($cita->save()){
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
        $cita = Cita::find($id);
        return json_encode($cita);
    }

    public function update(Request $request, $id)
    {
        //seleccionando registro segun id para modifircarlo
        $cita =Cita::find($id);
        //asignando datos del request al objeto
        $cita->id_cliente = $request->input('id_cliente');
        $cita->nombre_mascota = $request->input('nombre_mascota');
        $cita->fecha_cita = $request->input('fecha_cita');
        $cita->hora = $request->input('hora');
        $cita->tipo_cita = $request->input('tipo_cita');
        $cita->especificaciones = $request->input('especificaciones');
        $cita->estado = $request->input('estado');
        $cita->id_empleado = $request->input('id_empleado');
        $cita->id_formulario = $request->input('id_formulario');
        //guardando cambios en el registro
        if($cita->save()){
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
        $cita = Cita::find($id);
        if($cita->delete()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($respuesta,$code);
    }
}
