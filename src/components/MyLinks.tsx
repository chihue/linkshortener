"use client"

import { iLink } from '@/types';
import { LinkLS } from '@/types/static';
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"
import { Routes } from '@/constant/link';

function MyLinks() {
    const [links, setLinks] = useState<iLink[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const elementsPerPage = 5;
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        const value: string[] = JSON.parse(localStorage.getItem(LinkLS) || '[]');
        const valuesLink = value.map((v) => JSON.parse(v) as iLink);
        setLinks(valuesLink);
        setIsLoading(false);
    }, []);

    const selectPage = (page: number) => {
        if (page < 0 || page >= Math.ceil(links.length / elementsPerPage)) return;
        setCurrentPage(page);
    }

    if (isLoading) return <div>Loading...</div>

    if (links.length === 0) {
        return <div>You don't have any links yet, create your own</div>
    }

    return (
        <div className="border rounded-lg overflow-hidden w-3/4 dark:bg-gray-900 dark:text-white">
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                            <th className="px-4 py-3 text-left font-medium">Name</th>
                            <th className="px-4 py-3 text-left font-medium">Link</th>
                            <th className="px-4 py-3 text-right font-medium"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {links.slice(
                            currentPage * elementsPerPage,
                            (currentPage + 1) * elementsPerPage
                        ).map((link, index) => {
                            return (
                                <tr key={link._id.toString()} className="border-b dark:border-gray-700">
                                    <td className="px-4 py-3 font-medium">{link.name}</td>
                                    <td className="px-4 py-3">
                                        {link.url}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <Link href={`${Routes.INFO}/${link._id}`} className="text-blue-500 hover:underline dark:text-blue-400" prefetch={false}>
                                            <Button size="sm">Ver</Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" onClick={() => selectPage(currentPage - 1)} />
                        </PaginationItem>
                        {
                            Array.from({ length: Math.ceil(links.length / elementsPerPage) }, (_, i) => {
                                return (
                                    <PaginationItem key={i}>
                                        <PaginationLink href="#" isActive={currentPage === i} onClick={() => selectPage(i)}>
                                            {i + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                )
                            })
                        }
                        <PaginationItem>
                            <PaginationNext href="#" onClick={() => selectPage(currentPage + 1)} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}

export default MyLinks