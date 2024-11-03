import React from 'react'
import Header from '@/components/Header'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className='relative w-full min-h-screen'>
            <Header />
            {children}
        </main>
    )
}

export default layout
