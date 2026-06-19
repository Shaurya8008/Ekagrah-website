"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";
import { getPlatformMetrics, getActiveCampaigns, Campaign } from "@/lib/firebase/firestore";
import { Settings, Users, IndianRupee, Activity, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { auth } from "@/lib/firebase/config";

export default function AdminDashboardPage() {
  const [metrics, setMetrics] = useState({ totalRaised: 0, totalDonationsCount: 0 });
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPlatformMetrics(), getActiveCampaigns()]).then(([m, c]) => {
      setMetrics(m);
      setCampaigns(c);
      setLoading(false);
    });
  }, []);

  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="pt-32 pb-16 min-h-screen bg-surface">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="font-heading text-3xl font-bold">Admin Portal</h1>
              <p className="text-foreground-muted">Platform management and analytics</p>
            </div>
            <Button variant="outline" onClick={() => auth.signOut()}>
              Sign Out
            </Button>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-card border border-border flex items-center gap-4">
              <div className="w-12 h-12 bg-success/20 text-success rounded-full flex items-center justify-center shrink-0">
                <IndianRupee className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-foreground-muted">Total Funds Raised</p>
                <h3 className="font-heading text-2xl font-bold">₹{metrics.totalRaised.toLocaleString('en-IN')}</h3>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-card border border-border flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-foreground-muted">Total Donations</p>
                <h3 className="font-heading text-2xl font-bold">{metrics.totalDonationsCount}</h3>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-card border border-border flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center shrink-0">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-foreground-muted">Active Campaigns</p>
                <h3 className="font-heading text-2xl font-bold">{campaigns.length}</h3>
              </div>
            </div>
          </div>

          {/* Campaigns Section */}
          <div className="bg-white rounded-2xl shadow-card border border-border p-6 mb-8">
            <div className="flex justify-between items-center mb-6 border-b border-border pb-4">
              <h2 className="font-heading text-xl font-bold flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" /> Active Campaigns
              </h2>
              <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
                New Campaign
              </Button>
            </div>

            {loading ? (
              <div className="py-8 text-center text-foreground-muted">Loading campaigns...</div>
            ) : campaigns.length === 0 ? (
              <div className="py-8 text-center text-foreground-muted">No active campaigns found.</div>
            ) : (
              <div className="space-y-4">
                {campaigns.map((camp) => (
                  <div key={camp.id} className="p-4 border border-border rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h4 className="font-heading font-semibold">{camp.title}</h4>
                      <div className="w-full sm:w-64 bg-surface h-2 rounded-full mt-2 overflow-hidden">
                        <div 
                          className="bg-primary h-full rounded-full" 
                          style={{ width: `${Math.min((camp.raised / camp.goal) * 100, 100)}%` }} 
                        />
                      </div>
                      <p className="text-xs text-foreground-muted mt-1">
                        ₹{camp.raised.toLocaleString('en-IN')} raised of ₹{camp.goal.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </div>
    </ProtectedRoute>
  );
}
