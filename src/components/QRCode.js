import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './QRCode.css';

function QRCode() {
  const portfolioURL = 'https://your-portfolio-url.com'; 

  return (
    <div className="qr-code-container">
      <h2>Scan to view my portfolio</h2>
      <QRCodeSVG value={portfolioURL} size={256} />
      <p>Or visit: <a href={portfolioURL} target="_blank" rel="noopener noreferrer">{portfolioURL}</a></p>
    </div>
  );
}

export default QRCode;