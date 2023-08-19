import Link from 'next/link';
import { Card } from 'flowbite-react';
import dayjs from "dayjs";

interface Props {
    id: string;
    file: string;
    download_url: string;
    featured: string;
    summary: string;
    cat: string;
    date: string;
}

export default function FileList({ id, file, download_url, featured, summary, cat, date }: Props) {

    const cleandate = date
    const shortDate = dayjs(cleandate).format("MMM D, YYYY	");
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/files/${id}`}><img className="rounded-t-lg" src={`http://127.0.0.1:8090/api/files/1ultyv7nx5xemeg/${id}/${featured}`} alt={`${file}'s profile`} /></Link>
        <div className="p-5">
            
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href={`/files/${id}`}>{file}</Link></h3>
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{summary}</p>

            <a href={`/files/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:bg-indigo-200 hover:text-black rounded-md bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                View File
                 <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>

        </div>
        </div>  
    );
}