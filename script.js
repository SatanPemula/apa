document.addEventListener('DOMContentLoaded', function() {
    const statusContainer = document.getElementById('status-container');
    const apiUrl = 'https://arunika.top/growtopia/gtstatus';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Untuk debugging
            statusContainer.innerHTML = `
                <h2>Status: Online</h2>
                <p>Players online: ${data.online_user}</p>
            `;
        })
        .catch(error => {
            console.error('Fetch error:', error);
            statusContainer.innerHTML = `<p>Error fetching data: ${error}</p>`;
        });
});
