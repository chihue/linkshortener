import ErrorPage from '@/components/ErrorPage';
import { getCollection } from '@/repository/MongoConfig';
import { iLink } from '@/types';
import { ObjectId } from 'mongodb';
import TableInfo from './TableInfo';
import TableStats from './TableStats';
import AddLocalStorage from '@/service/LocalStorageService/AddLocalStorage';
import { LinkLS } from '@/types/static';
import { Suspense } from 'react';
import LoadingComponent from '@/components/LoadingComponent';

async function LinkInfo({
    params: {
        id
    },
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
            <AddLocalStorage keyLS={LinkLS} data={JSON.stringify(linkObject)} isArray={true} />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-5">
                {linkObject.name}
            </h1>
            <div>
                <TableInfo linkObject={linkObject} />
            </div>
            <div className='mt-5'>
                <h3 className='text-4xl p-2'>Stats</h3>
                <Suspense fallback={
                    <LoadingComponent
                        text="Loading stats...."
                        className="flex flex-col items-center justify-center bg-background"
                    />
                }>
                    <TableStats id={linkObject._id} />
                </Suspense>
            </div>
        </div>
    )
}

export default LinkInfo