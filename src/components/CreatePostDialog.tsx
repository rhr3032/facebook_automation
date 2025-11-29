import { useState } from 'react';
import { Plus, Image as ImageIcon, Video, Link as LinkIcon, Calendar, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { toast } from 'sonner@2.0.3';

export function CreatePostDialog() {
  const [open, setOpen] = useState(false);
  const [postType, setPostType] = useState<'photo' | 'video' | 'link'>('photo');
  const [formData, setFormData] = useState({
    content: '',
    mediaUrl: '',
    linkUrl: '',
    scheduledDate: '',
    scheduledTime: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.content) {
      toast.error('Please add post content');
      return;
    }

    if (formData.scheduledDate && formData.scheduledTime) {
      toast.success(`Post scheduled for ${formData.scheduledDate} at ${formData.scheduledTime}!`);
    } else {
      toast.success('Post saved as draft!');
    }
    
    setFormData({ content: '', mediaUrl: '', linkUrl: '', scheduledDate: '', scheduledTime: '' });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Create Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
          <DialogDescription>
            Create and schedule content for your Facebook page
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            {/* Post Type Selection */}
            <Tabs value={postType} onValueChange={(v) => setPostType(v as typeof postType)}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="photo">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Photo
                </TabsTrigger>
                <TabsTrigger value="video">
                  <Video className="w-4 h-4 mr-2" />
                  Video
                </TabsTrigger>
                <TabsTrigger value="link">
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Link
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Post Content */}
            <div className="space-y-2">
              <Label htmlFor="content">Post Content *</Label>
              <Textarea
                id="content"
                placeholder="What's on your mind?"
                rows={5}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              />
            </div>

            {/* Media/Link URL */}
            {postType === 'photo' && (
              <div className="space-y-2">
                <Label htmlFor="mediaUrl">Photo URL</Label>
                <Input
                  id="mediaUrl"
                  placeholder="https://example.com/image.jpg"
                  value={formData.mediaUrl}
                  onChange={(e) => setFormData({ ...formData, mediaUrl: e.target.value })}
                />
              </div>
            )}

            {postType === 'video' && (
              <div className="space-y-2">
                <Label htmlFor="mediaUrl">Video URL</Label>
                <Input
                  id="mediaUrl"
                  placeholder="https://example.com/video.mp4"
                  value={formData.mediaUrl}
                  onChange={(e) => setFormData({ ...formData, mediaUrl: e.target.value })}
                />
              </div>
            )}

            {postType === 'link' && (
              <div className="space-y-2">
                <Label htmlFor="linkUrl">Link URL</Label>
                <Input
                  id="linkUrl"
                  placeholder="https://example.com/article"
                  value={formData.linkUrl}
                  onChange={(e) => setFormData({ ...formData, linkUrl: e.target.value })}
                />
              </div>
            )}

            {/* Schedule Options */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="scheduledDate">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Schedule Date
                </Label>
                <Input
                  id="scheduledDate"
                  type="date"
                  value={formData.scheduledDate}
                  onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="scheduledTime">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Schedule Time
                </Label>
                <Input
                  id="scheduledTime"
                  type="time"
                  value={formData.scheduledTime}
                  onChange={(e) => setFormData({ ...formData, scheduledTime: e.target.value })}
                />
              </div>
            </div>

            <p className="text-xs text-gray-500">
              Leave schedule empty to save as draft
            </p>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="outline">
              Save as Draft
            </Button>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              {formData.scheduledDate ? 'Schedule Post' : 'Publish Now'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
