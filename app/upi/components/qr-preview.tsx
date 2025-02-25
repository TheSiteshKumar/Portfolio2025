'use client';

import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';
import { useRef } from 'react';
import domtoimage from 'dom-to-image';

interface QRPreviewProps {
  formData: {
    merchantName: string;
    upiId: string;
    amount?: string;
    description?: string;
  };
}

export function QRPreview({ formData }: QRPreviewProps) {
  const qrRef = useRef<HTMLDivElement>(null);

  const generateUPILink = () => {
    const baseURL = 'upi://pay';
    const params = new URLSearchParams({
      pa: formData.upiId,
      pn: formData.merchantName,
      ...(formData.amount && { am: formData.amount }),
      ...(formData.description && { tn: formData.description }),
      cu: 'INR',
    });
    return `${baseURL}?${params.toString()}`;
  };

  const handleDownload = async () => {
    if (qrRef.current) {
      try {
        const dataUrl = await domtoimage.toPng(qrRef.current, {
          quality: 1.0,
          bgcolor: '#ffffff',
        });
        
        const link = document.createElement('a');
        link.download = `${formData.merchantName.replace(/\s+/g, '-').toLowerCase()}-qr-code.png`;
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Error generating QR code image:', error);
      }
    }
  };

  return (
    <div 
      ref={qrRef}
      className="bg-gradient-to-b content-center from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
    >
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {formData.merchantName || "SITESH KUMAR"}
          </h2>
          <div className="flex justify-center mb-4">
            <QRCodeSVG
              value={generateUPILink()}
              size={240}
              level="H"
              includeMargin
            />
          </div>
          <p className="text-sm text-gray-600 mb-8">{formData.upiId || "thesitesh@ybl"}</p>
        </div>

        <div>
          <h3 className="text-center text-sm font-medium text-gray-900 mb-4">
            Scan and pay with any UPI app
          </h3>
          <div className="flex justify-center items-center gap-4">
            <div className="h-8 relative w-24">
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/BHIM_SVG_Logo.svg/1920px-BHIM_SVG_Logo.svg.png"
                alt="BHIM"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="h-8 relative w-16">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1280px-UPI-Logo-vector.svg.png"
                alt="UPI"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Payment Apps Logos */}
          <div className="grid grid-cols-4 gap-4 items-center justify-items-center">
            <div className="h-6 relative w-16">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1280px-Google_Pay_Logo.svg.png"
                alt="Google Pay"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="h-6 relative w-16">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/1920px-PhonePe_Logo.svg.png"
                alt="PhonePe"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="h-6 relative w-16">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/1920px-Paytm_Logo_%28standalone%29.svg.png"
                alt="Paytm"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="h-6 relative w-16">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Amazon_Pay_logo.svg/1920px-Amazon_Pay_logo.svg.png"
                alt="Amazon Pay"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Create your own UPI QR code at{' '}
            <a
              href="https://siteshkumar.com/upi"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              siteshkumar.com/upi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}