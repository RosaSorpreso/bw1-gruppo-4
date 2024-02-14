const data = {
    datasets: [
      {
        label: "Dati",
        data: [40, 60],// i dati arrivano da una funzione
        backgroundColor: ["#D20094", "#00FFFF"],
        borderWidth: 0,
        cutoutPercentage: 90,
      },
    ],
  };
  const options = {
    responsive: false, // Set responsive to false to control chart dimensions explicitly
    width: 190, // Set the width of the chart
    height: 190, // Set the height of the chart
  };
  const config = {
    type: "doughnut",
    data: data,
    options: options, 
  };

  const myChart = new Chart(document.getElementById("myChart"), config);