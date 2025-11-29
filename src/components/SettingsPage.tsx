import { Bell, Lock, User, Globe, CreditCard, Users, Palette, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { InviteMemberDialog } from './InviteMemberDialog';

export function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-1">Settings</h1>
        <p className="text-sm text-gray-500">Manage your account and application preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-white border border-gray-200">
          <TabsTrigger value="profile">
            <User className="w-4 h-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Lock className="w-4 h-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="billing">
            <CreditCard className="w-4 h-4 mr-2" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="team">
            <Users className="w-4 h-4 mr-2" />
            Team
          </TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-gray-900">Profile Settings</h3>
              <p className="text-sm text-gray-500 mt-1">Update your personal information</p>
            </div>
            <div className="p-6 space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm" className="mr-2">Change Photo</Button>
                  <Button variant="ghost" size="sm" className="text-red-600">Remove</Button>
                  <p className="text-xs text-gray-500 mt-2">JPG, GIF or PNG. Max size of 2MB.</p>
                </div>
              </div>

              <Separator />

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Sarah" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Chen" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="sarah.chen@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" defaultValue="Social Media Manager & Digital Marketing Specialist" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input id="timezone" defaultValue="America/New_York (EST)" />
              </div>

              <Separator />

              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-blue-500 hover:bg-blue-600">Save Changes</Button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-gray-900">Notification Preferences</h3>
              <p className="text-sm text-gray-500 mt-1">Manage how you receive notifications</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive email updates about your account activity</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">New Messages</p>
                  <p className="text-sm text-gray-500">Get notified when you receive new messages</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Post Performance</p>
                  <p className="text-sm text-gray-500">Receive updates on your post performance</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Weekly Reports</p>
                  <p className="text-sm text-gray-500">Get weekly summary of your page insights</p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Campaign Alerts</p>
                  <p className="text-sm text-gray-500">Be notified about your ad campaign status</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Marketing Updates</p>
                  <p className="text-sm text-gray-500">Receive tips and updates about new features</p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button className="bg-blue-500 hover:bg-blue-600">Save Preferences</Button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-gray-900">Change Password</h3>
                <p className="text-sm text-gray-500 mt-1">Update your password to keep your account secure</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Separator />
                <div className="flex justify-end">
                  <Button className="bg-blue-500 hover:bg-blue-600">Update Password</Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-gray-900">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500 mt-1">Add an extra layer of security to your account</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm mb-1">Enable Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">Secure your account with 2FA</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-gray-900">Active Sessions</h3>
                <p className="text-sm text-gray-500 mt-1">Manage your active sessions across devices</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm mb-1">MacBook Pro - Chrome</p>
                    <p className="text-xs text-gray-500">New York, USA • Active now</p>
                  </div>
                  <Badge className="bg-green-50 text-green-600 border-green-200">Current</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div>
                    <p className="text-sm mb-1">iPhone 14 - Safari</p>
                    <p className="text-xs text-gray-500">New York, USA • 2 hours ago</p>
                  </div>
                  <Button variant="outline" size="sm" className="text-red-600">Revoke</Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Billing Settings */}
        <TabsContent value="billing">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-gray-900">Current Plan</h3>
                <p className="text-sm text-gray-500 mt-1">Manage your subscription and billing</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                  <div>
                    <h4 className="text-gray-900 mb-2">Professional Plan</h4>
                    <p className="text-sm text-gray-600 mb-4">Billed monthly</p>
                    <p className="text-gray-900">$99.00 <span className="text-sm text-gray-500">/month</span></p>
                  </div>
                  <Button variant="outline">Change Plan</Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-gray-900">Payment Method</h3>
                <p className="text-sm text-gray-500 mt-1">Update your payment information</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gray-900 rounded flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm">•••• •••• •••• 4242</p>
                      <p className="text-xs text-gray-500">Expires 12/25</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm" className="text-red-600">Remove</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-gray-900">Billing History</h3>
                <p className="text-sm text-gray-500 mt-1">View your past invoices</p>
              </div>
              <div className="p-6 space-y-3">
                {[
                  { date: 'Nov 1, 2025', amount: '$99.00', status: 'Paid' },
                  { date: 'Oct 1, 2025', amount: '$99.00', status: 'Paid' },
                  { date: 'Sep 1, 2025', amount: '$99.00', status: 'Paid' },
                ].map((invoice, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div>
                      <p className="text-sm mb-1">{invoice.date}</p>
                      <p className="text-sm text-gray-500">{invoice.amount}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-green-50 text-green-600 border-green-200">{invoice.status}</Badge>
                      <Button variant="outline" size="sm">Download</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Team Settings */}
        <TabsContent value="team">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-900">Team Members</h3>
                  <p className="text-sm text-gray-500 mt-1">Manage your team and their access</p>
                </div>
                <InviteMemberDialog />
              </div>
            </div>
            <div className="p-6 space-y-4">
              {[
                { name: 'Sarah Chen', email: 'sarah.chen@example.com', role: 'Admin', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
                { name: 'Michael Rodriguez', email: 'michael.r@example.com', role: 'Editor', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
                { name: 'Emily Johnson', email: 'emily.j@example.com', role: 'Viewer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
              ].map((member, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{member.role}</Badge>
                    {member.role !== 'Admin' && (
                      <Button variant="outline" size="sm" className="text-red-600">Remove</Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}