import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function CreateCampaignDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    campaignName: '',
    objective: '',
    budget: '',
    duration: '',
    targetAudience: '',
    adContent: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.campaignName || !formData.objective || !formData.budget) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success(`Campaign "${formData.campaignName}" created successfully!`);
    
    setFormData({
      campaignName: '',
      objective: '',
      budget: '',
      duration: '',
      targetAudience: '',
      adContent: '',
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Create Campaign
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Ad Campaign</DialogTitle>
          <DialogDescription>
            Set up a new advertising campaign for your Facebook page
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4 max-h-[500px] overflow-y-auto">
            <div className="space-y-2">
              <Label htmlFor="campaignName">Campaign Name *</Label>
              <Input
                id="campaignName"
                placeholder="e.g., Summer Product Launch"
                value={formData.campaignName}
                onChange={(e) => setFormData({ ...formData, campaignName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="objective">Campaign Objective *</Label>
              <Input
                id="objective"
                placeholder="e.g., Brand Awareness, Conversions, Traffic"
                value={formData.objective}
                onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Daily Budget ($) *</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="50"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (days)</Label>
                <Input
                  id="duration"
                  type="number"
                  placeholder="30"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Input
                id="targetAudience"
                placeholder="e.g., Age 25-45, Tech enthusiasts, USA"
                value={formData.targetAudience}
                onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="adContent">Ad Content</Label>
              <Textarea
                id="adContent"
                placeholder="Write your ad copy here..."
                rows={4}
                value={formData.adContent}
                onChange={(e) => setFormData({ ...formData, adContent: e.target.value })}
              />
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700 mb-2">Estimated Results:</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Daily Reach</p>
                  <p className="text-gray-900">
                    {formData.budget ? `${parseInt(formData.budget) * 800} - ${parseInt(formData.budget) * 1200}` : '0 - 0'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Total Budget</p>
                  <p className="text-gray-900">
                    ${formData.budget && formData.duration ? parseInt(formData.budget) * parseInt(formData.duration) : '0'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              Create Campaign
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
