function calcularPromedio() {
    let nombre = document.getElementById("name").value.trim();

    let c1 = document.getElementById("c1").value;
    let c2 = document.getElementById("c2").value;
    let c3 = document.getElementById("c3").value;

    // A. VALIDACIÓN DE INFORMACIÓN

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, ingrese el nombre del estudiante");
        return;
    }

    // Validar que las calificaciones tengan un valor
    if (c1 === "" || c2 === "" || c3 === "") {
        alert("Por favor, ingrese las tres calificaciones");
        return;
    }

    // Convertir las calificaciones a números
    c1 = Number(c1);
    c2 = Number(c2);
    c3 = Number(c3);

    // Validar que sean números válidos
    if (!Number.isFinite(c1) ||
        !Number.isFinite(c2) ||
        !Number.isFinite(c3)) {

        alert("Las calificaciones deben ser números válidos");
        return;
    }

    // Validar que las calificaciones estén entre 0 y 10
    if (c1 < 0 || c1 > 10 ||c2 < 0 || c2 > 10 || c3 < 0 || c3 > 10) {

        alert("Las calificaciones deben estar entre 0 y 10");
        return;
    }

    // B. CALCULAR EL PROMEDIO

    let promedio = (c1 + c2 + c3) / 3;

    // C. DETERMINAR SI ESTÁ APROBADO O REPROBADO

    let estado;

    if (promedio >= 6 && promedio <= 10) {
        estado = "APROBADO";
    } else if (promedio < 6) {
        estado = "REPROBADO";
    } else {
        estado = "Resultado no válido";
    }

    // D. DETERMINAR LA OBSERVACIÓN

    let observacion;

    if (promedio >= 9) {
        observacion = "Excelente desempeño";
    } else if (promedio >= 8) {
        observacion = "Muy buen desempeño";
    } else if (promedio >= 7) {
        observacion = "Buen desempeño";
    } else if (promedio >= 6) {
        observacion = "Desempeño suficiente";
    } else {
        observacion = "Necesita mejorar";
    }

    // 4. MOSTRAR LOS RESULTADOS EN LA PÁGINA

   alert(
    "RESULTADOS DEL ESTUDIANTE\n\n" +
    "Nombre: " + nombre + "\n" +
    "Primera calificación: " + c1 + "\n" +
    "Segunda calificación: " + c2 + "\n" +
    "Tercera calificación: " + c3 + "\n" +
    "Promedio: " + promedio.toFixed(2) + "\n" +
    "Estado: " + estado + "\n" +
    "Observación: " + observacion
);
}