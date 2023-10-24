/*validaciones*/
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

 //total a pagar//
  let valorTicket = 200;

  const selectElement = document.getElementById('validationCustom05');
  const inputElement = document.getElementById('validationCustom04');
  const totalPagarDiv = document.getElementById('totalPagar');
  
  selectElement.addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    const cantidadIngresada = inputElement.value;
    const total = totalAPagar(selectedOption, cantidadIngresada);
    console.log('Total a pagar:', total);
  });
  
  inputElement.addEventListener('input', (event) => {
    const cantidadIngresada = event.target.value;
    console.log('Cantidad ingresada:', cantidadIngresada);
  });
  
  function totalAPagar(selectedOption, cantidadIngresada) {
    if (selectedOption === "Estudiante") {
      return valorTicket - (valorTicket * 0.8) * cantidadIngresada;
    } else if (selectedOption === "Trainee") {
      return valorTicket - (valorTicket * 0.5) * cantidadIngresada;
    } else if (selectedOption === "Junior") {
      return valorTicket - (valorTicket * 0.15) * cantidadIngresada;
    } else {
      return "Revise formulario e ingrese valores válidos";
    }
  }
  document.getElementById('calcularTotal').addEventListener('click', () => {
    const selectedOption = selectElement.value;
    const cantidadIngresada = inputElement.value;
    const total = totalAPagar(selectedOption, cantidadIngresada);
    totalPagarDiv.textContent = `${total.toFixed(2)}`;
  });
