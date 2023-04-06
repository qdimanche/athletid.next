const baseURL = "https://athletid-next-git-blog-version-2-qdimanche.vercel.app/";
import useSWR from 'swr';
const response = (...args) => fetch(...args).then(res => res.json())


export default function fetcher(endpoint){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data, error} = useSWR(`${baseURL}${endpoint}`, response)

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}