class Libro {
  constructor(titulo, autor, añoPublicacion) {
    this.titulo = titulo;
    this.autor = autor;
    this.añoPublicacion = añoPublicacion;
  }

  mostrarDetalles() {
    console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Año de Publicación: ${this.añoPublicacion}`);
  }
}

// Exporta la clase
module.exports = Libro;
