function encriptar() {
    const texto = document.getElementById('texto').value;
    const encriptado = texto
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
    document.getElementById('resultado').value = encriptado;

  }
  
  function desencriptar() {
    const texto = document.getElementById('texto').value;
    const desencriptado = texto
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
    document.getElementById('resultado').value = desencriptado;
  }
  
  function copiarTexto() {
    const resultado = document.getElementById('resultado').value;
    navigator.clipboard.writeText(resultado).then(function() {
        alert('Resultado copiado al portapapeles');
    }, function() {
        alert('No se pudo copiar el resultado');
    });
}

  