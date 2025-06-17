import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Smartphone, Save, Edit3, CreditCard, CheckCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { accountService } from '../services/account.service';

interface BankDetails {
  accountNumber: string;
  ifscCode: string;
  accountHolderName: string;
  upiId: string;
}

export default function AccountPage() {
  const { user, updateProfile } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [bankDetails, setBankDetails] = useState<BankDetails>({
    accountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    upiId: ''
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingBank, setIsEditingBank] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBankDetails = async () => {
      if (user) {
        try {
          const details = await accountService.getBankDetails(user.uid);
          if (details) {
            setBankDetails(details);
          }
        } catch (error) {
          console.error('Failed to load bank details:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadBankDetails();
  }, [user]);

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile({ displayName });
      setSuccess('Profile updated successfully!');
      setError('');
      setIsEditingProfile(false);
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile');
      setSuccess('');
    }
  };

  const handleBankDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    // Validation
    if (bankDetails.accountNumber && bankDetails.accountNumber.length < 9) {
      setError('Account number must be at least 9 digits');
      return;
    }

    if (bankDetails.ifscCode && !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(bankDetails.ifscCode)) {
      setError('Please enter a valid IFSC code (e.g., SBIN0001234)');
      return;
    }

    try {
      await accountService.saveBankDetails(user.uid, bankDetails);
      setSuccess('Bank details saved successfully!');
      setError('');
      setIsEditingBank(false);
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save bank details');
      setSuccess('');
    }
  };

  const handleBankDetailsChange = (field: keyof BankDetails, value: string) => {
    setBankDetails(prev => ({
      ...prev,
      [field]: field === 'ifscCode' ? value.toUpperCase() : value
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link 
            to="/dashboard" 
            className="flex items-center text-blue-400 hover:text-blue-500 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold mb-2">Account Settings</h1>
          <p className="text-gray-400">Manage your account information and payment details</p>
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-4 mb-6">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-500/10 border border-green-500 text-green-500 rounded-lg p-4 mb-6 flex items-center gap-2">
          <CheckCircle className="h-5 w-5" />
          {success}
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Profile */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Profile Information</h2>
              <button
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-colors"
              >
                <Edit3 className="h-4 w-4" />
                {isEditingProfile ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            <form onSubmit={handleProfileSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={user?.email || ''}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-300 cursor-not-allowed"
                  disabled
                />
                <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
              </div>

              <div>
                <label htmlFor="displayName" className="block text-sm font-medium text-gray-400 mb-2">
                  Display Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className={`w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white ${
                      !isEditingProfile ? 'cursor-not-allowed opacity-60' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    }`}
                    placeholder="Enter your display name"
                    disabled={!isEditingProfile}
                  />
                </div>
              </div>

              {isEditingProfile && (
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Save className="h-5 w-5" />
                  Save Profile Changes
                </button>
              )}
            </form>
          </div>

          {/* Bank Details */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Payment Details</h2>
              <button
                onClick={() => setIsEditingBank(!isEditingBank)}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl transition-colors"
              >
                <Edit3 className="h-4 w-4" />
                {isEditingBank ? 'Cancel' : 'Edit Details'}
              </button>
            </div>

            <form onSubmit={handleBankDetailsSubmit} className="space-y-6">
              {/* UPI Details */}
              <div className="bg-gray-900/50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="h-5 w-5 text-blue-500" />
                  <h3 className="text-lg font-semibold">UPI Details</h3>
                </div>
                <div>
                  <label htmlFor="upiId" className="block text-sm font-medium text-gray-400 mb-2">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    id="upiId"
                    value={bankDetails.upiId}
                    onChange={(e) => handleBankDetailsChange('upiId', e.target.value)}
                    className={`w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white ${
                      !isEditingBank ? 'cursor-not-allowed opacity-60' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    }`}
                    placeholder="example@upi"
                    disabled={!isEditingBank}
                  />
                </div>
              </div>

              {/* Bank Account Details */}
              <div className="bg-gray-900/50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="h-5 w-5 text-green-500" />
                  <h3 className="text-lg font-semibold">Bank Account Details</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-400 mb-2">
                      Account Holder Name
                    </label>
                    <input
                      type="text"
                      id="accountHolderName"
                      value={bankDetails.accountHolderName}
                      onChange={(e) => handleBankDetailsChange('accountHolderName', e.target.value)}
                      className={`w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white ${
                        !isEditingBank ? 'cursor-not-allowed opacity-60' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      }`}
                      placeholder="Enter account holder name"
                      disabled={!isEditingBank}
                    />
                  </div>
                  <div>
                    <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-400 mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      id="accountNumber"
                      value={bankDetails.accountNumber}
                      onChange={(e) => handleBankDetailsChange('accountNumber', e.target.value.replace(/\D/g, ''))}
                      className={`w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white ${
                        !isEditingBank ? 'cursor-not-allowed opacity-60' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      }`}
                      placeholder="Enter account number"
                      disabled={!isEditingBank}
                    />
                  </div>
                  <div>
                    <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-400 mb-2">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      id="ifscCode"
                      value={bankDetails.ifscCode}
                      onChange={(e) => handleBankDetailsChange('ifscCode', e.target.value)}
                      className={`w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white ${
                        !isEditingBank ? 'cursor-not-allowed opacity-60' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      }`}
                      placeholder="e.g., SBIN0001234"
                      maxLength={11}
                      disabled={!isEditingBank}
                    />
                  </div>
                </div>
              </div>

              {isEditingBank && (
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Save className="h-5 w-5" />
                  Save Payment Details
                </button>
              )}
            </form>
          </div>
        </div>

        {/* Account Summary */}
        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
            <h3 className="text-lg font-semibold mb-4">Account Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Member Since</span>
                <span className="text-white">
                  {user?.metadata?.creationTime ? 
                    new Date(user.metadata.creationTime).toLocaleDateString() : 
                    'N/A'
                  }
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Account Status</span>
                <span className="text-green-500 font-semibold">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Email Verified</span>
                <span className={user?.emailVerified ? 'text-green-500' : 'text-yellow-500'}>
                  {user?.emailVerified ? 'Yes' : 'Pending'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
            <h3 className="text-lg font-semibold mb-4">Payment Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">UPI ID</span>
                <span className={bankDetails.upiId ? 'text-green-500' : 'text-red-500'}>
                  {bankDetails.upiId ? '✓ Saved' : '✗ Not Set'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Bank Account</span>
                <span className={bankDetails.accountNumber && bankDetails.ifscCode && bankDetails.accountHolderName ? 'text-green-500' : 'text-red-500'}>
                  {bankDetails.accountNumber && bankDetails.ifscCode && bankDetails.accountHolderName ? '✓ Complete' : '✗ Incomplete'}
                </span>
              </div>
            </div>
            
            {(!bankDetails.upiId && (!bankDetails.accountNumber || !bankDetails.ifscCode || !bankDetails.accountHolderName)) && (
              <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-yellow-400 text-sm">
                  Complete your payment details to enable withdrawals
                </p>
              </div>
            )}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
            <h3 className="text-lg font-semibold mb-4">Security</h3>
            <div className="space-y-3">
              <button className="w-full text-left text-blue-400 hover:text-blue-300 transition-colors">
                Change Password
              </button>
              <button className="w-full text-left text-blue-400 hover:text-blue-300 transition-colors">
                Two-Factor Authentication
              </button>
              <button className="w-full text-left text-blue-400 hover:text-blue-300 transition-colors">
                Login History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}