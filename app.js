// Obtener los nuevos valores desde las etiquetas HTML
var nuevoCodigoTurno = document.querySelector('.turno').textContent;
var nuevaFechaActualInicio = document.querySelector('.fechaActualInicio').textContent;
var nuevoUsuario = document.querySelector('.usuario').textContent;
var nuevoServicio = document.querySelector('.servicio').textContent;

// Seleccionar los elementos donde se insertarán los nuevos valores
var usuarioElement = document.querySelector('.usuarioShow');
var fechaActualInicioElement = document.querySelector('.FechaActualInicioShow');
var codigoTurnoElement = document.querySelector('.ticket');
var servicioElement = document.querySelector('.servicioShow');

// Actualizar el contenido de los elementos seleccionados con los nuevos valores
usuarioElement.textContent = nuevoUsuario;
fechaActualInicioElement.textContent = nuevaFechaActualInicio;
codigoTurnoElement.textContent = nuevoCodigoTurno;
servicioElement.textContent = nuevoServicio;
