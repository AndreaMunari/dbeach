$('body').on('click.offcanvas.data-api', '[data-bs-toggle=offcanvas]', function () {
  var $raw_id = $(this).attr("id");

  var id = $raw_id.split("-")[1];

  $('#num-ombrellone').html(id);
});

$("#prenota").click(function () {
  var dataArrivo = document.getElementById('arrive-date').value;
  var inputDate = new Date(dataArrivo);

  var dataPartenza = document.getElementById('departing-date').value;
  var outDate = new Date(dataPartenza);

  // Get today's date
  var todaysDate = new Date();

  // call setHours to take the time out of the comparison
  if (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
    // Date equals today's date
    alert('La data non può corrispondere a quella odierna');
  } else if (inputDate.setHours(0, 0, 0, 0) >= outDate.setHours(0, 0, 0, 0)) {
    alert('La data di arrivo non può essere dopo la data di partenza');
  }
});