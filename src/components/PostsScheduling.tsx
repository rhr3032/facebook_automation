import { useState } from 'react';
import { Calendar, Clock, Image as ImageIcon, Video, Link as LinkIcon, Plus } from 'lucide-react';
import { PageSelector } from './PageSelector';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar as CalendarComponent } from './ui/calendar';
import { CreatePostDialog } from './CreatePostDialog';
import { toast } from 'sonner';

interface PostsSchedulingProps {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
}

const scheduledPosts = [
  {
    id: 1,
    type: 'photo',
    content: 'Excited to share our latest product update! Check out the new features...',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    scheduledDate: '2025-11-20',
    scheduledTime: '2:00 PM',
    status: 'scheduled',
  },
  {
    id: 2,
    type: 'video',
    content: 'Behind the scenes of our creative process. Watch the full video...',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=400',
    scheduledDate: '2025-11-21',
    scheduledTime: '3:30 PM',
    status: 'scheduled',
  },
  {
    id: 3,
    type: 'link',
    content: 'New blog post: 10 Tips for Better Social Media Engagement',
    image: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=400',
    scheduledDate: '2025-11-22',
    scheduledTime: '10:00 AM',
    status: 'scheduled',
  },
];

const draftPosts = [
  {
    id: 4,
    type: 'photo',
    content: 'Summer sale announcement - save up to 50%!',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
    lastEdited: '2 hours ago',
    status: 'draft',
  },
  {
    id: 5,
    type: 'video',
    content: 'Customer testimonials compilation',
    image: 'https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=400',
    lastEdited: '1 day ago',
    status: 'draft',
  },
];

export function PostsScheduling({ selectedPage, setSelectedPage }: PostsSchedulingProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'photo':
        return <ImageIcon className="w-4 h-4" />;
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'link':
        return <LinkIcon className="w-4 h-4" />;
      default:
        return <ImageIcon className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-1">Posts & Scheduling</h1>
          <p className="text-sm text-gray-500">Create, schedule, and manage your content</p>
        </div>
        <div className="flex gap-3">
          <PageSelector selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <CreatePostDialog />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Scheduled Posts</p>
          <p className="text-gray-900">{scheduledPosts.length}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Draft Posts</p>
          <p className="text-gray-900">{draftPosts.length}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Published This Week</p>
          <p className="text-gray-900">12</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Avg Engagement Rate</p>
          <p className="text-gray-900">4.8%</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="col-span-2">
          <Tabs defaultValue="scheduled" className="space-y-6">
            <TabsList className="bg-white border border-gray-200">
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
              <TabsTrigger value="published">Published</TabsTrigger>
            </TabsList>

            <TabsContent value="scheduled" className="space-y-4">
              {scheduledPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex gap-4">
                    <ImageWithFallback
                      src={post.image}
                      alt="Post preview"
                      className="w-32 h-32 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="bg-blue-50 text-blue-600">
                          {getTypeIcon(post.type)}
                          <span className="ml-1 capitalize">{post.type}</span>
                        </Badge>
                        <Badge className="bg-green-50 text-green-600 border-green-200">
                          Scheduled
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-900 mb-3">{post.content}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {post.scheduledDate}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.scheduledTime}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Reschedule</Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="drafts" className="space-y-4">
              {draftPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex gap-4">
                    <ImageWithFallback
                      src={post.image}
                      alt="Post preview"
                      className="w-32 h-32 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="bg-blue-50 text-blue-600">
                          {getTypeIcon(post.type)}
                          <span className="ml-1 capitalize">{post.type}</span>
                        </Badge>
                        <Badge variant="secondary">Draft</Badge>
                      </div>
                      <p className="text-sm text-gray-900 mb-3">{post.content}</p>
                      <p className="text-sm text-gray-500 mb-4">Last edited {post.lastEdited}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button size="sm" className="bg-blue-500 hover:bg-blue-600">Schedule</Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="published">
              <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center">
                <p className="text-gray-500">Published posts will appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Calendar Widget */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-gray-900 mb-4">Calendar</h3>
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
          </div>

          {/* Best Time to Post */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-gray-900 mb-4">Best Time to Post</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-xl">
                <p className="text-sm mb-1">Weekdays</p>
                <p className="text-xs text-gray-600">2:00 PM - 4:00 PM</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl">
                <p className="text-sm mb-1">Weekends</p>
                <p className="text-xs text-gray-600">10:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <ImageIcon className="w-4 h-4 mr-2" />
                Photo Post
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Video className="w-4 h-4 mr-2" />
                Video Post
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <LinkIcon className="w-4 h-4 mr-2" />
                Link Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}