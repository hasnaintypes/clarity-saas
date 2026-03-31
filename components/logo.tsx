import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <Image
                src="/light-icon.png"
                alt="Clarity"
                width={32}
                height={32}
                className="block h-auto w-8 dark:hidden"
            />
            <Image
                src="/dark-icon.png"
                alt="Clarity"
                width={32}
                height={32}
                className="hidden h-auto w-8 dark:block"
            />
            <span className="text-lg font-bold tracking-tight">clarity.</span>
        </div>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <>
            <Image
                src="/light-icon.png"
                alt="Clarity"
                width={32}
                height={32}
                className={cn('block h-auto w-8 dark:hidden', className)}
            />
            <Image
                src="/dark-icon.png"
                alt="Clarity"
                width={32}
                height={32}
                className={cn('hidden h-auto w-8 dark:block', className)}
            />
        </>
    )
}
