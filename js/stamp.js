// stamp.js - Motor de sellado local
function aplicarSello(imagenURL) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    const selloBuhito = new Image();
    
    // Ruta donde pondremos tu sello
    selloBuhito.src = 'assets/img/sello.png'; 
    
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        // Dibujamos el sello en la esquina inferior derecha
        ctx.drawImage(selloBuhito, canvas.width - 150, canvas.height - 150, 140, 140);
        
        // Escribimos la fecha y hora exacta
        const ahora = new Date();
        const texto = "Veritas: " + ahora.toLocaleDateString() + " " + ahora.toLocaleTimeString();
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(texto, 20, canvas.height - 20);
        
        // Descargamos el resultado
        const link = document.createElement('a');
        link.download = 'documento-sellado.png';
        link.href = canvas.toDataURL();
        link.click();
    };
    img.src = imagenURL;
}
