import React from 'react'

function LoadingComponent({
    text = 'Loading...'
}) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background">
            <div className="relative w-20 h-20 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <p className="mt-4 text-primary-foreground">{text}</p>
        </div>
    )
}

export default LoadingComponent