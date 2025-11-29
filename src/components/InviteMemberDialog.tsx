import { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';

export function InviteMemberDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    role: 'viewer',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.name) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    toast.success(`Invitation sent to ${formData.name} (${formData.email})`);
    
    setFormData({ email: '', name: '', role: 'viewer' });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <UserPlus className="w-4 h-4 mr-2" />
          Invite Member
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Invite Team Member</DialogTitle>
          <DialogDescription>
            Send an invitation to add a new member to your team
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="viewer">Viewer - Can view all data</option>
                <option value="editor">Editor - Can create and edit content</option>
                <option value="admin">Admin - Full access</option>
              </select>
              <p className="text-xs text-gray-500">Choose the access level for this team member</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg space-y-2">
              <p className="text-sm">Role Permissions:</p>
              <ul className="text-xs text-gray-600 space-y-1">
                {formData.role === 'viewer' && (
                  <>
                    <li>• View all pages and analytics</li>
                    <li>• Cannot create or edit content</li>
                    <li>• Cannot manage team members</li>
                  </>
                )}
                {formData.role === 'editor' && (
                  <>
                    <li>• View all pages and analytics</li>
                    <li>• Create and edit posts</li>
                    <li>• Manage campaigns</li>
                    <li>• Cannot manage team members</li>
                  </>
                )}
                {formData.role === 'admin' && (
                  <>
                    <li>• Full access to all features</li>
                    <li>• Manage team members</li>
                    <li>• Access billing and settings</li>
                    <li>• Delete pages and campaigns</li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              Send Invitation
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
