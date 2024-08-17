function generateInvoice() {
    const item = document.getElementById('item').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);
    const total = quantity * price;

    const invoiceDetails = `
        <strong>Item:</strong> ${item}<br>
        <strong>Quantity:</strong> ${quantity}<br>
        <strong>Price per Item:</strong> $${price.toFixed(2)}<br>
        <strong>Total:</strong> $${total.toFixed(2)}
    `;

    document.getElementById('invoiceDetails').innerHTML = invoiceDetails;
}
