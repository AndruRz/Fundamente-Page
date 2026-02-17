/* ============================================
   DATOS DE ALIANZAS ESTRATÉGICAS
   ============================================ */

const alianzasData = [
    {
        id: 'alianza-1',
        nombre: 'Joshua',
        pais: 'Suiza',
        rol: '',
        imagen: './public/img/suiza1.jpeg', // Reemplazar con imagen real
        descripcion: 'Desde Zurich, Joshua coordina donaciones de material educativo y deportivo.',
        contribuciones: ['Material educativo', 'Equipos deportivos', 'Recursos económicos']
    },
];

// Exportar datos para uso en JavaScript
if (typeof module !== 'undefined' && module.exports) {
    module.exports = alianzasData;
}