<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiagnosticosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diagnosticos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('cita_id')->unsigned();         
            $table->string('peso');
            $table->string('pulso');
            $table->string('temperatura');
            $table->text('diagnostico_final');
            $table->text('tratamiento');
            $table->timestamps();
            $table->foreign('cita_id')->references('id')->on('citas');

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
        Schema::dropIfExists('diagnosticos');
    }
}
