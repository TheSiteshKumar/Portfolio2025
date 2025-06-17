import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

interface BankDetails {
  accountNumber: string;
  ifscCode: string;
  accountHolderName: string;
  upiId: string;
}

export const accountService = {
  async getBankDetails(userId: string): Promise<BankDetails | null> {
    try {
      const docRef = doc(db, 'bankDetails', userId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data() as BankDetails;
      }
      return null;
    } catch (error) {
      console.error('Failed to get bank details:', error);
      throw error;
    }
  },

  async saveBankDetails(userId: string, bankDetails: BankDetails): Promise<void> {
    try {
      const docRef = doc(db, 'bankDetails', userId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        await updateDoc(docRef, {
          ...bankDetails,
          updatedAt: new Date().toISOString()
        });
      } else {
        await setDoc(docRef, {
          ...bankDetails,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('Failed to save bank details:', error);
      throw error;
    }
  }
};