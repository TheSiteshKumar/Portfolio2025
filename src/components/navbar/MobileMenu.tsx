import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Home, TrendingUp, BarChart3, Users, User, LogOut, Wallet } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  const { user, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSignOut = async () => {
    await signOut();
    onToggle();
  };

  const handleLinkClick = () => {
    onToggle();
  };

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="relative z-[100] w-10 h-10 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col justify-between w-6 h-5 transform transition-all duration-300">
          <span className={`bg-white h-0.5 w-full transform transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-px' : ''}`} />
          <span className={`bg-white h-0.5 w-full transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`bg-white h-0.5 w-full transform transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-px' : ''}`} />
        </div>
      </button>

      <div 
        className={`fixed inset-0 bg-gray-900/98 backdrop-blur-sm z-[90] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <Wallet className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold">PARLEG</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-8">
            <nav className="space-y-6">
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className={`flex items-center gap-4 text-lg font-medium transition-colors ${
                  isActiveLink('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <Home className="h-6 w-6" />
                Home
              </Link>
              
              <Link 
                to="/plans" 
                onClick={handleLinkClick}
                className={`flex items-center gap-4 text-lg font-medium transition-colors ${
                  isActiveLink('/plans') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <TrendingUp className="h-6 w-6" />
                Investment Plans
              </Link>

              {user && (
                <>
                  <Link 
                    to="/dashboard" 
                    onClick={handleLinkClick}
                    className={`flex items-center gap-4 text-lg font-medium transition-colors ${
                      isActiveLink('/dashboard') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <BarChart3 className="h-6 w-6" />
                    Dashboard
                  </Link>
                  
                  <Link 
                    to="/referral" 
                    onClick={handleLinkClick}
                    className={`flex items-center gap-4 text-lg font-medium transition-colors ${
                      isActiveLink('/referral') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Users className="h-6 w-6" />
                    Referral Program
                  </Link>
                  
                  <Link 
                    to="/account" 
                    onClick={handleLinkClick}
                    className={`flex items-center gap-4 text-lg font-medium transition-colors ${
                      isActiveLink('/account') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <User className="h-6 w-6" />
                    Account Settings
                  </Link>
                </>
              )}
            </nav>
          </div>

          {/* User Section */}
          <div className="p-6 border-t border-gray-700">
            {user ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white truncate">
                      {user.displayName || 'User'}
                    </p>
                    <p className="text-sm text-gray-400 truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
                
                <button 
                  onClick={handleSignOut}
                  className="w-full flex items-center justify-center gap-3 bg-red-600/10 border border-red-500/20 text-red-400 py-3 rounded-lg hover:bg-red-600/20 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <Link 
                  to="/signin" 
                  onClick={handleLinkClick}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup" 
                  onClick={handleLinkClick}
                  className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors text-center block"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}