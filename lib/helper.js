const baseURL = "http://localhost:3000/api/posts"

export default async function getPost(title) {
	const res = await fetch(`${baseURL}`);
	const posts = await res.json()
	
	if (title) {
		return posts.find(value => value.title.replace(/\s+/g, '-').toLowerCase() === title)
	}
	
	return posts;
}