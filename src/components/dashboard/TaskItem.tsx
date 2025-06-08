
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  AlertTriangle, 
  Play, 
  Pause,
  DollarSign,
  Wrench,
  User
} from 'lucide-react';

interface Task {
  id: string;
  name: string;
  progress: number;
  status: 'running' | 'completed' | 'error' | 'paused';
  tools: string[];
  needsInput: boolean;
  result: 'success' | 'error' | 'pending';
  financialWorth: number;
  estimatedCompletion: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const getStatusIcon = () => {
    switch (task.status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-600" />;
      case 'running':
        return <Play className="h-5 w-5 text-blue-600" />;
      case 'paused':
        return <Pause className="h-5 w-5 text-orange-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = () => {
    switch (task.status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      case 'running':
        return 'bg-blue-100 text-blue-800';
      case 'paused':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = () => {
    switch (task.priority) {
      case 'critical':
        return 'bg-red-500 text-white';
      case 'high':
        return 'bg-orange-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-white';
      case 'low':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="hover:shadow-md transition-all duration-200 border-l-4 border-l-primary">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3">
            {getStatusIcon()}
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-foreground mb-1">{task.name}</h3>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge className={getStatusColor()}>{task.status}</Badge>
                <Badge className={getPriorityColor()}>{task.priority}</Badge>
                {task.needsInput && (
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    <User className="h-3 w-3 mr-1" />
                    Needs Input
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-lg font-bold text-foreground mb-1">
              <DollarSign className="h-4 w-4" />
              {formatCurrency(task.financialWorth)}
            </div>
            <p className="text-sm text-muted-foreground">{task.estimatedCompletion}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">Progress</span>
              <span className="text-sm font-bold text-foreground">{task.progress}%</span>
            </div>
            <Progress value={task.progress} className="h-2" />
          </div>

          <div className="flex items-center gap-2">
            <Wrench className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Tools:</span>
            <div className="flex flex-wrap gap-1">
              {task.tools.map((tool, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {task.needsInput && (
            <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <span className="text-sm text-orange-800">This task requires user input to continue</span>
              <Button size="sm" className="ml-auto bg-orange-600 hover:bg-orange-700">
                Provide Input
              </Button>
            </div>
          )}

          {task.status === 'error' && (
            <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
              <XCircle className="h-4 w-4 text-red-600" />
              <span className="text-sm text-red-800">Task encountered an error and needs attention</span>
              <Button size="sm" variant="destructive" className="ml-auto">
                Review Error
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
