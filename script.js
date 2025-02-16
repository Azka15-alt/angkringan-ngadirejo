function showProducts() {
    document.getElementById('products').style.display = 'flex';
}

function openOrderPage(productName) {
    document.getElementById('orderOverlay').classList.add('active');
    document.getElementById('productName').value = productName;
}

function closeOrderForm() {
    document.getElementById('orderOverlay').classList.remove('active');
}

function sendOrder() {
    var productName = document.getElementById('productName').value;
    var name = document.getElementById('name').value;
    var jumlahPesanan = document.getElementById('jumlahPesanan').value;
    var address = document.getElementById('address').value;
    var tambahan = document.getElementById('tambahan').value;

    var message = `Halo, saya ingin memesan:\n\n` +
                  `Nama Produk: ${productName}\n` +
                  `Nama: ${name}\n` +
                  `Jumlah Pesanan: ${jumlahPesanan}\n` +
                  `Alamat: ${address}\n` +
                  `Tambahan: ${tambahan}`;
    var whatsappUrl = `https://wa.me/6285329105500?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
}