import data from "@/pages/api/data";

export default function handler(req, res) {
    const {postCategory} = req.query;
    const {Posts} = data;


    if(postCategory){
        const posts = Posts.filter(value => {
            return value.category === postCategory;
        })
        return res.status(200).json(posts);
    }

    return res.status(404).json({error:"Post not found"})
}