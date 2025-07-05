import { Typography } from "@/components/ui/typography";
import { Progress } from "@/components/ui/progress";
import type { DashboardStats } from "@/types";

interface DashboardStatsProps {
  stats: DashboardStats;
}

export function DashboardStatsSection({ stats }: DashboardStatsProps) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="space-y-8 mt-8">
        <Typography variant="h1" className="text-3xl font-bold">
          Welcome back, John
        </Typography>
        <Typography variant="lead" className="text-muted-foreground">
          Here's an overview of your feedback collection activity
        </Typography>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg border border-border bg-card space-y-2">
          <Typography variant="muted" className="text-sm">
            Total Forms
          </Typography>
          <Typography variant="h2" className="text-2xl font-bold border-0 pb-0">
            {stats.totalForms}
          </Typography>
          <Typography
            variant="small"
            className="text-green-600 dark:text-green-400"
          >
            {stats.activeForms} active
          </Typography>
        </div>

        <div className="p-4 rounded-lg border border-border bg-card space-y-2">
          <Typography variant="muted" className="text-sm">
            Total Responses
          </Typography>
          <Typography variant="h2" className="text-2xl font-bold border-0 pb-0">
            {stats.totalResponses.toLocaleString()}
          </Typography>
          <Typography
            variant="small"
            className="text-blue-600 dark:text-blue-400"
          >
            +12% this month
          </Typography>
        </div>

        <div className="p-4 rounded-lg border border-border bg-card space-y-2">
          <Typography variant="muted" className="text-sm">
            Response Rate
          </Typography>
          <Typography variant="h2" className="text-2xl font-bold border-0 pb-0">
            68%
          </Typography>
          <Typography
            variant="small"
            className="text-green-600 dark:text-green-400"
          >
            +5% from last month
          </Typography>
        </div>

        <div className="p-4 rounded-lg border border-border bg-card space-y-3">
          <Typography variant="muted" className="text-sm">
            Plan Usage
          </Typography>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Typography variant="small" className="text-sm">
                {stats.planUsage.current.toLocaleString()} /{" "}
                {stats.planUsage.limit.toLocaleString()}
              </Typography>
              <Typography variant="small" className="font-medium text-sm">
                {stats.planUsage.percentage}%
              </Typography>
            </div>
            <Progress value={stats.planUsage.percentage} className="h-2" />
            <Typography variant="muted" className="text-xs">
              Pro Plan • Renews Jan 15
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
