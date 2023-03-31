import data from "@/pages/api/data";

export default function handler (req,res){
    const {Muscular} = data;

    if (Muscular) return res.status(200).json(Muscular)
    return res.status(404).json({error: "Data not found"})
}