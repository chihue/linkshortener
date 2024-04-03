import CopyElement from "@/components/CopyElement";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Routes } from "@/constant/link"
import { iLink } from "@/types"

function TableInfo({
    linkObject
}: { linkObject: iLink }) {

    const shortURL = `${process.env.BASE_URL}${Routes.LINK}/${linkObject.short}`;
    const statsURL = `${process.env.BASE_URL}${Routes.INFO}/${linkObject._id}`;

    return (
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">ID</TableCell>
                    <TableCell>{linkObject._id.toString()}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">
                        Stats Link
                        <span className="text-gray-500 dark:text-gray-400">(This page)</span>
                    </TableCell>
                    <TableCell>
                        <a href={statsURL} target="_blank">{statsURL}</a> <CopyElement text={statsURL} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">Nombre</TableCell>
                    <TableCell>{linkObject.name}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">NanoId</TableCell>
                    <TableCell>{linkObject.short}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">Short Link</TableCell>
                    <TableCell>
                        <a href={shortURL} target="_blank">{shortURL}</a> <CopyElement text={shortURL} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">Created at</TableCell>
                    <TableCell>{linkObject.time.str}</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    )
}

export default TableInfo