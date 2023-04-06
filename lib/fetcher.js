const baseURL = `${process.env.NEXT_PUBLIC_API_URL? process.env.NEXT_PUBLIC_API_URL + '/' : '/'  }`
import useSWR from 'swr';
const response = res => res.json();

export default async function fetcher(endpoint) {
    const res = await fetch(`${baseURL}${endpoint}`);
    if (!res.ok) {
        throw new Error('An error occurred while fetching the data.');
    }
    return response(res);
}