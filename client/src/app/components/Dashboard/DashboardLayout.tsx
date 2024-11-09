/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';

interface DashboardLayoutProps {}

const DashboardLayout: React.FC<DashboardLayoutProps> = () => {
  return (
    <div className="flex gap-5 max-md:flex-col rounded-none">
      <Sidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
};

export default DashboardLayout;