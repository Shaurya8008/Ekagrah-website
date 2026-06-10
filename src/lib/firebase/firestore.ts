import { db } from './config';
import { collection, doc, getDoc, getDocs, query, where, orderBy, addDoc } from 'firebase/firestore';

export interface Campaign {
  id: string;
  title: string;
  description: string;
  goal: number;
  raised: number;
  image?: string;
  active: boolean;
}

export interface Donation {
  id: string;
  campaignId: string;
  userId: string;
  amount: number;
  currency: string;
  status: string;
  createdAt: any;
}

// Fetch all active campaigns
export const getActiveCampaigns = async (): Promise<Campaign[]> => {
  const campaignsRef = collection(db, 'campaigns');
  const q = query(campaignsRef, where('active', '==', true), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Campaign[];
};

// Fetch user donations
export const getUserDonations = async (userId: string): Promise<Donation[]> => {
  const donationsRef = collection(db, 'donations');
  const q = query(donationsRef, where('userId', '==', userId), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Donation[];
};

// Fetch overall metrics for Admin
export const getPlatformMetrics = async () => {
  // In a real app, you might use Firestore aggregation queries here
  const donationsRef = collection(db, 'donations');
  const q = query(donationsRef, where('status', '==', 'completed'));
  const snapshot = await getDocs(q);
  
  let totalRaised = 0;
  snapshot.forEach(doc => {
    totalRaised += doc.data().amount || 0;
  });
  
  return {
    totalDonationsCount: snapshot.size,
    totalRaised
  };
};
