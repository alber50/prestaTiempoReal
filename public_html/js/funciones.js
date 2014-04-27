/* 
 Informax  2014
 Licencia: Open source
 Uso: No puede usarse con fines mercantiles
 */
url = 'http://megasur.informax.com.es/modules/imaxrealTime/';
pedidos = 0;
clientes = 0;
$(function() {
    setInterval(function() {
        actualizar()
    }, 5000);
});
function actualizar() {
    $.getJSON(url + 'imaxrealTimeRemoto.php?callback=?', function(respuesta) {
        console.log(respuesta);
        respuestaPedidos = respuesta.pedidosHoy;
        clientesNuevos = respuesta.clientes.clientesAltaHoy;
        clientesDatos = respuesta.clientes;
        $('#infoTiempoRealSinIva').val(respuestaPedidos.ivawIncluido);
        $('#infoTiempoRealConIva').val(respuestaPedidos.ivaIncluido);
        $('#infoTiempoRealPagado').val(respuestaPedidos.totalPagado);  
        if (respuestaPedidos.numPedidos > 0){
           $('#ventasDiarias').html( respuestaPedidos.totalPagado + ' € ');
           $('#pedidosNuevos').html( respuestaPedidos.numPedidos + ' Pedidos');
           if(pedidos != respuestaPedidos.numPedidos){
               console.log("Ha cambiado el valor del Pedido");
               console.log(pedidos);
               pedidos = respuestaPedidos.numPedidos;
           }
        }    
        ventasDiarias
        if (clientesNuevos > 0 ){
            $('#clientesNuevos').html(+ clientesNuevos +' clientes nuevos');
             if(clientes != clientesNuevos){
               console.log("Hay clientes Nuevos");
               console.log(clientes);
               clientes = clientesNuevos;
           }
        }
    });

}
