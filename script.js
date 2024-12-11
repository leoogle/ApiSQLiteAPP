// URL of the APK
const apkUrl = 'https://github.com/leoogle/ApiSQLiteAPP/blob/f3ccdeba9b4a405e57c6357f5a069b54a321b572/ApiSQLiteApp.apk'; // Replace with your APK link

// Detect Device Type
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// Elements
const mobileSection = document.getElementById('mobile-section');
const desktopSection = document.getElementById('desktop-section');

// Handle Device-Specific Behavior
if (isMobile) {
  // Mobile: Redirect to APK download
  mobileSection.classList.remove('hidden');
  setTimeout(() => {
    window.location.href = apkUrl; // Automatically redirect to download
  }, 2000); // Delay for user acknowledgment
} else {
  // Desktop: Show QR code for APK download
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
