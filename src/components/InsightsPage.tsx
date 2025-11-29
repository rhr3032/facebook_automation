import { TrendingUp, Users, Eye, Heart, MessageCircle, Share2 } from 'lucide-react';
import { PageSelector } from './PageSelector';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface InsightsPageProps {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
}

const weeklyData = [
  { day: 'Mon', reach: 28000, engagement: 2400, impressions: 35000 },
  { day: 'Tue', reach: 32000, engagement: 2800, impressions: 40000 },
  { day: 'Wed', reach: 29000, engagement: 2100, impressions: 36000 },
  { day: 'Thu', reach: 38000, engagement: 3400, impressions: 48000 },
  { day: 'Fri', reach: 42000, engagement: 3800, impressions: 52000 },
  { day: 'Sat', reach: 35000, engagement: 3200, impressions: 44000 },
  { day: 'Sun', reach: 31000, engagement: 2900, impressions: 38000 },
];

const audienceAge = [
  { age: '18-24', value: 15, color: '#3b82f6' },
  { age: '25-34', value: 35, color: '#8b5cf6' },
  { age: '35-44', value: 28, color: '#ec4899' },
  { age: '45-54', value: 15, color: '#f59e0b' },
  { age: '55+', value: 7, color: '#10b981' },
];

const audienceGender = [
  { name: 'Female', value: 58, color: '#ec4899' },
  { name: 'Male', value: 40, color: '#3b82f6' },
  { name: 'Other', value: 2, color: '#8b5cf6' },
];

const topLocations = [
  { city: 'New York', followers: 12543, percentage: 18.5 },
  { city: 'Los Angeles', followers: 10234, percentage: 15.1 },
  { city: 'Chicago', followers: 8765, percentage: 12.9 },
  { city: 'Houston', followers: 7234, percentage: 10.7 },
  { city: 'Phoenix', followers: 6543, percentage: 9.6 },
];

export function InsightsPage({ selectedPage, setSelectedPage }: InsightsPageProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-1">Insights & Analytics</h1>
          <p className="text-sm text-gray-500">Detailed performance metrics and audience data</p>
        </div>
        <PageSelector selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-5 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-sm text-gray-500">Total Reach</p>
          </div>
          <p className="text-gray-900 mb-1">847.2K</p>
          <p className="text-xs text-green-600">+18.2% vs last week</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-pink-600" />
            </div>
            <p className="text-sm text-gray-500">Engagement</p>
          </div>
          <p className="text-gray-900 mb-1">52.4K</p>
          <p className="text-xs text-green-600">+24.5% vs last week</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <p className="text-gray-900 mb-1">127.8K</p>
          <p className="text-xs text-green-600">+3,421 this week</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-sm text-gray-500">Comments</p>
          </div>
          <p className="text-gray-900 mb-1">8.9K</p>
          <p className="text-xs text-green-600">+12.3% vs last week</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
              <Share2 className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-sm text-gray-500">Shares</p>
          </div>
          <p className="text-gray-900 mb-1">4.2K</p>
          <p className="text-xs text-green-600">+15.7% vs last week</p>
        </div>
      </div>

      {/* Weekly Performance */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-gray-900 mb-6">Weekly Performance</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#6b7280' }} />
            <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="reach" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="engagement" stroke="#ec4899" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="impressions" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Audience Demographics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Age Distribution */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-gray-900 mb-6">Audience by Age</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={audienceAge}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ age, value }) => `${age}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {audienceAge.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gender Distribution */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-gray-900 mb-6">Audience by Gender</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={audienceGender}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {audienceGender.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Locations */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-gray-900 mb-6">Top Locations</h3>
        <div className="space-y-4">
          {topLocations.map((location, index) => (
            <div key={location.city} className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <span className="text-sm text-blue-600">{index + 1}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-900">{location.city}</p>
                  <p className="text-sm text-gray-600">{location.followers.toLocaleString()} followers</p>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${location.percentage}%` }}
                  />
                </div>
              </div>
              <p className="text-sm text-gray-500 w-12 text-right">{location.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
