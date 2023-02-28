const baseURL = "http://localhost:3000/api/posts"

export default async function getPost(slug) {
	const res = await fetch(`${baseURL}`);
	const posts = await res.json()
	
	if (slug) {
		return posts.find(value => value.slug === slug)
	}
	
	return posts;
}