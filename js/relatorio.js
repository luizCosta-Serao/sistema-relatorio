const ctx = document.getElementById('myChart');

function atualizarGrafico() {
  $.ajax({
    url: 'info.php',
    dataType: 'json',
    success: function(dataInfo) {
      let valor = dataInfo.map((info) => {
        return info.valor
      })

      let mes = dataInfo.map((info) => {
        return info.mes
      })

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: mes,
          datasets: [{
            label: '# Receita do mês',
            data: valor,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  })
}

$('a').click(function(e) {
  e.preventDefault();
  atualizarGrafico();
})