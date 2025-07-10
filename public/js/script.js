document.getElementById('loadRatesBtn').addEventListener('click', async () => {
  try {
    const res = await fetch('/api/banking');
    const data = await res.json();

    const output = data.map(item => `
      <div class="card mb-2">
        <div class="card-body">
          <h5 class="card-title">${item.currency}</h5>
          <p class="card-text">Rate: ${item.rate}</p>
        </div>
      </div>
    `).join('');

    document.getElementById('ratesOutput').innerHTML = output;
  } catch (error) {
    document.getElementById('ratesOutput').innerHTML = `<p class="text-danger">Error loading data.</p>`;
  }
});
