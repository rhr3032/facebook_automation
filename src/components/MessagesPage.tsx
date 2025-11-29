import { useState } from 'react';
import { Search, Send, Paperclip, MoreVertical, Star, Archive, Trash2 } from 'lucide-react';
import { PageSelector } from './PageSelector';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';

interface MessagesPageProps {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
}

const conversations = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    lastMessage: 'Thanks for the quick response! I have one more question...',
    timestamp: '2m ago',
    unread: 2,
    starred: true,
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    lastMessage: 'When will the new product be available?',
    timestamp: '15m ago',
    unread: 1,
    starred: false,
  },
  {
    id: 3,
    name: 'Emma Williams',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    lastMessage: 'Great! Looking forward to the webinar.',
    timestamp: '1h ago',
    unread: 0,
    starred: false,
  },
  {
    id: 4,
    name: 'James Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    lastMessage: 'Could you send me more information about pricing?',
    timestamp: '2h ago',
    unread: 0,
    starred: true,
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150',
    lastMessage: 'Perfect! Thank you so much for your help.',
    timestamp: '3h ago',
    unread: 0,
    starred: false,
  },
];

const currentMessages = [
  {
    id: 1,
    sender: 'Sarah Johnson',
    content: 'Hi! I saw your post about the new analytics tool. Can you tell me more about it?',
    timestamp: '10:23 AM',
    isOwn: false,
  },
  {
    id: 2,
    sender: 'You',
    content: 'Hello Sarah! Thanks for reaching out. Our new analytics tool provides real-time insights into your social media performance with detailed metrics and custom reporting.',
    timestamp: '10:25 AM',
    isOwn: true,
  },
  {
    id: 3,
    sender: 'Sarah Johnson',
    content: 'That sounds great! What kind of metrics does it track?',
    timestamp: '10:26 AM',
    isOwn: false,
  },
  {
    id: 4,
    sender: 'You',
    content: 'It tracks engagement rates, reach, impressions, follower growth, and much more. You can also create custom dashboards tailored to your specific needs.',
    timestamp: '10:28 AM',
    isOwn: true,
  },
  {
    id: 5,
    sender: 'Sarah Johnson',
    content: 'Thanks for the quick response! I have one more question...',
    timestamp: '10:30 AM',
    isOwn: false,
  },
];

export function MessagesPage({ selectedPage, setSelectedPage }: MessagesPageProps) {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [message, setMessage] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-1">Messages</h1>
          <p className="text-sm text-gray-500">Manage conversations with your audience</p>
        </div>
        <PageSelector selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Unread Messages</p>
          <p className="text-gray-900">3</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Total Conversations</p>
          <p className="text-gray-900">247</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Avg Response Time</p>
          <p className="text-gray-900">12 min</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Starred</p>
          <p className="text-gray-900">15</p>
        </div>
      </div>

      {/* Messages Interface */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-3 h-[600px]">
          {/* Conversations List */}
          <div className="border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search messages..." className="pl-10 bg-gray-50" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`w-full p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    selectedConversation.id === conversation.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={conversation.avatar} />
                      <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm">{conversation.name}</p>
                          {conversation.starred && (
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500 line-clamp-1">{conversation.lastMessage}</p>
                        {conversation.unread > 0 && (
                          <Badge className="ml-2 h-5 w-5 flex items-center justify-center p-0 bg-blue-500">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-2 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={selectedConversation.avatar} />
                  <AvatarFallback>{selectedConversation.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">{selectedConversation.name}</p>
                  <p className="text-xs text-gray-500">Active now</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Star className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Archive className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {currentMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[70%] ${msg.isOwn ? 'order-2' : ''}`}>
                    {!msg.isOwn && (
                      <p className="text-xs text-gray-500 mb-1">{msg.sender}</p>
                    )}
                    <div
                      className={`rounded-2xl p-4 ${
                        msg.isOwn
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-3">
                <Button variant="ghost" size="sm">
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Textarea
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[44px] max-h-[120px] resize-none"
                  rows={1}
                />
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
