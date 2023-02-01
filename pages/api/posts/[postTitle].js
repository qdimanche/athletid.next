import data from "@/pages/api/data";

export default function handler(req, res) {
	const {postTitle} = req.query;
	const {Posts} = data;
	
	if(postTitle){
		const post = Posts.find(value => {
			return value.title.replace(/\s+/g, '-').toLowerCase() === postTitle;
		})
		return res.status(200).json(post);
	}
	
	return res.status(404).json({error:"Post not found"})
}
