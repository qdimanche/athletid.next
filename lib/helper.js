const baseURL = `${process.env.NEXT_PUBLIC_API_URL}api/posts`

export default async function getPosts() {
    const res = await fetch(`${baseURL}`);
    const posts = await res.json()

    if (posts.length > 0) {
        return posts
    }

    return posts;
}
export async function getPost(slug) {
    const res = await fetch(`${baseURL}/${slug}`);
    const posts = await res.json()

    if (posts.length > 0) {
        return posts
    }

    return posts;
}