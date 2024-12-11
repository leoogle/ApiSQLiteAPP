// URL of the APK
const apkUrl = 'https://raw.githubusercontent.com/leoogle/ApiSQLiteAPP/f3ccdeba9b4a405e57c6357f5a069b54a321b572/ApiSQLiteApp.apk'; // Replace with your direct download URL

// Detect Device Type
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// Elements
const mobileSection = document.getElementById('mobile-section');
const desktopSection = document.getElementById('desktop-section');
const downloadBtn = document.getElementById('download-btn');

// Handle Device-Specific Behavior
if (isMobile) {
  // Mobile: Show the download button
  mobileSection.classList.remove('hidden');
  downloadBtn.addEventListener('click', () => {
    window.location.href = apkUrl; // Redirect to the APK download link when the button is clicked
  });
} else {
  // Desktop: Show the QR code for APK download
  desktopSection.classList.remove('hidden');
  generateQRCode(apkUrl);
}

// Function to Generate QR Code
function generateQRCode(url) {
  const qrCodeContainer = document.getElementById('qr-code');

  // Clear any existing QR code
  qrCodeContainer.innerHTML = '';

  // Generate the QR code using QRCode.js
  new QRCode(qrCodeContainer, {
    text: url,
    width: 200,
    height: 200,
  });
}