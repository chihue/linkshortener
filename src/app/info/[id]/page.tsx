import ErrorPage from '@/components/ErrorPage';
import { getCollection } from '@/repository/MongoConfig';
import { iLink } from '@/types';
import { ObjectId } from 'mongodb';
import TableInfo from './TableInfo';
import TableStats from './TableStats';

async function LinkInfo({
    params: {
        id
    }
}: { params: { id: string } }) {
    let linkObject: iLink | null = null;

    if (ObjectId.isValid(id)) {
        const collectionLinks = await getCollection('links');
        linkObject = await collectionLinks.findOne({
            '_id': new ObjectId(id)
        }) as iLink;
    }


    if (!linkObject) {
        return <ErrorPage />
    }

    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-5">{linkObject.name}</h1>
            <div>
                <TableInfo linkObject={linkObject} />
            </div>
            <div>
                <TableStats id={linkObject._id} />
            </div>
        </div>
    )
}

export default LinkInfo