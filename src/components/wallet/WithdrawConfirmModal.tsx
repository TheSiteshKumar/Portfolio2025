import React from 'react';
import { X, Smartphone, CreditCard, AlertTriangle } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

interface BankDetails {
  accountNumber: string;
  ifscCode: string;
  accountHolderName: string;
  upiId: string;
}

interface WithdrawConfirmModalProps {
  amount: number;
  processingFee: number;
  netAmount: number;
  paymentMethod: 'upi' | 'bank';
  bankDetails: BankDetails | null;
  onConfirm: () => void;
  onClose: () => void;
}

export default function WithdrawConfirmModal({
  amount,
  processingFee,
  netAmount,
  paymentMethod,
  bankDetails,
  onConfirm,
  onClose
}: WithdrawConfirmModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
      <div className="bg-gray-800 rounded-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h3 className="text-xl font-semibold">Confirm Withdrawal</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3 mb-4">
              {paymentMethod === 'upi' ? (
                <Smartphone className="h-5 w-5 text-blue-400" />
              ) : (
                <CreditCard className="h-5 w-5 text-blue-400" />
              )}
              <span className="text-gray-300 font-semibold">
                {paymentMethod === 'upi' ? 'UPI Transfer' : 'Bank Transfer'}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Withdrawal Amount:</span>
                <span className="text-white font-semibold">{formatCurrency(amount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Processing Fee (7%):</span>
                <span className="text-red-400 font-semibold">-{formatCurrency(processingFee)}</span>
              </div>
              <div className="border-t border-gray-700 pt-2">
                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold">You'll Receive:</span>
                  <span className="text-green-400 font-bold text-lg">{formatCurrency(netAmount)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <h4 className="font-semibold mb-3">Payment Details</h4>
            {paymentMethod === 'upi' ? (
              <div>
                <p className="text-gray-400 text-sm">UPI ID:</p>
                <p className="text-white font-mono">{bankDetails?.upiId}</p>
              </div>
            ) : (
              <div className="space-y-2">
                <div>
                  <p className="text-gray-400 text-sm">Account Holder:</p>
                  <p className="text-white">{bankDetails?.accountHolderName}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Account Number:</p>
                  <p className="text-white font-mono">****{bankDetails?.accountNumber?.slice(-4)}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">IFSC Code:</p>
                  <p className="text-white font-mono">{bankDetails?.ifscCode}</p>
                </div>
              </div>
            )}
          </div>

          {/* Processing Time */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-400 font-semibold text-sm">Processing Time</p>
                <p className="text-yellow-300 text-sm">
                  {paymentMethod === 'upi' ? '24-48 hours' : '3-5 business days'}
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6 text-center text-sm">
            Are you sure you want to proceed with this withdrawal?
          </p>
          
          <div className="space-y-4">
            <button
              onClick={onConfirm}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              Confirm Withdrawal
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-700 text-white py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}