import { Eye, Heart, UserPlus, ThumbsUp, TrendingUp, TrendingDown } from 'lucide-react';

interface MetricsCardsProps {
  selectedPage: string;
}

const metricsData: Record<string, any> = {
  'tech-innovators': {
    reach: { value: '847.2K', change: '+18.2%', trend: 'up' },
    engagement: { value: '52.4K', change: '+24.5%', trend: 'up' },
    followers: { value: '+3,421', change: '+12.3%', trend: 'up' },
    likes: { value: '+2,876', change: '-5.2%', trend: 'down' },
  },
  'digital-marketing': {
    reach: { value: '625.8K', change: '+15.7%', trend: 'up' },
    engagement: { value: '38.2K', change: '+19.3%', trend: 'up' },
    followers: { value: '+2,145', change: '+8.1%', trend: 'up' },
    likes: { value: '+1,987', change: '+6.4%', trend: 'up' },
  },
  'creative-studio': {
    reach: { value: '423.5K', change: '+22.4%', trend: 'up' },
    engagement: { value: '28.9K', change: '+31.2%', trend: 'up' },
    followers: { value: '+1,876', change: '+15.8%', trend: 'up' },
    likes: { value: '+1,654', change: '+10.2%', trend: 'up' },
  },
};

export function MetricsCards({ selectedPage }: MetricsCardsProps) {
  const metrics = metricsData[selectedPage] || metricsData['tech-innovators'];

  const cards = [
    {
      title: 'Total Reach',
      value: metrics.reach.value,
      change: metrics.reach.change,
      trend: metrics.reach.trend,
      icon: Eye,
      color: 'blue',
    },
    {
      title: 'Post Engagement',
      value: metrics.engagement.value,
      change: metrics.engagement.change,
      trend: metrics.engagement.trend,
      icon: Heart,
      color: 'pink',
    },
    {
      title: 'New Followers',
      value: metrics.followers.value,
      change: metrics.followers.change,
      trend: metrics.followers.trend,
      icon: UserPlus,
      color: 'green',
    },
    {
      title: 'Page Likes',
      value: metrics.likes.value,
      change: metrics.likes.change,
      trend: metrics.likes.trend,
      icon: ThumbsUp,
      color: 'purple',
    },
  ];

  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-600',
    pink: 'bg-pink-50 text-pink-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;
        const TrendIcon = card.trend === 'up' ? TrendingUp : TrendingDown;
        const trendColor = card.trend === 'up' ? 'text-green-600' : 'text-red-600';
        const trendBg = card.trend === 'up' ? 'bg-green-50' : 'bg-red-50';

        return (
          <div
            key={card.title}
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[card.color]}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${trendBg}`}>
                <TrendIcon className={`w-3 h-3 ${trendColor}`} />
                <span className={`text-xs ${trendColor}`}>{card.change}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-1">{card.title}</p>
            <p className="text-gray-900">{card.value}</p>
          </div>
        );
      })}
    </div>
  );
}
