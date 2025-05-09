
import React from 'react';
import { 
  Mail, 
  Twitter, 
  Github, 
  MessageSquare, 
  Music, 
  LineChart,
  SearchCheck,
  Newspaper,
  BarChart3,
  TrendingUp,
  Code,
  Monitor,
  Keyboard,
  AudioLines,
  Search
} from 'lucide-react';

interface IconCardProps {
  icon: React.ReactNode;
  label: string;
  url: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, label, url }) => {
  return (
    <a
      href={url}
      className="flex flex-col items-center glass-card p-4 hover:bg-white/5 transition-colors duration-200 group"
    >
      <div className="text-white/80 group-hover:text-white mb-2">
        {icon}
      </div>
      <span className="text-sm text-white/70 group-hover:text-white">{label}</span>
    </a>
  );
};

const IconGrid: React.FC = () => {
  const favorites = [
    { icon: <Mail size={24} />, label: 'Gmail', url: 'https://mail.google.com' },
    { icon: <Twitter size={24} />, label: 'Twitter', url: 'https://twitter.com' },
    { icon: <Github size={24} />, label: 'Github', url: 'https://github.com' },
    { icon: <MessageSquare size={24} />, label: 'Discord', url: 'https://discord.com/app' },
  ];

  const tools = [
    { icon: <Music size={24} />, label: 'Spotify', url: 'https://open.spotify.com' },
    { icon: <LineChart size={24} />, label: 'Trading View', url: 'https://www.tradingview.com' },
    { icon: <SearchCheck size={24} />, label: 'Start Page', url: 'https://startpage.com' },
    { icon: <Newspaper size={24} />, label: 'Hacker News', url: 'https://news.ycombinator.com' },
  ];

  const finance = [
    { icon: <BarChart3 size={24} />, label: 'Sector SPDRs', url: 'https://www.sectorspdr.com' },
    { icon: <TrendingUp size={24} />, label: 'Earnings', url: 'https://www.earningswhispers.com' },
    { icon: <LineChart size={24} />, label: 'Wallstreet Bets', url: 'https://www.reddit.com/r/wallstreetbets' },
    { icon: <Code size={24} />, label: 'VO.dev', url: 'https://vo.dev' },
  ];

  const others = [
    { icon: <Monitor size={24} />, label: 'Desktops', url: 'https://www.reddit.com/r/desktops' },
    { icon: <Keyboard size={24} />, label: 'MonkeyType', url: 'https://monkeytype.com' },
    { icon: <AudioLines size={24} />, label: 'Music for Prog', url: 'https://musicforprogramming.net' },
    { icon: <Search size={24} />, label: 'Search', url: 'https://www.google.com' },
  ];

  return (
    <div className="mt-12 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-white/80 text-lg mb-3 ml-1">Favorites</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {favorites.map((item, index) => (
              <IconCard key={`fav-${index}`} icon={item.icon} label={item.label} url={item.url} />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-white/80 text-lg mb-3 ml-1">Tools</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {tools.map((item, index) => (
              <IconCard key={`tool-${index}`} icon={item.icon} label={item.label} url={item.url} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white/80 text-lg mb-3 ml-1">Finance</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {finance.map((item, index) => (
              <IconCard key={`finance-${index}`} icon={item.icon} label={item.label} url={item.url} />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-white/80 text-lg mb-3 ml-1">Others</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {others.map((item, index) => (
              <IconCard key={`other-${index}`} icon={item.icon} label={item.label} url={item.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconGrid;
