import React, { useState, useEffect } from 'react';
import { X, CreditCard, Smartphone, AlertCircle, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWallet } from '../../context/WalletContext';
import { useAuth } from '../../hooks/useAuth';
import { accountService } from '../../services/account.service';
import WithdrawConfirmModal from './WithdrawConfirmModal';
import { formatCurrency } from '../../utils/formatters';

interface WithdrawModalProps {
  onClose: () => void;
}

interface BankDetails {
  accountNumber: string;
  ifscCode: string;
  accountHolderName: string;
  upiId: string;
}

export default function WithdrawModal({ onClose }: WithdrawModalProps) {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'bank'>('upi');
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const [bankDetails, setBankDetails] = useState<BankDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const { withdraw, totalEarnings, withdrawals } = useWallet();
  const { user } = useAuth();

  const MIN_WITHDRAWAL = 120;
  const PROCESSING_FEE_PERCENT = 7;

  const totalApprovedWithdrawals = withdrawals
    .filter(w => w.status === 'completed' && w.approved)
    .reduce((sum, w) => sum + w.amount, 0);

  const availableBalance = totalEarnings - totalApprovedWithdrawals;

  useEffect(() => {
    const loadBankDetails = async () => {
      if (user) {
        try {
          const details = await accountService.getBankDetails(user.uid);
          setBankDetails(details);
        } catch (error) {
          console.error('Failed to load bank details:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadBankDetails();
  }, [user]);

  const calculateProcessingFee = (withdrawalAmount: number) => {
    return Math.round((withdrawalAmount * PROCESSING_FEE_PERCENT) / 100);
  };

  const calculateNetAmount = (withdrawalAmount: number) => {
    return withdrawalAmount - calculateProcessingFee(withdrawalAmount);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);

    if (availableBalance <= 0) {
      setError('No funds available for withdrawal');
      return;
    }

    if (numAmount < MIN_WITHDRAWAL) {
      setError(`Minimum withdrawal amount is ${formatCurrency(MIN_WITHDRAWAL)}`);
      return;
    }

    if (numAmount > availableBalance) {
      setError('Insufficient balance for withdrawal');
      return;
    }

    // Check if bank details are saved for the selected payment method
    if (!bankDetails) {
      setError('Please save your bank details in Account settings before withdrawing');
      return;
    }

    if (paymentMethod === 'upi' && !bankDetails.upiId.trim()) {
      setError('Please add your UPI ID in Account settings');
      return;
    }

    if (paymentMethod === 'bank' && (!bankDetails.accountNumber || !bankDetails.ifscCode || !bankDetails.accountHolderName)) {
      setError('Please complete your bank account details in Account settings');
      return;
    }

    setError('');
    setShowConfirm(true);
  };

  const handleConfirmWithdraw = async () => {
    try {
      const numAmount = parseFloat(amount);
      const withdrawalDetails = {
        paymentMethod,
        ...(paymentMethod === 'upi' ? { upiId: bankDetails?.upiId } : {
          accountNumber: bankDetails?.accountNumber,
          ifscCode: bankDetails?.ifscCode,
          accountHolderName: bankDetails?.accountHolderName
        })
      };
      
      await withdraw(numAmount, withdrawalDetails);
      onClose();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Withdrawal failed');
      setShowConfirm(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-800 rounded-xl p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-800 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-gray-700">
            <h3 className="text-xl font-semibold">Withdraw Earnings</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-4 mb-6 flex items-start gap-2">
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>{error}</p>
                  {error.includes('bank details') && (
                    <Link 
                      to="/account" 
                      className="text-blue-400 hover:text-blue-300 underline text-sm mt-1 inline-block"
                      onClick={onClose}
                    >
                      Go to Account Settings
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* 24/7 Availability Notice */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 text-green-400 font-semibold mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                24/7 Withdrawal Available
              </div>
              <p className="text-sm text-green-300">
                Withdrawals are processed round the clock. UPI transfers within 24-48 hours, Bank transfers within 3-5 business days.
              </p>
            </div>

            {availableBalance <= 0 ? (
              <div className="bg-yellow-500/10 border border-yellow-500 text-yellow-500 rounded-lg p-4 mb-6">
                No funds available for withdrawal at this time
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-400 mb-2">
                    Withdrawal Amount (₹)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min={MIN_WITHDRAWAL}
                    max={availableBalance}
                    step="1"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white"
                    placeholder={`Enter amount (min ₹${MIN_WITHDRAWAL})`}
                    required
                  />
                  <div className="mt-2 space-y-1 text-xs">
                    <p className="text-gray-400">
                      Available: {formatCurrency(availableBalance)}
                    </p>
                    <p className="text-gray-400">
                      Minimum: {formatCurrency(MIN_WITHDRAWAL)}
                    </p>
                    {amount && parseFloat(amount) >= MIN_WITHDRAWAL && (
                      <div className="text-yellow-400">
                        <p>Processing fee ({PROCESSING_FEE_PERCENT}%): {formatCurrency(calculateProcessingFee(parseFloat(amount)))}</p>
                        <p className="font-semibold">You'll receive: {formatCurrency(calculateNetAmount(parseFloat(amount)))}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-400 mb-3">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-3 rounded-lg border-2 transition-colors flex items-center justify-center gap-2 ${
                        paymentMethod === 'upi'
                          ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                          : 'border-gray-600 bg-gray-700 text-gray-300 hover:border-gray-500'
                      }`}
                    >
                      <Smartphone className="h-5 w-5" />
                      UPI
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank')}
                      className={`p-3 rounded-lg border-2 transition-colors flex items-center justify-center gap-2 ${
                        paymentMethod === 'bank'
                          ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                          : 'border-gray-600 bg-gray-700 text-gray-300 hover:border-gray-500'
                      }`}
                    >
                      <CreditCard className="h-5 w-5" />
                      Bank
                    </button>
                  </div>
                </div>

                {/* Bank Details Display */}
                <div className="mb-6 p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-sm">Saved Payment Details</h4>
                    <Link 
                      to="/account" 
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                      onClick={onClose}
                    >
                      <Settings className="h-4 w-4" />
                      Edit
                    </Link>
                  </div>
                  
                  {paymentMethod === 'upi' ? (
                    <div>
                      {bankDetails?.upiId ? (
                        <p className="text-green-400 text-sm">UPI ID: {bankDetails.upiId}</p>
                      ) : (
                        <p className="text-red-400 text-sm">No UPI ID saved</p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-1 text-sm">
                      {bankDetails?.accountHolderName ? (
                        <>
                          <p className="text-green-400">Name: {bankDetails.accountHolderName}</p>
                          <p className="text-green-400">Account: ****{bankDetails.accountNumber?.slice(-4)}</p>
                          <p className="text-green-400">IFSC: {bankDetails.ifscCode}</p>
                        </>
                      ) : (
                        <p className="text-red-400">No bank details saved</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Processing Time Info */}
                <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-blue-400 text-sm">
                    <strong>Processing Time:</strong> {paymentMethod === 'upi' ? '24-48 hours' : '3-5 business days'}
                  </p>
                  <p className="text-blue-300 text-xs mt-1">
                    Processing fee of {PROCESSING_FEE_PERCENT}% will be deducted from your withdrawal amount.
                  </p>
                </div>
              </>
            )}
            
            <button
              type="submit"
              disabled={availableBalance <= 0 || !bankDetails || 
                (paymentMethod === 'upi' && !bankDetails?.upiId) ||
                (paymentMethod === 'bank' && (!bankDetails?.accountNumber || !bankDetails?.ifscCode || !bankDetails?.accountHolderName))
              }
              className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                availableBalance <= 0 || !bankDetails ||
                (paymentMethod === 'upi' && !bankDetails?.upiId) ||
                (paymentMethod === 'bank' && (!bankDetails?.accountNumber || !bankDetails?.ifscCode || !bankDetails?.accountHolderName))
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {availableBalance <= 0 ? 'No Funds Available' : 
               !bankDetails ? 'Save Bank Details First' :
               (paymentMethod === 'upi' && !bankDetails?.upiId) ? 'Add UPI ID First' :
               (paymentMethod === 'bank' && (!bankDetails?.accountNumber || !bankDetails?.ifscCode || !bankDetails?.accountHolderName)) ? 'Complete Bank Details' :
               'Withdraw'}
            </button>
          </form>
        </div>
      </div>

      {showConfirm && (
        <WithdrawConfirmModal
          amount={parseFloat(amount)}
          processingFee={calculateProcessingFee(parseFloat(amount))}
          netAmount={calculateNetAmount(parseFloat(amount))}
          paymentMethod={paymentMethod}
          bankDetails={bankDetails}
          onConfirm={handleConfirmWithdraw}
          onClose={() => setShowConfirm(false)}
        />
      )}
    </>
  );
}