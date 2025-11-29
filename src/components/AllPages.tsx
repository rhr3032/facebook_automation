import { TrendingUp, TrendingDown, Users, ThumbsUp, Eye, MoreVertical } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { AddPageDialog } from './AddPageDialog';
import { PageDetailsDialog } from './PageDetailsDialog';
import { toast } from 'sonner';

const pages = [
  {
    id: 'tech-innovators',
    name: 'Tech Innovators Hub',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200',
    category: 'Technology',
    followers: 127891,
    likes: 127543,
    reach: 847200,
    engagement: 52400,
    growth: 12.5,
    status: 'active',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing Pro',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200',
    category: 'Marketing',
    followers: 89567,
    likes: 89234,
    reach: 625800,
    engagement: 38200,
    growth: 8.3,
    status: 'active',
  },
  {
    id: 'creative-studio',
    name: 'Creative Studio',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200',
    category: 'Design',
    followers: 54321,
    likes: 54123,
    reach: 423500,
    engagement: 28900,
    growth: 15.7,
    status: 'active',
  },
  {
    id: 'fitness-life',
    name: 'Fitness Life',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200',
    category: 'Health & Fitness',
    followers: 98234,
    likes: 98012,
    reach: 534200,
    engagement: 45600,
    growth: -3.2,
    status: 'active',
  },
  {
    id: 'food-lovers',
    name: 'Food Lovers Paradise',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200',
    category: 'Food & Beverage',
    followers: 76543,
    likes: 76321,
    reach: 412300,
    engagement: 34500,
    growth: 10.2,
    status: 'active',
  },
  {
    id: 'travel-world',
    name: 'Travel the World',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200',
    category: 'Travel',
    followers: 112456,
    likes: 112234,
    reach: 678900,
    engagement: 56700,
    growth: 18.4,
    status: 'active',
  },
];

export function AllPages() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-1">All Pages</h1>
          <p className="text-sm text-gray-500">Manage and monitor all your Facebook pages</p>
        </div>
        <AddPageDialog />
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Total Pages</p>
          <p className="text-gray-900 mb-1">{pages.length}</p>
          <p className="text-xs text-green-600">All active</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Total Followers</p>
          <p className="text-gray-900 mb-1">
            {(pages.reduce((sum, p) => sum + p.followers, 0) / 1000).toFixed(1)}K
          </p>
          <p className="text-xs text-green-600">+11.2% this month</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Total Reach</p>
          <p className="text-gray-900 mb-1">
            {(pages.reduce((sum, p) => sum + p.reach, 0) / 1000000).toFixed(2)}M
          </p>
          <p className="text-xs text-green-600">+14.5% this month</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Avg Engagement</p>
          <p className="text-gray-900 mb-1">
            {(pages.reduce((sum, p) => sum + p.engagement, 0) / pages.length / 1000).toFixed(1)}K
          </p>
          <p className="text-xs text-green-600">+9.8% this month</p>
        </div>
      </div>

      {/* Pages Grid */}
      <div className="grid grid-cols-2 gap-6">
        {pages.map((page) => (
          <div key={page.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 rounded-xl">
                  <AvatarImage src={page.image} />
                  <AvatarFallback>{page.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-gray-900 mb-1">{page.name}</h3>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-50">
                    {page.category}
                  </Badge>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Followers</p>
                  <p className="text-sm text-gray-900">{(page.followers / 1000).toFixed(1)}K</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-pink-50 rounded-lg flex items-center justify-center">
                  <ThumbsUp className="w-4 h-4 text-pink-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Likes</p>
                  <p className="text-sm text-gray-900">{(page.likes / 1000).toFixed(1)}K</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Eye className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Reach</p>
                  <p className="text-sm text-gray-900">{(page.reach / 1000).toFixed(1)}K</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  page.growth > 0 ? 'bg-green-50' : 'bg-red-50'
                }`}>
                  {page.growth > 0 ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500">Growth</p>
                  <p className={`text-sm ${page.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {page.growth > 0 ? '+' : ''}{page.growth}%
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-4 border-t border-gray-100">
              <PageDetailsDialog page={page} />
              <Button 
                className="flex-1 bg-blue-500 hover:bg-blue-600" 
                size="sm"
                onClick={() => toast.success(`Managing ${page.name}...`)}
              >
                Manage
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}