import { Check, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface PageSelectorProps {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
}

const pages = [
  {
    id: 'tech-innovators',
    name: 'Tech Innovators Hub',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100',
    followers: '127K',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing Pro',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100',
    followers: '89K',
  },
  {
    id: 'creative-studio',
    name: 'Creative Studio',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100',
    followers: '54K',
  },
];

export function PageSelector({ selectedPage, setSelectedPage }: PageSelectorProps) {
  const currentPage = pages.find((p) => p.id === selectedPage) || pages[0];

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-gray-900 mb-1">Dashboard Overview</h1>
        <p className="text-sm text-gray-500">Monitor and manage your Facebook pages performance</p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 transition-colors">
            <Avatar className="w-8 h-8">
              <AvatarImage src={currentPage.image} />
              <AvatarFallback>{currentPage.name[0]}</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm">{currentPage.name}</p>
              <p className="text-xs text-gray-500">{currentPage.followers} followers</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          {pages.map((page) => (
            <DropdownMenuItem
              key={page.id}
              onClick={() => setSelectedPage(page.id)}
              className="flex items-center gap-3 p-3"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src={page.image} />
                <AvatarFallback>{page.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm">{page.name}</p>
                <p className="text-xs text-gray-500">{page.followers} followers</p>
              </div>
              {selectedPage === page.id && <Check className="w-4 h-4 text-blue-500" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
