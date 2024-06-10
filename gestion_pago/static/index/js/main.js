/*$( document ).ready(function() {
    // Handler for .ready() called.
    alert('Todo bien');
  });*/


function eliminarEquipo(id) {
  document.getElementById("id_equipo_eliminar").value = id;
}

function eliminarArea(id) {
  document.getElementById("id_area_eliminar").value = id;
}

function marcarBajado(id) {
  document.getElementById("id_trabajo_materiales").value = id;
}

function editarEquipo(id, area, codigo, descripcion) {
  document.getElementById("id_equipo_editar").value = id;
  document.getElementById("area_editar").value = area;
  document.getElementById("codigo_editar").value = codigo;
  document.getElementById("descripcion_editar").value = descripcion;
}

function editarArticulo(art_id, art_insumo, art_marca, art_descripcion, art_unidad_medida, art_cantidad, articulo) {
  document.getElementById("id_articulo_editar").value = art_id;
  document.getElementById("art_insumo").value = art_insumo;
  document.getElementById("art_marca").value = art_marca;
  document.getElementById("art_descripcion").value = art_descripcion;
  document.getElementById("art_unidad_medida").value = art_unidad_medida;
  document.getElementById("art_cantidad").value = art_cantidad;

}

function editarCentroPractica(cep_id, cep_nombre, cep_direccion, cep_bodega, cep_contacto_bodega, cep_carrera) {
  document.getElementById("codigo_editar").value = cep_id;
  document.getElementById("centro_editar").value = cep_nombre;
  document.getElementById("direccion_editar").value = cep_direccion;
  document.getElementById("bodega_editar").value = cep_bodega;
  document.getElementById("contacto_editar").value = cep_contacto_bodega;
  document.getElementById("carrera_editar").value = cep_carrera;

}

function historialPreventivo(id,solicitadoh,supervisado,responsable, subtotalpiezas, subtotalmo, fecha) {
  
  document.getElementById("hist_preventivo_editar").value = id;
  document.getElementById("hist_solicitadoh").value = solicitadoh;
  document.getElementById("hist_supervisadoh").value = supervisado;
  document.getElementById("hist_responsable").value = responsable;
  document.getElementById("hist_subtotalpiezas").value = subtotalpiezas;
  document.getElementById("hist_subtotalmo").value = subtotalmo;
  document.getElementById("hist_fecha_programada_editar").value = fecha;
}

function editarEntrada(id, fecha, contacto, piezas, comentarios, total) {
  
  document.getElementById("id_preventivo_editar").value = id;
  document.getElementById("fecha_editar").value = fecha;
  document.getElementById("contacto_editar").value = contacto;
  document.getElementById("comentarios_editar").value = comentarios;
  document.getElementById("piezas_editar").value = piezas;
  document.getElementById("total_editar").value = total;
}

function editarCorrectivo(id, equipo, fecha, solicitado, estado, responsable, subtotalmo, supervisado, falla) {
  
  document.getElementById("id_correctivo_editar").value = id;
  document.getElementById("equipo_editar").value = equipo;
  document.getElementById("fecha_editar").value = fecha;
  document.getElementById("solicitadoc_editar").value = solicitado;
  document.getElementById("estado_editar").value = estado;
  document.getElementById("responsablec_editar").value = responsable;
  document.getElementById("subtotalmo_editar").value = subtotalmo;
  document.getElementById("supervisadoc_editar").value = supervisado;
  document.getElementById("falla_editar").value = falla;
}

function eliminarCorrectivo(id) {
  document.getElementById("id_correctivo_eliminar").value = id;
}

function historialCorrectivo(id,solicitadoh,supervisado,responsable, subtotalpiezas, subtotalmo, fecha) {
  
  document.getElementById("hist_correctivo_editar").value = id;
  document.getElementById("hist_solicitadoh").value = solicitadoh;
  document.getElementById("hist_supervisadoh").value = supervisado;
  document.getElementById("hist_responsable").value = responsable;
  document.getElementById("hist_subtotalpiezas").value = subtotalpiezas;
  document.getElementById("hist_subtotalmo").value = subtotalmo;
  document.getElementById("hist_fecha_programada_editar").value = fecha;
}

function eliminarPreventivo(id) {
document.getElementById("id_preventivo_eliminar").value = id;
}

function eliminarArticulo(art_id) {
  document.getElementById("id_articulo_eliminar").value = art_id;
}

function editarPersonal(id, nombre, telefono, cargo) {
  document.getElementById("id_personal_editar").value = id;
  document.getElementById("nombre_editar").value = nombre;
  document.getElementById("telefono_editar").value = telefono;
  document.getElementById("cargo_editar").value = cargo;
}

function eliminarPersonal(id) {
  document.getElementById("id_personal_eliminar").value = id;
}

function borrarContent(){
  document.getElementById("search").value = "";
}

function seleccionarCliente(id, nombre){
 document.getElementById("id_cliente").value = id;
 document.getElementById("cliente").value = nombre;
}

function activarEspera(){
  const btn = document.getElementById("btn");
  btn.innerHTML = 'Generando ... <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
  btn.disabled = true;
}

$(document).ready(function () {
  // Inicializar la primera tabla
  var table1 = $('#estandar').DataTable({
    "language": {
      "url": "../static/index/js/idiom.json"
    },
    "processing": true,
    "serverSide": true,
    "paging": true,
    "lengthMenu": [[10, 20, 40, 80, 100], [10, 20, 40, 80, 100]],
    "pageLength": 20,
  });

});
 