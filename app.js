// Obtener el contenido de ShowTurno.html y actualizar los valores en index.html
fetch('ShowTurno.html')
    .then(response => response.text())
    .then(html => {
        // Convertir el HTML en elementos del DOM
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        
        // Obtener los nuevos valores desde las etiquetas HTML de ShowTurno.html
        var nuevoCodigoTurno = doc.querySelector('.turno').textContent;
        var nuevaFechaActualInicio = doc.querySelector('.fechaActualInicio').textContent;
        var nuevoUsuario = doc.querySelector('.usuario').textContent;
        var nuevoServicio = doc.querySelector('.servicio').textContent;

        // Seleccionar los elementos donde se insertarán los nuevos valores en index.html
        var usuarioElement = document.querySelector('.usuarioShow');
        var fechaActualInicioElement = document.querySelector('.FechaActualInicioShow');
        var codigoTurnoElement = document.querySelector('.ticket');
        var servicioElement = document.querySelector('.servicioShow');

        // Actualizar el contenido de los elementos seleccionados en index.html con los nuevos valores
        usuarioElement.textContent = nuevoUsuario;
        fechaActualInicioElement.textContent = nuevaFechaActualInicio;
        codigoTurnoElement.textContent = nuevoCodigoTurno;
        servicioElement.textContent = nuevoServicio;
    })
    .catch(error => console.error('Error:', error));
