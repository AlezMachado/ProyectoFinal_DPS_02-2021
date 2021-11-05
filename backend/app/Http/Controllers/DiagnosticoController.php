<?php

namespace App\Http\Controllers;

//declarando modelo a usar en controller
use App\Models\Diagnostico;

use Illuminate\Http\Request;

class DiagnosticoController extends Controller
{
    
    public function index()
    {
        //seleccionando todos los registros de la tabla por medio del modelo
        $diagnosticos = Diagnostico::all();
        if(is_null($diagnosticos) || $diagnosticos == ''){
            //$respuesta = ['resultado'=>'NO'];
            $code = 204;//peticion sin contenido
        }else{
            //$respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }
        
        //retornando json para frontend
        return response()->json($diagnosticos,$code);
    }

    public function store(Request $request)
    {
        //creando obj del modelo Cliente para guardar nuevo registro
        $diagnostico = new Diagnostico();
        //asignando datos del request al objeto
        $diagnostico->cliente_id = $request->input('cliente_id');
        $diagnostico->nombre_mascota = $request->input('nombre_mascota');
        $diagnostico->especie = $request->input('especie');
        $diagnostico->raza = $request->input('raza');
        $diagnostico->edad = $request->input('edad');
        $diagnostico->sexo = $request->input('sexo');
        $diagnostico->color = $request->input('color');
        $diagnostico->vacunacion = $request->input('vacunacion');
        $diagnostico->motivo = $request->input('motivo');
        $diagnostico->vacunas_realizadas = $request->input('vacunas_realizadas');
        $diagnostico->peso = $request->input('peso');
        $diagnostico->pulso = $request->input('pulso');
        $diagnostico->temperatura = $request->input('temperatura');
        $diagnostico->diagnostico_final = $request->input('diagnostico_final');
        $diagnostico->tratamiento = $request->input('tratamiento');
        $diagnostico->empleado_id = $request->input('empleado_id');
        
        
        //guardando diagnostico
        if($diagnostico->save()){
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
        $diagnostico = Diagnostico::find($id);
        return json_encode($diagnostico);
    }

    public function update(Request $request, $id)
    {
        //creando obj del modelo Diagnostico para guardar nuevo registro
        $diagnostico = Diagnostico::find($id);
        //asignando datos del request al objeto
        $diagnostico->cliente_id = $request->input('cliente_id');
        $diagnostico->nombre_mascota = $request->input('nombre_mascota');
        $diagnostico->especie = $request->input('especie');
        $diagnostico->raza = $request->input('raza');
        $diagnostico->edad = $request->input('edad');
        $diagnostico->sexo = $request->input('sexo');
        $diagnostico->color = $request->input('color');
        $diagnostico->vacunacion = $request->input('vacunacion');
        $diagnostico->motivo = $request->input('motivo');
        $diagnostico->vacunas_realizadas = $request->input('vacunas_realizadas');
        $diagnostico->peso = $request->input('peso');
        $diagnostico->pulso = $request->input('pulso');
        $diagnostico->temperatura = $request->input('temperatura');
        $diagnostico->diagnostico_final = $request->input('diagnostico_final');
        $diagnostico->tratamiento = $request->input('tratamiento');
        $diagnostico->empleado_id = $request->input('empleado_id');
        //guardando diagnostico
        if($diagnostico->save()){
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
        $diagnostico = Diagnostico::find($id);
        if($diagnostico->delete()){
            $respuesta = ['resultado'=>'OK'];
            $code = 200;//peticion con exito
        }else{
            $respuesta = ['resultado'=>'NO'];
            $code = 400;//peticion sin exito
        }
        return response()->json($diagnostico,$code);
    }
}
