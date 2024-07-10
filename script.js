document.addEventListener('DOMContentLoaded', function() {
    const statusContainer = document.getElementById('status-container');
    const apiUrl = 'https://www.growtopiagame.com/detail';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            statusContainer.innerHTML = `
                <h2>Status: ${data.status}</h2>
                <p>Players online: ${data.players_online}</p>
            `;
        })
        .catch(error => {
            statusContainer.innerHTML = `<p>Error fetching data: ${error}</p>`;
        });
});
