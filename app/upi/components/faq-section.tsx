'use client';

export function FAQSection() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is a UPI QR Code?
              </h3>
              <p className="text-gray-600">
                A UPI QR Code is a Quick Response code that contains your UPI
                payment details. When scanned using any UPI-enabled payment app, it
                automatically fills in your payment information for quick and
                secure transactions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Which UPI apps can scan these QR codes?
              </h3>
              <p className="text-gray-600">
                Our QR codes are compatible with all UPI-enabled payment apps
                including BHIM, Google Pay, PhonePe, Paytm, Amazon Pay, and any
                other UPI-based payment application.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is it safe to use this QR code generator?
              </h3>
              <p className="text-gray-600">
                Yes, our QR code generator is completely safe. We don't store any
                of your payment information, and the QR codes are generated
                directly in your browser using standard UPI protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}