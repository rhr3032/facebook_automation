import { TrendingUp, TrendingDown, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InsightsCardsProps {
  selectedPage: string;
}

export function InsightsCards({ selectedPage }: InsightsCardsProps) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Best Performing Post */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <h3 className="text-gray-900">Best Performing</h3>
        </div>
        
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=400"
          alt="Best performing post"
          className="w-full h-32 rounded-xl object-cover mb-4"
        />
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          Top 5 marketing trends you need to know in 2024...
        </p>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500">Engagement</p>
            <p className="text-sm text-gray-900">4,111</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Reach</p>
            <p className="text-sm text-gray-900">52.8K</p>
          </div>
        </div>
      </div>

      {/* Worst Performing Post */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
            <TrendingDown className="w-4 h-4 text-red-600" />
          </div>
          <h3 className="text-gray-900">Needs Improvement</h3>
        </div>
        
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=400"
          alt="Lowest performing post"
          className="w-full h-32 rounded-xl object-cover mb-4"
        />
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          Behind the scenes: How we create engaging content...
        </p>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500">Engagement</p>
            <p className="text-sm text-gray-900">1,834</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Reach</p>
            <p className="text-sm text-gray-900">29.4K</p>
          </div>
        </div>
      </div>

      {/* Recommended Posting Time */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
            <Clock className="w-4 h-4 text-blue-600" />
          </div>
          <h3 className="text-gray-900">Best Time to Post</h3>
        </div>
        
        <div className="space-y-4 mt-6">
          <div className="p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">Weekdays</p>
            <p className="text-gray-900">2:00 PM - 4:00 PM</p>
            <p className="text-xs text-gray-500 mt-1">Peak engagement time</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">Weekends</p>
            <p className="text-gray-900">10:00 AM - 12:00 PM</p>
            <p className="text-xs text-gray-500 mt-1">Best weekend window</p>
          </div>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">
          Based on last 30 days of engagement data
        </p>
      </div>
    </div>
  );
}
