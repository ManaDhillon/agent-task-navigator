
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { TaskItem } from './TaskItem';
import { Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const mockTasks = [
  {
    id: '1',
    name: 'Customer Data Analysis',
    progress: 75,
    status: 'running',
    tools: ['Python', 'Pandas', 'SQL'],
    needsInput: false,
    result: 'success',
    financialWorth: 15000,
    estimatedCompletion: '2 hours',
    priority: 'high'
  },
  {
    id: '2',
    name: 'Email Marketing Campaign',
    progress: 45,
    status: 'running',
    tools: ['SendGrid API', 'Analytics', 'A/B Testing'],
    needsInput: true,
    result: 'pending',
    financialWorth: 8500,
    estimatedCompletion: '4 hours',
    priority: 'medium'
  },
  {
    id: '3',
    name: 'Inventory Optimization',
    progress: 100,
    status: 'completed',
    tools: ['Machine Learning', 'Forecasting', 'Database'],
    needsInput: false,
    result: 'success',
    financialWorth: 12300,
    estimatedCompletion: 'Completed',
    priority: 'high'
  },
  {
    id: '4',
    name: 'Social Media Content Generation',
    progress: 25,
    status: 'running',
    tools: ['GPT-4', 'Image Generator', 'Scheduler'],
    needsInput: false,
    result: 'pending',
    financialWorth: 3200,
    estimatedCompletion: '6 hours',
    priority: 'low'
  },
  {
    id: '5',
    name: 'Financial Report Generation',
    progress: 90,
    status: 'running',
    tools: ['Excel API', 'Chart.js', 'PDF Generator'],
    needsInput: true,
    result: 'pending',
    financialWorth: 7800,
    estimatedCompletion: '30 minutes',
    priority: 'high'
  },
  {
    id: '6',
    name: 'Website Security Scan',
    progress: 60,
    status: 'error',
    tools: ['Security Scanner', 'Vulnerability DB', 'Reporting'],
    needsInput: false,
    result: 'error',
    financialWorth: 5500,
    estimatedCompletion: 'Error - needs review',
    priority: 'critical'
  }
];

export const TaskList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredTasks = mockTasks.filter(task => {
    const matchesSearch = task.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || task.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Active Tasks</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-64"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
