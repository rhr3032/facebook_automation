import { useState } from 'react';
import { Users, ThumbsUp, Eye, TrendingUp, Calendar, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

interface PageDetailsDialogProps {
  page: {
    id: string;
    name: string;
    image: string;
    category: string;
    followers: number;
    likes: number;
    reach: number;
    engagement: number;
    growth: number;
  };
}

export function PageDetailsDialog({ page }: PageDetailsDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Page Details</DialogTitle>
          <DialogDescription>
            Detailed information about {page.name}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Page Header */}
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 rounded-xl">
              <AvatarImage src={page.image} />
              <AvatarFallback>{page.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-gray-900 mb-2">{page.name}</h3>
              <Badge variant="secondary" className="bg-blue-50 text-blue-600">
                {page.category}
              </Badge>
            </div>
          </div>

          <Separator />

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-sm text-gray-500">Followers</p>
              </div>
              <p className="text-xl text-gray-900">{(page.followers / 1000).toFixed(1)}K</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center">
                  <ThumbsUp className="w-5 h-5 text-pink-600" />
                </div>
                <p className="text-sm text-gray-500">Page Likes</p>
              </div>
              <p className="text-xl text-gray-900">{(page.likes / 1000).toFixed(1)}K</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-500">Total Reach</p>
              </div>
              <p className="text-xl text-gray-900">{(page.reach / 1000).toFixed(1)}K</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  page.growth > 0 ? 'bg-green-50' : 'bg-red-50'
                }`}>
                  <TrendingUp className={`w-5 h-5 ${page.growth > 0 ? 'text-green-600' : 'text-red-600'}`} />
                </div>
                <p className="text-sm text-gray-500">Growth Rate</p>
              </div>
              <p className={`text-xl ${page.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {page.growth > 0 ? '+' : ''}{page.growth}%
              </p>
            </div>
          </div>

          <Separator />

          {/* Additional Info */}
          <div className="space-y-3">
            <h4 className="text-sm text-gray-900">Page Information</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-500">Created:</span>
                <span className="text-gray-900">January 15, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-gray-500">URL:</span>
                <span className="text-gray-900">facebook.com/{page.id}</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
