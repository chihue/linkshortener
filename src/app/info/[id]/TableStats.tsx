import { getCollection } from "@/repository/MongoConfig";
import { iLinkAccess } from "@/types";
import { ObjectId } from "mongodb"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"
import { Button } from "@/components/ui/button";

async function TableStats({
    id
}: {
    id: ObjectId
}) {
    const elementsPerPage = 10;

    const collectionLinksAccess = await getCollection('links_access');
    const number_elements = await collectionLinksAccess.countDocuments({
        'link_id': id
    });

    const totalPages = Math.ceil(number_elements / elementsPerPage);

    let linkAccess: iLinkAccess[] = [];

    linkAccess = await collectionLinksAccess.find({
        'link_id': id
    })
        .sort({ 'time.ts': -1 })
        .limit(elementsPerPage)
        .toArray() as iLinkAccess[];



    return (
        <div className="w-full">
            <div className="mb-4">
                <h2 className="text-2xl font-bold">Estadisticas</h2>
                <p>Total de registros: {number_elements}</p>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Country</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {linkAccess.map((access) => (
                        <TableRow key={access._id.toString()}>
                            <TableCell>{access._id.toString()}</TableCell>
                            <TableCell>{access.country}</TableCell>
                            <TableCell> <Button className="ml-2" size={"sm"}> View more</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex justify-end mt-4">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                            // disabled={currentPage === 1}
                            // onClick={() => handlePageChange(currentPage - 1)}
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    href="#"
                                // active={page === currentPage} 
                                // onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                            // disabled={currentPage === totalPages}
                            // onClick={() => handlePageChange(currentPage + 1)}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}

export default TableStats