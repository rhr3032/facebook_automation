import { ThumbsUp, Users, TrendingUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

interface PageSummaryCardProps {
  selectedPage: string;
}

const pageData: Record<string, any> = {
  'tech-innovators': {
    name: 'Tech Innovators Hub',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200',
    likes: '127,543',
    followers: '127,891',
    growth: '+12.5%',
    category: 'Technology',
  },
  'digital-marketing': {
    name: 'Digital Marketing Pro',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200',
    likes: '89,234',
    followers: '89,567',
    growth: '+8.3%',
    category: 'Marketing',
  },
  'creative-studio': {
    name: 'Creative Studio',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200',
    likes: '54,123',
    followers: '54,321',
    growth: '+15.7%',
    category: 'Design',
  },
};

export function PageSummaryCard({ selectedPage }: PageSummaryCardProps) {
  const page = pageData[selectedPage] || pageData['tech-innovators'];

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-start gap-6">
        {/* Page Image */}
        <Avatar className="w-24 h-24 rounded-2xl">
          <AvatarImage src={page.image} />
          <AvatarFallback>{page.name[0]}</AvatarFallback>
        </Avatar>

        {/* Page Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-gray-900 mb-2">{page.name}</h2>
              <Badge variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-50">
                {page.category}
              </Badge>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-600 rounded-lg">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">{page.growth} this month</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <ThumbsUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Page Likes</p>
                <p className="text-gray-900">{page.likes}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Followers</p>
                <p className="text-gray-900">{page.followers}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
