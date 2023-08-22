import { Metadata } from "next";
import FileList from "@/components/Files/FileList";
import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');
    export const records = await  pb.collection('guns').getFullList({
        sort: '-date',
    });


export const dynamic = 'force-static';


export const metadata: Metadata = {
    title: 'Files',
    description: '3D Printed Firearm Files',
};

export default function Files() {

    return (
<div>
        <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl ">Guides</h1>
        <p className="text-base font-semibold leading-7 text-indigo-200">3D Printed Information & How To's</p>
        <h2 className="pt-10 text-xl">Latest Guides</h2>
        <div className="container flex mx-auto mt-4 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-white pt-8 lg:grid-cols-4">
            {records.map((record) => {
                return <FileList cat={""} date={""} file={""} download_url={""} featured={""} summary={""} key={record.id} {...record} />;
            })}
            </div>
        </div>
    
    );
}