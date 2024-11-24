export default
function generateCode(){
    let codigo = '';
    // Cadena de caracteres para generar código
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // longitud del codigo de reserva
    const longitudCodigo = 6;
    /**
     * Para generar el código, utiliza un bucle for para añadir un nuevo caracter
     * al codigo (originalmente vacio) hasta llegar al nro de longitud
     */
    for (let i = 0; i < longitudCodigo; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }

    return codigo;
}