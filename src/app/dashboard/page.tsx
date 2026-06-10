"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";
import { getUserDonations, Donation } from "@/lib/firebase/firestore";
import { Heart, Download, LogOut } from "lucide-react";
import { auth } from "@/lib/firebase/config";
import { Button } from "@/components/ui/Button";

export default function DashboardPage() {
  const { user } = useAuth();
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getUserDonations(user.uid).then(data => {
        setDonations(data);
        setLoading(false);
      });
    }
  }, [user]);

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <ProtectedRoute>
      <div className="pt-32 pb-16 min-h-screen bg-surface">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="font-heading text-3xl font-bold">Donor Dashboard</h1>
              <p className="text-foreground-muted">Welcome back, {user?.email}</p>
            </div>
            <Button variant="outline" onClick={handleSignOut} icon={<LogOut className="w-4 h-4" />}>
              Sign Out
            </Button>
          </div>

          <div className="bg-white rounded-2xl shadow-card border border-border p-6 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-50 text-primary rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold">Your Impact History</h2>
                <p className="text-sm text-foreground-muted">Review your past donations and download 80G tax receipts.</p>
              </div>
            </div>

            {loading ? (
              <div className="py-8 text-center text-foreground-muted">Loading your history...</div>
            ) : donations.length === 0 ? (
              <div className="py-8 text-center bg-surface rounded-lg border border-border border-dashed">
                <p className="text-foreground-muted mb-4">You haven't made any donations yet.</p>
                <Button href="/donate" variant="primary">Make a Donation</Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-4 font-heading font-semibold text-sm">Date</th>
                      <th className="py-3 px-4 font-heading font-semibold text-sm">Campaign</th>
                      <th className="py-3 px-4 font-heading font-semibold text-sm">Amount</th>
                      <th className="py-3 px-4 font-heading font-semibold text-sm">Status</th>
                      <th className="py-3 px-4 font-heading font-semibold text-sm text-right">Receipt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations.map((donation) => (
                      <tr key={donation.id} className="border-b border-border/50 hover:bg-surface/50">
                        <td className="py-4 px-4 text-sm">
                          {donation.createdAt?.toDate ? new Date(donation.createdAt.toDate()).toLocaleDateString() : 'Recent'}
                        </td>
                        <td className="py-4 px-4 text-sm capitalize">{donation.campaignId}</td>
                        <td className="py-4 px-4 text-sm font-medium">₹{donation.amount}</td>
                        <td className="py-4 px-4 text-sm">
                          <span className="px-2 py-1 bg-success/20 text-success font-semibold text-xs rounded-full">
                            {donation.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm text-right">
                          <button className="text-primary hover:text-primary-dark inline-flex items-center gap-1 text-sm font-medium transition-colors">
                            <Download className="w-4 h-4" /> 80G PDF
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </Container>
      </div>
    </ProtectedRoute>
  );
}
