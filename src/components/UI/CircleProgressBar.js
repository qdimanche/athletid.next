import {BsChevronDown, BsChevronLeft, BsChevronUp} from "react-icons/bs";

const CircleProgressBar = () => {
	return (<div
		className={'flex justify-center lg:my-40 my-28 '}>
		
		<div
			className={' border-[2px] border-black/10 rounded-full md:h-[650px] md:w-[650px] h-[400px] w-[400px] relative'}>
			<div
				className={'absolute !bottom-[-20px] left-1/2 z-[900] transform -translate-x-1/2 p-2 border-[2px] bg-black border-black rounded-full'}>
				<BsChevronLeft color={"white"} size={20}/>
			</div>
			<div
				className={'absolute top-1/4 z-[900] transform -translate-y-1/4 md:right-[20px] right-0 rotate-[-30deg] p-2 border-[2px] bg-black border-black rounded-full'}>
				<BsChevronDown color={"white"} size={20}/>
			</div>
			<div
				className={'absolute top-1/4 z-[900] transform -translate-y-1/4  rotate-[30deg] md:left-[20px] left-0 p-2 border-[2px] bg-black border-black rounded-full'}>
				<BsChevronUp color={"white"} size={20}/>
			</div>
			<div
				className={' rounded-medium border-black border bg-white px-3 py-1 absolute top-[-25px] left-1/2 transform -translate-x-1/2'}>
				<p className={'!text-[13px]'}>Avant</p>
			</div>
			<div
				className={' rounded-medium border-black border bg-white px-3 py-1 absolute top-[-25px] top-3/4 transform -translate-y-3/4 right-0'}>
				<p className={'!text-[13px]'}>Pendant</p>
			</div>
			<div
				className={' rounded-medium border-black bg-white border px-3 py-1 absolute top-[-25px] top-3/4 transform -translate-y-3/4 left-0'}>
				<p className={'!text-[13px]'}>Après</p>
			</div>
			<div
				className={' rounded-medium absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 left-0 text-center'}>
				<h2 className={''}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				</h2>
			</div>
		
		</div>
	
	
	</div>);
};

export default CircleProgressBar;