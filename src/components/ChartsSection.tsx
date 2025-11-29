import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartsSectionProps {
  selectedPage: string;
}

const reachData = [
  { date: 'Nov 1', reach: 24000 },
  { date: 'Nov 5', reach: 28000 },
  { date: 'Nov 9', reach: 32000 },
  { date: 'Nov 13', reach: 29000 },
  { date: 'Nov 17', reach: 38000 },
  { date: 'Nov 21', reach: 42000 },
  { date: 'Nov 25', reach: 45000 },
  { date: 'Nov 29', reach: 51000 },
];

const engagementData = [
  { type: 'Photo', engagement: 4200 },
  { type: 'Video', engagement: 7800 },
  { type: 'Link', engagement: 2400 },
  { type: 'Text', engagement: 1800 },
  { type: 'Carousel', engagement: 5600 },
];

export function ChartsSection({ selectedPage }: ChartsSectionProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Reach Chart */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <div className="mb-6">
          <h3 className="text-gray-900 mb-1">Reach Over Time</h3>
          <p className="text-sm text-gray-500">Last 30 days performance</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={reachData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12, fill: '#6b7280' }}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#6b7280' }}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px',
              }}
            />
            <Line 
              type="monotone" 
              dataKey="reach" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Engagement by Post Type Chart */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <div className="mb-6">
          <h3 className="text-gray-900 mb-1">Engagement by Post Type</h3>
          <p className="text-sm text-gray-500">Total engagement per content type</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="type" 
              tick={{ fontSize: 12, fill: '#6b7280' }}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#6b7280' }}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px',
              }}
            />
            <Bar 
              dataKey="engagement" 
              fill="#3b82f6" 
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
