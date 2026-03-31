'use client'

import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="flex items-center gap-1 rounded-full border p-1">
                <div className="size-7" />
                <div className="size-7" />
                <div className="size-7" />
            </div>
        )
    }

    return (
        <div className="flex items-center gap-1 rounded-full border p-1">
            <button
                onClick={() => setTheme('light')}
                className={cn(
                    'flex size-7 items-center justify-center rounded-full transition-colors',
                    theme === 'light' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
                aria-label="Light mode">
                <Sun className="size-3.5" />
            </button>
            <button
                onClick={() => setTheme('system')}
                className={cn(
                    'flex size-7 items-center justify-center rounded-full transition-colors',
                    theme === 'system' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
                aria-label="System mode">
                <Monitor className="size-3.5" />
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={cn(
                    'flex size-7 items-center justify-center rounded-full transition-colors',
                    theme === 'dark' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
                aria-label="Dark mode">
                <Moon className="size-3.5" />
            </button>
        </div>
    )
}
