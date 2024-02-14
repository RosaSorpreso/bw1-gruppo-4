const data = {
    datasets: [
      {
        label: "Dati",
        data: [40, 60],// i dati arrivano da una funzione
        backgroundColor: ["#D20094", "#00FFFF"],
        borderWidth: 0,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
  };

  const myChart = new Chart(document.getElementById("myChart"), config);