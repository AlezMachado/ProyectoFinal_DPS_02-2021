<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCitasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('citas', function (Blueprint $table) {
            $table->increments('id');
            $table->date('fecha');   
            $table->string('hora');     
            $table->string('motivo');     
            $table->string('estado');     
            $table->string('detalles');
            $table->integer('tipocita_id')->unsigned();       
            $table->integer('cliente_id')->unsigned();  
            $table->integer('empleado_id')->unsigned();     
            $table->integer('mascota_id')->unsigned(); 
            
            $table->foreign('tipocita_id')->references('id')->on('tipo_citas');
            $table->foreign('cliente_id')->references('id')->on('usuarios');
            $table->foreign('empleado_id')->references('id')->on('usuarios');
            $table->foreign('mascota_id')->references('id')->on('mascotas');
            $table->timestamps();
            $table->engine = "InnoDB";
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('citas');
    }
}
