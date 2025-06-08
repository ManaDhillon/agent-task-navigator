
import React from 'react';
import { TaskOverview } from '@/components/dashboard/TaskOverview';
import { TaskList } from '@/components/dashboard/TaskList';
import { PerformanceMetrics } from '@/components/dashboard/PerformanceMetrics';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Agent Task Dashboard</h1>
            <p className="text-muted-foreground mt-1">Monitor and manage your AI agent tasks</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Last updated</p>
            <p className="text-sm font-medium">{new Date().toLocaleTimeString()}</p>
          </div>
        </div>

        {/* Performance Overview */}
        <PerformanceMetrics />

        {/* Task Overview Cards */}
        <TaskOverview />

        {/* Detailed Task List */}
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;
