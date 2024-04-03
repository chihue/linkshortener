import { ObjectId } from "mongodb"

async function TableStats({
    id
}: {
    id: ObjectId
}) {
    return (
        <div>TableStats {id.toString()}</div>
    )
}

export default TableStats