"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Sun, Moon, User, Bell, Settings, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { SearchBar } from "./search-bar";
import { mockNotifications } from "@/content/dummy-form-data";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

export function Navbar({ onSearch }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  return (
    <nav className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm transition-transform group-hover:scale-105">
            C
          </div>
          <Typography variant="large" className="font-bold">
            Clarity
          </Typography>
        </Link>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          {/* Search Bar */}
          <SearchBar
            onSearch={onSearch}
            placeholder="Search forms..."
            className="hidden md:block"
          />

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* User Menu with Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full relative h-9 w-9"
              >
                <User className="h-4 w-4" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="px-3 py-2">
                <Typography variant="small" className="font-medium">
                  John Doe
                </Typography>
                <Typography variant="muted" className="text-xs">
                  john@example.com
                </Typography>
              </div>
              <DropdownMenuSeparator />

              {/* Notifications Section */}
              <div className="px-3 py-2">
                <div className="flex items-center justify-between mb-2">
                  <Typography variant="small" className="font-medium">
                    Notifications
                  </Typography>
                  {unreadCount > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {unreadCount} new
                    </Badge>
                  )}
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {mockNotifications.slice(0, 3).map((notification) => (
                    <div
                      key={notification.id}
                      className="p-2 rounded-md hover:bg-accent"
                    >
                      <div className="flex items-start space-x-2">
                        <Bell className="h-3 w-3 mt-1 text-muted-foreground" />
                        <div className="flex-1 min-w-0">
                          <Typography
                            variant="small"
                            className="font-medium text-xs"
                          >
                            {notification.title}
                          </Typography>
                          <Typography
                            variant="muted"
                            className="text-xs truncate"
                          >
                            {notification.message}
                          </Typography>
                          <Typography variant="muted" className="text-xs">
                            {notification.time}
                          </Typography>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-primary rounded-full mt-1" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
