import data from "@/pages/api/data";

export default function handler(req, res) {
	const {postSlug} = req.query;
	const {Posts} = data;
	
	if(postSlug){
		const post = Posts.find(value => {
			return value.slug === postSlug;
		})
		return res.status(200).json(post);
	}
	
	return res.status(404).json({error:"Post not found"})
}
