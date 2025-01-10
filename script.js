function guardarDatos() {
    var cuenta = document.getElementById('cuenta').value;
    var comprador = document.getElementById('comprador').value;
    var fechaCompra = new Date();
    var fechaCompraFormateada = fechaCompra.toLocaleDateString() + ' ' + fechaCompra.toLocaleTimeString();
    var fechaVencimiento = new Date(fechaCompra);
    fechaVencimiento.setDate(fechaVencimiento.getDate() + 29);
    var fechaVencimientoFormateada = fechaVencimiento.toLocaleDateString() + ' ' + fechaVencimiento.toLocaleTimeString();
    var proveedor = "VENDE Y GANA";

    if (cuenta && comprador) {
        var tableBody = document.getElementById('datos-body');
        var row = document.createElement('tr');

        var cellCuenta = document.createElement('td');
        var cellComprador = document.createElement('td');
        var cellFechaCompra = document.createElement('td');
        var cellFechaVencimiento = document.createElement('td');
        var cellProveedor = document.createElement('td');
        var cellCopiar = document.createElement('td');

        cellCuenta.textContent = cuenta;
        cellComprador.textContent = comprador;
        cellFechaCompra.textContent = fechaCompraFormateada;
        cellFechaVencimiento.textContent = fechaVencimientoFormateada;
        cellProveedor.textContent = proveedor;
        cellCopiar.innerHTML = '<button onclick="copiarDatos(this)">Copiar</button>';

        row.appendChild(cellCuenta);
        row.appendChild(cellComprador);
        row.appendChild(cellFechaCompra);
        row.appendChild(cellFechaVencimiento);
        row.appendChild(cellProveedor);
        row.appendChild(cellCopiar);

        tableBody.appendChild(row);

        document.getElementById('cuenta').value = '';
        document.getElementById('comprador').value = '';
    } else {
        alert('Por favor, ingrese todos los datos.');
    }
}

function copiarDatos(button) {
    var row = button.closest('tr');
    var cuenta = row.cells[0].textContent;
    var comprador = row.cells[1].textContent;
    var fechaCompra = row.cells[2].textContent;
    var fechaVencimiento = row.cells[3].textContent;
    var datos = `Cuenta: ${cuenta}\nComprador: ${comprador}\nFecha de Compra: ${fechaCompra}\nFecha de Vencimiento: ${fechaVencimiento}\n\n**GRACIAS POR SU COMPRA!** 😊🎉`;

    navigator.clipboard.writeText(datos).then(function() {
        alert('Datos copiados al portapapeles:\n' + datos);
    }, function(err) {
        console.error('Error al copiar los datos: ', err);
    });
}
