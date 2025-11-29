import { DollarSign, TrendingUp, MousePointer, ShoppingCart, Eye, Users } from 'lucide-react';
import { PageSelector } from './PageSelector';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CreateCampaignDialog } from './CreateCampaignDialog';
import { toast } from 'sonner';

interface AdPerformanceProps {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
}

const campaignData = [
  { date: 'Nov 13', spend: 450, revenue: 1800, impressions: 45000, clicks: 890 },
  { date: 'Nov 14', spend: 520, revenue: 2100, impressions: 52000, clicks: 1050 },
  { date: 'Nov 15', spend: 480, revenue: 1950, impressions: 48000, clicks: 920 },
  { date: 'Nov 16', spend: 550, revenue: 2300, impressions: 58000, clicks: 1150 },
  { date: 'Nov 17', spend: 600, revenue: 2600, impressions: 62000, clicks: 1280 },
  { date: 'Nov 18', spend: 580, revenue: 2450, impressions: 59000, clicks: 1200 },
  { date: 'Nov 19', spend: 620, revenue: 2800, impressions: 65000, clicks: 1350 },
];

const activeCampaigns = [
  {
    id: 1,
    name: 'Summer Product Launch',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    budget: 5000,
    spent: 3200,
    impressions: 428000,
    clicks: 8540,
    conversions: 234,
    status: 'active',
    roas: 3.8,
  },
  {
    id: 2,
    name: 'Brand Awareness Campaign',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=400',
    budget: 3500,
    spent: 2800,
    impressions: 356000,
    clicks: 6200,
    conversions: 178,
    status: 'active',
    roas: 3.2,
  },
  {
    id: 3,
    name: 'Holiday Special Promo',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
    budget: 7500,
    spent: 1800,
    impressions: 189000,
    clicks: 3450,
    conversions: 98,
    status: 'active',
    roas: 4.1,
  },
];

export function AdPerformance({ selectedPage, setSelectedPage }: AdPerformanceProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-1">Ad Performance</h1>
          <p className="text-sm text-gray-500">Monitor and optimize your advertising campaigns</p>
        </div>
        <div className="flex gap-3">
          <PageSelector selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <CreateCampaignDialog />
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-6 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-sm text-gray-500">Total Spend</p>
          </div>
          <p className="text-gray-900 mb-1">$7,800</p>
          <p className="text-xs text-gray-500">This month</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-sm text-gray-500">Revenue</p>
          </div>
          <p className="text-gray-900 mb-1">$28,450</p>
          <p className="text-xs text-green-600">+24.5% vs last month</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
              <MousePointer className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-sm text-gray-500">Total Clicks</p>
          </div>
          <p className="text-gray-900 mb-1">18,190</p>
          <p className="text-xs text-green-600">+18.2% vs last month</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-sm text-gray-500">Conversions</p>
          </div>
          <p className="text-gray-900 mb-1">510</p>
          <p className="text-xs text-green-600">+32.1% vs last month</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center">
              <Eye className="w-5 h-5 text-pink-600" />
            </div>
            <p className="text-sm text-gray-500">Impressions</p>
          </div>
          <p className="text-gray-900 mb-1">973K</p>
          <p className="text-xs text-gray-500">This month</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-cyan-600" />
            </div>
            <p className="text-sm text-gray-500">Avg ROAS</p>
          </div>
          <p className="text-gray-900 mb-1">3.65x</p>
          <p className="text-xs text-green-600">Excellent</p>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* Revenue vs Spend */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-gray-900 mb-6">Revenue vs Spend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#6b7280' }} />
              <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} />
              <Line type="monotone" dataKey="spend" stroke="#ef4444" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Impressions & Clicks */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-gray-900 mb-6">Impressions & Clicks</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#6b7280' }} />
              <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="impressions" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="clicks" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Active Campaigns */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-gray-900">Active Campaigns</h3>
        </div>
        <div className="p-6 space-y-4">
          {activeCampaigns.map((campaign) => {
            const budgetUsed = (campaign.spent / campaign.budget) * 100;
            const ctr = ((campaign.clicks / campaign.impressions) * 100).toFixed(2);
            const cvr = ((campaign.conversions / campaign.clicks) * 100).toFixed(2);

            return (
              <div
                key={campaign.id}
                className="p-6 border border-gray-200 rounded-2xl hover:border-gray-300 transition-colors"
              >
                <div className="flex gap-6">
                  <ImageWithFallback
                    src={campaign.image}
                    alt={campaign.name}
                    className="w-32 h-32 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-gray-900 mb-2">{campaign.name}</h4>
                        <Badge className="bg-green-50 text-green-600 border-green-200">
                          {campaign.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">Edit Campaign</Button>
                    </div>

                    <div className="grid grid-cols-4 gap-6 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Budget</p>
                        <p className="text-sm text-gray-900">${campaign.budget.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Spent</p>
                        <p className="text-sm text-gray-900">${campaign.spent.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Impressions</p>
                        <p className="text-sm text-gray-900">{(campaign.impressions / 1000).toFixed(0)}K</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Clicks</p>
                        <p className="text-sm text-gray-900">{campaign.clicks.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <span>Budget Used</span>
                        <span>{budgetUsed.toFixed(0)}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${budgetUsed}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex gap-6 text-sm">
                      <div>
                        <span className="text-gray-500">CTR: </span>
                        <span className="text-gray-900">{ctr}%</span>
                      </div>
                      <div>
                        <span className="text-gray-500">CVR: </span>
                        <span className="text-gray-900">{cvr}%</span>
                      </div>
                      <div>
                        <span className="text-gray-500">ROAS: </span>
                        <span className="text-green-600">{campaign.roas}x</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Conversions: </span>
                        <span className="text-gray-900">{campaign.conversions}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}