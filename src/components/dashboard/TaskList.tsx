
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TaskItem } from './TaskItem';

export interface Task {
  id: string;
  name: string;
  progress: number;
  status: 'running' | 'completed' | 'error' | 'paused';
  tools: string[];
  needsInput: boolean;
  result: string;
  financialWorth: number;
  estimatedCompletion: string;
  priority: 'high' | 'medium' | 'low';
}

export const TaskList = () => {
  const tasks: Task[] = [
    {
      id: '1',
      name: 'Market Research Analysis',
      progress: 75,
      status: 'running',
      tools: ['Web Scraper', 'Data Analyzer', 'Report Generator'],
      needsInput: false,
      result: 'In progress - analyzing competitor pricing data',
      financialWorth: 15000,
      estimatedCompletion: '2 hours',
      priority: 'high'
    },
    {
      id: '2',
      name: 'Customer Sentiment Analysis',
      progress: 100,
      status: 'completed',
      tools: ['Text Processor', 'Sentiment AI', 'Chart Generator'],
      needsInput: false,
      result: 'Success - 87% positive sentiment detected',
      financialWorth: 8500,
      estimatedCompletion: 'Completed',
      priority: 'medium'
    },
    {
      id: '3',
      name: 'Email Campaign Optimization',
      progress: 45,
      status: 'paused',
      tools: ['A/B Tester', 'Email Validator'],
      needsInput: true,
      result: 'Waiting for user approval on campaign copy',
      financialWorth: 12000,
      estimatedCompletion: 'Pending input',
      priority: 'high'
    },
    {
      id: '4',
      name: 'Social Media Automation',
      progress: 30,
      status: 'error',
      tools: ['Social API', 'Content Generator'],
      needsInput: false,
      result: 'Error - API rate limit exceeded',
      financialWorth: 5000,
      estimatedCompletion: 'Retrying in 1 hour',
      priority: 'low'
    },
    {
      id: '5',
      name: 'Invoice Processing',
      progress: 90,
      status: 'running',
      tools: ['PDF Parser', 'OCR Engine', 'Database Writer'],
      needsInput: false,
      result: 'Processing batch 3 of 4',
      financialWorth: 3200,
      estimatedCompletion: '30 minutes',
      priority: 'medium'
    },
    {
      id: '6',
      name: 'Lead Qualification',
      progress: 60,
      status: 'paused',
      tools: ['CRM Connector', 'Score Calculator'],
      needsInput: true,
      result: 'Requires manual review of high-value prospects',
      financialWorth: 22000,
      estimatedCompletion: 'Pending review',
      priority: 'high'
    }
  ];

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'running':
        return 'text-blue-600';
      case 'completed':
        return 'text-green-600';
      case 'error':
        return 'text-red-600';
      case 'paused':
        return 'text-orange-600';
      default:
        return 'text-muted-foreground';
    }
  };

  const getProgressColor = (progress: number, status: Task['status']) => {
    if (status === 'error') return 'bg-red-500';
    if (status === 'completed') return 'bg-green-500';
    if (status === 'paused') return 'bg-orange-500';
    return 'bg-blue-500';
  };

  return (
    <Card className="dark:bg-card dark:border-border">
      <CardHeader>
        <CardTitle className="text-xl text-foreground">Active Tasks</CardTitle>
        <p className="text-muted-foreground">Detailed view of all agent tasks and their current status</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task} 
              getStatusColor={getStatusColor}
              getProgressColor={getProgressColor}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
