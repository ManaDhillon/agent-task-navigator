
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, BarChart3, Settings, Users } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Track agent tasks and performance in real-time with live updates'
    },
    {
      icon: BarChart3,
      title: 'Financial Analytics',
      description: 'Monitor the financial worth and ROI of each task and agent'
    },
    {
      icon: Users,
      title: 'User Input Management',
      description: 'Identify and manage tasks that require user intervention'
    },
    {
      icon: Settings,
      title: 'Tool Integration',
      description: 'See which tools and APIs your agents are using for each task'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Agent Task Dashboard
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Monitor, manage, and optimize your AI agent tasks with comprehensive insights into performance, 
            financial worth, and real-time status updates.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/dashboard')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
          >
            View Dashboard
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Preview */}
        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Dashboard Preview</CardTitle>
            <p className="text-muted-foreground">
              Get insights into your agent performance at a glance
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <p className="text-muted-foreground">Active Tasks</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">$47,320</div>
                <p className="text-muted-foreground">Total Financial Worth</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
