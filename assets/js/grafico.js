const data = {
    datasets: [
      {
        label: "Dati",
        data: [40, 60],// i dati arrivano da una funzione
        backgroundColor: ["#D20094", "#00FFFF"],
        borderWidth: 0,
        cutoutPercentage: 50, // Increased hole size
      },
    ],
  };
  const options = {
    responsive: false, // Set responsive to false to control chart dimensions explicitly
   
  };
  const config = {
    type: "doughnut",
    data: data,
    options: options, 
  };

  const myChart = new Chart(document.getElementById("myChart"), config);