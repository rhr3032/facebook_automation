import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';

export function AddPageDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    pageName: '',
    pageUrl: '',
    category: '',
    accessToken: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.pageName || !formData.pageUrl || !formData.category) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Mock adding page
    toast.success(`Page "${formData.pageName}" added successfully!`);
    
    // Reset form and close dialog
    setFormData({ pageName: '', pageUrl: '', category: '', accessToken: '' });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Add New Page
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Facebook Page</DialogTitle>
          <DialogDescription>
            Connect a new Facebook page to your dashboard. You'll need your page URL and access token.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="pageName">Page Name *</Label>
              <Input
                id="pageName"
                placeholder="e.g., Tech Innovators Hub"
                value={formData.pageName}
                onChange={(e) => setFormData({ ...formData, pageName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pageUrl">Facebook Page URL *</Label>
              <Input
                id="pageUrl"
                placeholder="https://facebook.com/yourpage"
                value={formData.pageUrl}
                onChange={(e) => setFormData({ ...formData, pageUrl: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Input
                id="category"
                placeholder="e.g., Technology, Marketing, Design"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accessToken">Page Access Token *</Label>
              <Input
                id="accessToken"
                type="password"
                placeholder="Enter your Facebook page access token"
                value={formData.accessToken}
                onChange={(e) => setFormData({ ...formData, accessToken: e.target.value })}
              />
              <p className="text-xs text-gray-500">
                You can get your access token from Facebook's Developer Tools
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              Add Page
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
