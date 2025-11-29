import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Eye, Heart, MessageCircle, Share2 } from 'lucide-react';

interface RecentPostsTableProps {
  selectedPage: string;
}

const posts = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1623715537851-8bc15aa8c145?w=80',
    caption: 'Exciting news! Our new AI-powered analytics tool is now live...',
    reach: '45.2K',
    impressions: '67.8K',
    likes: 2847,
    comments: 156,
    shares: 342,
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?w=80',
    caption: 'Join us for our upcoming webinar on social media strategies...',
    reach: '38.1K',
    impressions: '52.3K',
    likes: 1923,
    comments: 89,
    shares: 267,
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=80',
    caption: 'Top 5 marketing trends you need to know in 2024...',
    reach: '52.8K',
    impressions: '78.4K',
    likes: 3421,
    comments: 234,
    shares: 456,
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=80',
    caption: 'Behind the scenes: How we create engaging content...',
    reach: '29.4K',
    impressions: '41.2K',
    likes: 1567,
    comments: 78,
    shares: 189,
  },
  {
    id: 5,
    thumbnail: 'https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=80',
    caption: 'Success story: How our client increased engagement by 300%...',
    reach: '61.5K',
    impressions: '89.7K',
    likes: 4234,
    comments: 312,
    shares: 589,
  },
];

export function RecentPostsTable({ selectedPage }: RecentPostsTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-gray-900 mb-1">Recent Posts</h3>
        <p className="text-sm text-gray-500">Performance overview of your latest content</p>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Post</TableHead>
            <TableHead className="text-center">Reach</TableHead>
            <TableHead className="text-center">Impressions</TableHead>
            <TableHead className="text-center">Likes</TableHead>
            <TableHead className="text-center">Comments</TableHead>
            <TableHead className="text-center">Shares</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src={post.thumbnail}
                    alt="Post thumbnail"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <p className="text-sm text-gray-900 line-clamp-2">{post.caption}</p>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{post.reach}</span>
                </div>
              </TableCell>
              <TableCell className="text-center text-sm">{post.impressions}</TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 text-pink-500" />
                  <span className="text-sm">{post.likes.toLocaleString()}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">{post.comments}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm">{post.shares}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
