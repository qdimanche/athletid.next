import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

export default function useAPI(endpoint) {
    const baseURL = process.env.NEXT_PUBLIC_API_URL || '';
    const url = `${baseURL}/${endpoint}`;

    const { data, error } = useSWR(url, fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
}
