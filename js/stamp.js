// stamp.js - Motor de sellado digital naranja
function aplicarSello(imagenURL) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        // Estilo de reloj digital naranja y gigante
        const fecha = new Date().toLocaleString();
        ctx.fillStyle = "#FF6600"; // Color naranja potente
        ctx.font = "bold 60px 'Courier New', monospace"; // Tamaño 60px y letra estilo técnico
        
        // Dibujamos el texto en una posición fija (puedes ajustar el 50, 100 si necesitas moverlo)
        ctx.fillText("FECHA: " + fecha, 50, 100);
        
        // Guardamos el resultado
        const resultado = canvas.toDataURL("image/png");
        const enlace = document.createElement('a');
        enlace.href = resultado;
        enlace.download = 'documento-sellado.png';
        enlace.click();
    };
    img.src = imagenURL;
}
