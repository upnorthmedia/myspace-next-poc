import { Metadata } from "next";
import Link from "next/link";
import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');
    
interface Props {
    params: {
        id: string;
    };
}

export default async function filesingle({ params }: Props) {

    const record = await pb.collection('guns').getOne(params.id, {
        expand: 'relField1,relField2.subRelField',
    });
    
    const { file, featured, download_url, summary, cat, date } = record ?? {};

        return (
            <div className="mx-auto">
            <div className="">
            <a href="/files" className="inline-flex mt-1 mb-7 items-center bg-indigo-600 px-3 py-1 text-xs font-light text-center text-white hover:bg-indigo-200 rounded-md">Back to Files</a>
                <img className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" src={`http://127.0.0.1:8090/api/files/1ultyv7nx5xemeg/${params.id}/${featured}`} alt={`${file}'s profile`} />
               
                <h1 className="pt-4 font-bold text-xl">{file}</h1>
                <a href={download_url} className="inline-flex mt-3 items-center bg-indigo-600 p-3 py-2 text-sm font-medium text-center text-white hover:bg-indigo-200 rounded-md">
            <svg className="w-3.5 h-4.5 mr-2 mt-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 36">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M0 16q0 2.912 1.824 5.088t4.576 2.752q0.032 0 0.032-0.032v-0.064t0.032-0.032q0.544-1.344 1.344-2.176t2.208-1.184v-2.336q0-2.496 1.728-4.256t4.256-1.76 4.256 1.76 1.76 4.256v2.336q1.376 0.384 2.176 1.216t1.344 2.144l0.096 0.288h0.384q2.464 0 4.224-1.76t1.76-4.224v-2.016q0-2.464-1.76-4.224t-4.224-1.76q-0.096 0-0.32 0.032 0.32-1.152 0.32-2.048 0-3.296-2.368-5.632t-5.632-2.368q-2.88 0-5.056 1.824t-2.784 4.544q-1.152-0.352-2.176-0.352-3.296 0-5.664 2.336t-2.336 5.664v1.984zM10.016 25.824q-0.096 0.928 0.576 1.6l4 4q0.576 0.576 1.408 0.576t1.408-0.576l4-4q0.672-0.672 0.608-1.6-0.064-0.32-0.16-0.576-0.224-0.576-0.736-0.896t-1.12-0.352h-1.984v-5.984q0-0.832-0.608-1.408t-1.408-0.608-1.408 0.608-0.576 1.408v5.984h-2.016q-0.608 0-1.12 0.352t-0.736 0.896q-0.096 0.288-0.128 0.576z"/>
</svg>Download
            </a>
                <h2 className="pt-3 font-semibold text-lg">Summary</h2>
                <p className="py-1 text-sm">{summary}</p>
                

            </div>
            </div>
        );
}