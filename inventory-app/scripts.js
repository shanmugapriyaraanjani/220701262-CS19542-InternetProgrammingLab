
// Example Pie Chart
const ctx1 = document.getElementById('myPieChart').getContext('2d');
new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['Direct', 'Referral', 'Social'],
        datasets: [{
            data: [55, 30, 15],
            backgroundColor: ['#007bff', '#28a745', '#dc3545']
        }]
    }
});

// Stock Availability Pie Chart
const ctx2 = document.getElementById('stockPieChart').getContext('2d');
new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Available', 'Out of Stock'],
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#17a2b8', '#ffc107']
        }]
    }
});

// Sales Chart
const salesChartCtx = document.getElementById('salesChart').getContext('2d');
new Chart(salesChartCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [10000, 12000, 15000, 8000, 13000, 14000],
            backgroundColor: 'rgba(78, 115, 223, 0.05)',
            borderColor: '#4e73df',
            borderWidth: 2
        }]
    }
});

// Order Chart
const orderCtx = document.getElementById('orderChart').getContext('2d');
new Chart(orderCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Orders',
            data: [300, 400, 500, 450],
            backgroundColor: '#fd7e14'
        }]
    }
});
