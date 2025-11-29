import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { PageSelector } from './components/PageSelector';
import { PageSummaryCard } from './components/PageSummaryCard';
import { MetricsCards } from './components/MetricsCards';
import { ChartsSection } from './components/ChartsSection';
import { RecentPostsTable } from './components/RecentPostsTable';
import { InsightsCards } from './components/InsightsCards';
import { AllPages } from './components/AllPages';
import { PostsScheduling } from './components/PostsScheduling';
import { InsightsPage } from './components/InsightsPage';
import { MessagesPage } from './components/MessagesPage';
import { AdPerformance } from './components/AdPerformance';
import { SettingsPage } from './components/SettingsPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [selectedPage, setSelectedPage] = useState('tech-innovators');
  const [activeMenuItem, setActiveMenuItem] = useState('overview');

  const renderContent = () => {
    switch (activeMenuItem) {
      case 'overview':
        return (
          <div className="space-y-6">
            <PageSelector selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <PageSummaryCard selectedPage={selectedPage} />
            <MetricsCards selectedPage={selectedPage} />
            <ChartsSection selectedPage={selectedPage} />
            <RecentPostsTable selectedPage={selectedPage} />
            <InsightsCards selectedPage={selectedPage} />
          </div>
        );
      case 'all-pages':
        return <AllPages />;
      case 'posts':
        return <PostsScheduling selectedPage={selectedPage} setSelectedPage={setSelectedPage} />;
      case 'insights':
        return <InsightsPage selectedPage={selectedPage} setSelectedPage={setSelectedPage} />;
      case 'messages':
        return <MessagesPage selectedPage={selectedPage} setSelectedPage={setSelectedPage} />;
      case 'ads':
        return <AdPerformance selectedPage={selectedPage} setSelectedPage={setSelectedPage} />;
      case 'settings':
        return <SettingsPage />;
      default:
        return (
          <div className="space-y-6">
            <PageSelector selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <PageSummaryCard selectedPage={selectedPage} />
            <MetricsCards selectedPage={selectedPage} />
            <ChartsSection selectedPage={selectedPage} />
            <RecentPostsTable selectedPage={selectedPage} />
            <InsightsCards selectedPage={selectedPage} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
        <main className="flex-1 ml-64 mt-16 p-8">
          <div className="max-w-[1440px] mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  );
}