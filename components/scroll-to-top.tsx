'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={cn(
                'fixed bottom-6 right-6 z-50 flex size-10 items-center justify-center rounded-full border bg-background shadow-md transition-all duration-300 hover:bg-accent',
                visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
            )}>
            <ArrowUp className="size-4" />
        </button>
    )
}
