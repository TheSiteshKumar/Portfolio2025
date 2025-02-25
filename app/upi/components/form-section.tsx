'use client';

import { useState } from 'react';
import { Copy, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { QRPreview } from './qr-preview';
import domtoimage from 'dom-to-image';

const paymentTypes = [
  { value: 'upi', label: 'UPI Address' },
  { value: 'bank', label: 'Bank Account' },
];

export function FormSection() {
  const [formData, setFormData] = useState({
    merchantName: '',
    paymentType: 'upi',
    upiId: '',
    accountNumber: '',
    ifscCode: '',
    amount: '',
    description: '',
  });

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(formData.upiId);
    toast.success('UPI ID copied to clipboard');
  };

  const handleDownloadQR = async () => {
    const qrElement = document.querySelector('[data-qr-preview]');
    if (qrElement) {
      try {
        const dataUrl = await domtoimage.toPng(qrElement as HTMLElement, {
          quality: 1.0,
          bgcolor: '#ffffff',
        });
        
        const link = document.createElement('a');
        link.download = `${formData.merchantName.replace(/\s+/g, '-').toLowerCase()}-qr-code.png`;
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Error generating QR code image:', error);
        toast.error('Failed to download QR code');
      }
    }
  };

  return (
    <div className="container  mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="merchantName">Merchant / Payee Name</Label>
                <Input
                  id="merchantName"
                  placeholder="Enter your business name"
                  value={formData.merchantName}
                  onChange={(e) =>
                    setFormData({ ...formData, merchantName: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Payment Address Type</Label>
                <Select
                  value={formData.paymentType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, paymentType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment type" />
                  </SelectTrigger>
                  <SelectContent>
                    {paymentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {formData.paymentType === 'upi' ? (
                <div className="space-y-2">
                  <Label htmlFor="upiId">UPI ID / VPA</Label>
                  <div className="flex gap-2">
                    <Input
                      id="upiId"
                      placeholder="example@upi"
                      value={formData.upiId}
                      onChange={(e) =>
                        setFormData({ ...formData, upiId: e.target.value })
                      }
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleCopyUPI}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account Number</Label>
                    <Input
                      id="accountNumber"
                      placeholder="Enter account number"
                      value={formData.accountNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, accountNumber: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ifscCode">IFSC Code</Label>
                    <Input
                      id="ifscCode"
                      placeholder="Enter IFSC code"
                      value={formData.ifscCode}
                      onChange={(e) =>
                        setFormData({ ...formData, ifscCode: e.target.value })
                      }
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="amount">Transaction Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount in INR"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                />
              </div>

              {/* <div className="space-y-2">
                <Label htmlFor="description">Description / Notes (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Add transaction description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div> */}

              <Button
                className="w-full"
                size="lg"
                onClick={handleDownloadQR}
              >
                <Download className="mr-2 h-4 w-4" /> Download QR Code
              </Button>
            </div>
          </div>

          {/* QR Preview */}
          <div data-qr-preview>
            <QRPreview formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
}