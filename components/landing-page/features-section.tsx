import {
  MessageSquare,
  Zap,
  BarChart3,
  Shield,
  ArrowRight,
  Users,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { featuresContent } from "@/content/features";

export function FeaturesSection() {
  return (
    <section id="features" className="py-18 sm:py-30">
      <div className="container px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-6">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <Typography variant="h2" className="mb-4 border-none">
            {featuresContent.header.title}
          </Typography>
          <Typography variant="lead">
            {featuresContent.header.description}
          </Typography>
        </div>

        {/* Features Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Features - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              {/* Primary Feature */}
              <Card className="h-full rounded-2xl">
                <CardContent className="p-8">
                  {/* First Feature */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 block">
                        {featuresContent.mainFeature.badge}
                      </span>
                      <Typography variant="h3" className="mb-3">
                        {featuresContent.mainFeature.title}
                      </Typography>
                    </div>
                  </div>

                  <Typography variant="muted" className="mb-6 leading-relaxed">
                    {featuresContent.mainFeature.description}
                  </Typography>

                  {/* Feature Preview */}
                  <div className="rounded-xl border bg-muted/30 p-4 mb-8">
                    <div className="space-y-3">
                      {featuresContent.mainFeature.preview.map(
                        (item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <div
                              className={`h-2 w-2 rounded-full ${
                                index === 0
                                  ? "bg-green-500"
                                  : index === 1
                                  ? "bg-blue-500"
                                  : "bg-purple-500"
                              }`}
                            ></div>
                            <Typography
                              variant="small"
                              className="text-muted-foreground"
                            >
                              {item}
                            </Typography>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Second Feature */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-orange-600 dark:text-orange-400 mb-2 block">
                        {featuresContent.mainFeature.secondaryFeature.badge}
                      </span>
                      <Typography variant="h3" className="mb-3">
                        {featuresContent.mainFeature.secondaryFeature.title}
                      </Typography>
                    </div>
                  </div>

                  <Typography variant="muted" className="mb-8 leading-relaxed">
                    {featuresContent.mainFeature.secondaryFeature.description}
                  </Typography>

                  {/* Language Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {featuresContent.mainFeature.secondaryFeature.features.map(
                      (feature, index) => (
                        <div
                          key={index}
                          className="rounded-lg border bg-muted/20 p-4"
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <div
                              className={`h-2 w-2 rounded-full ${
                                index === 0 ? "bg-green-500" : "bg-blue-500"
                              }`}
                            ></div>
                            <Typography variant="small" className="font-medium">
                              {feature.title}
                            </Typography>
                          </div>
                          <Typography
                            variant="small"
                            className="text-muted-foreground"
                          >
                            {feature.description}
                          </Typography>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side Features */}
            <div className="space-y-12">
              {featuresContent.sideFeatures.map((feature, index) => (
                <Card key={index} className="rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-xl ${
                          index === 0
                            ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                            : "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400"
                        }`}
                      >
                        {index === 0 ? (
                          <BarChart3 className="h-4 w-4" />
                        ) : (
                          <Shield className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <span
                          className={`text-xs font-medium mb-1 block ${
                            index === 0
                              ? "text-green-600 dark:text-green-400"
                              : "text-purple-600 dark:text-purple-400"
                          }`}
                        >
                          {feature.badge}
                        </span>
                        <Typography variant="large" className="font-semibold">
                          {feature.title}
                        </Typography>
                      </div>
                    </div>

                    <Typography
                      variant="small"
                      className="text-muted-foreground mb-8"
                    >
                      {feature.description}
                    </Typography>

                    {/* Action Element with spacing */}
                    {index === 0 ? (
                      <div className="rounded-xl border bg-muted/20 p-4 mt-4">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">
                            {feature.statusText}
                          </span>
                          <span className="text-green-600 font-medium">
                            {feature.statusValue}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-4">
                        <Button size="sm" className="w-full">
                          {feature.buttonText}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
