import React from 'react'

export default function LayoutInfo({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className='mx-auto w-full lg:w-3/4 mt-5'>
            {children}
        </section>
    )
}