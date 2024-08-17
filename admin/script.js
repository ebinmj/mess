document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('scheduleForm');
    const tableBody = document.getElementById('scheduleTable').querySelector('tbody');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const date = document.getElementById('date').value;
        const meal = document.getElementById('meal').value;
        const items = document.getElementById('items').value.split(',').map(item => item.trim()).filter(item => item);

        if (date && meal && items.length) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${date}</td>
                <td>${meal}</td>
                <td>${items.join(', ')}</td>
            `;
            tableBody.appendChild(row);

            // Reset the form
            form.reset();
        } else {
            alert('Please fill in all fields correctly.');
        }
    });
});