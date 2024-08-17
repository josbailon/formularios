
        function validarSeleccion(inputPrefix, noneId, errorMessage) {
            const seleccionados = document.querySelectorAll(`input[type="checkbox"][id^="${inputPrefix}"]:checked`).length > 0 || document.getElementById(noneId).checked;
            if (!seleccionados) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: errorMessage,
                });
                return false;
            }
            return true;
        }

        document.getElementById('cuestionario-historia-clinica-form').addEventListener('submit', function (e) {
            e.preventDefault();

            const alergiasValido = validarSeleccion('alergia-', 'sin-alergias', 'Por favor, seleccione al menos una alergia o marque "Sin alergias".');
            const enfermedadesValido = validarSeleccion('asma', 'sin-enfermedades', 'Por favor, seleccione al menos una enfermedad o marque "Sin enfermedades".');

            const otrasEnfermedades = document.getElementById('otras-enfermedades').value.trim();
            const otrasEnfermedadesValido = otrasEnfermedades !== '' || document.getElementById('sin-otras-enfermedades').checked;

          if (!alergiasValido) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, seleccione al menos una alergia o marque "Sin alergias".',
                });
            } else if (!enfermedadesValido) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, seleccione al menos una enfermedad o marque "Sin enfermedades".',
                });
            } else
            if (!otrasEnfermedadesValido) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, complete el campo de otras enfermedades o marque "Sin otras enfermedades".',
                });
            } else if (alergiasValido && enfermedadesValido) {
                Swal.fire({
                    icon: 'success',
                    title: 'Formulario enviado',
                    text: 'La información ha sido registrada correctamente.',
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.reset();
                    }
                });
            }
        });
    