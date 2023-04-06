const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/posts`

export default async function getPost(slug) {
    const res = await fetch(`${baseURL}`);
    const posts = await res.json()

    if (slug) {
        return posts.find(value => value.slug === slug)
    }

    return posts;
}