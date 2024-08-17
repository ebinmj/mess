document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const form = document.getElementById('meal-form');
    const planList = document.getElementById('plan-list');
    const mealDateInput = document.getElementById('meal-date');
    const mealPlanInput = document.getElementById('meal-plan');

    // Create a simple calendar
    function generateCalendar() {
        const now = new Date();
        const month = now.getMonth();
        const year = now.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let calendarHTML = '<table border="1">';
        calendarHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>';

        // Empty cells for days before the start of the month
        for (let i = 0; i < firstDay; i++) {
            calendarHTML += '<td></td>';
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
                calendarHTML += '</tr><tr>';
            }
            calendarHTML += `<td>${day}</td>`;
        }

        // Close table
        calendarHTML += '</tr></table>';
        calendar.innerHTML = calendarHTML;
    }

    generateCalendar();

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const date = mealDateInput.value;
        const mealPlan = mealPlanInput.value;

        if (date && mealPlan) {
            const listItem = document.createElement('li');
            listItem.textContent = `${date}: ${mealPlan}`;
            planList.appendChild(listItem);

            mealDateInput.value = '';
            mealPlanInput.value = '';
        }
    });
});