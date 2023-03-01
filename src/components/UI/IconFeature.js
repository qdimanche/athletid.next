import {BsShieldCheck} from "react-icons/bs";
import {BiRecycle, BiDonateHeart} from "react-icons/bi";
import {Carousel} from "react-responsive-carousel";

export default function IconFeature() {
	return (<div
		className={"lg:my-40 mt-28"}
	>
		<div
			className={"flex flex-col lg:w-3/4 items-center mx-auto text-center lg:mb-12 mb-8"}
		>
			<h2 style={{whiteSpace: "pre-line"}}>Athletid,<br/>une marque engagée.</h2>
		</div>
		<div
			className={"md:grid hidden md:grid-cols-3 lg:gap-16 md:gap-10 gap-6 md:mb-0 mb-10 hidden"}
		>
			<div className={"flex flex-col items-center"}>
				<div className="">
					<BsShieldCheck color={"black"} size={40}/>
				</div>
				<div className={"text-center mt-6 md:px-10 px-14  flex flex-col"}>
					<span className={'font-semibold mb-6'}>Protection des données.</span>
					<p style={{whiteSpace: "pre-line", textAlign: "justify", textJustify: "auto"}}
					   className={"font-normal"}>
						Nous travaillons sur la mise en place d’un système utilisant la technologie blockchain pour
						donner à chacun la pleine possession de ses données personnelles.
					</p>
				</div>
			</div>
			<div className={"flex flex-col items-center"}>
				<div className="">
					<BiRecycle color={"black"} size={40}/>
				</div>
				<div className={"text-center mt-6 md:px-10 px-14 flex flex-col"}>
					<span className={'font-semibold mb-6'}>Conception de nos produits.</span>
					<p style={{whiteSpace: "pre-line", textAlign: "justify", textJustify: "auto"}}
					   className={"font-normal"}>
						Dans une démarche de protection de notre planète nous travaillons actuellement pour que notre
						système de tracking soit composé au maximum de matériaux recyclés.
					</p>
				</div>
			</div>
			<div className={"flex flex-col items-center"}>
				<div className="">
					<BiDonateHeart color={"black"} size={40}/>
				</div>
				<div className={"text-center mt-6 md:px-10 px-14 flex flex-col"}>
					<span className={'font-semibold mb-6'}>Agir <br/>pour tous. <br/></span>
					<p style={{whiteSpace: "pre-line", textAlign: "justify", textJustify: "auto"}}
					   className={"font-normal"}>
						Nous nous engageons à reverser entre 1% et 3% de nos bénéfices chaque année à une association
						œuvrant pour une cause en lien avec le domaine du sport.
					</p>
				</div>
			</div>
		</div>
		<Carousel
			childrenSlide1={<div className={"flex flex-col items-center"}>
				<div className="">
					<BsShieldCheck color={"black"} size={40}/>
				</div>
				<div className={"text-center mt-6 md:px-10 px-14 flex flex-col"}>
					<span className={'font-semibold mb-6'}>Protection des données.</span>
					<p style={{whiteSpace: "pre-line", textAlign: "justify", textJustify: "auto"}}
					   className={"font-normal"}>
						Nous travaillons sur la mise en place d’un système utilisant la technologie blockchain pour
						donner à chacun la pleine possession de ses données personnelles.
					</p>
				</div>
			</div>}
			childrenSlide2={<div className={"flex flex-col items-center"}>
				<div className="">
					<BiRecycle color={"black"} size={40}/>
				</div>
				<div className={"text-center mt-6 md:px-10 px-14 flex flex-col"}>
					<span className={'font-semibold mb-6'}>Conception de nos produits.</span>
					<p style={{whiteSpace: "pre-line", textAlign: "justify", textJustify: "auto"}}
					   className={"font-normal"}>
						Dans une démarche de protection de notre planète nous travaillons actuellement pour que notre
						système de tracking soit composé au maximum de matériaux recyclés.
					</p>
				</div>
			</div>}
			childrenSlide3={<div className={"flex flex-col items-center"}>
				<div className="">
					<BiDonateHeart color={"black"} size={40}/>
				</div>
				<div className={"text-center mt-6 md:px-10 px-14 flex flex-col"}>
					<span className={'font-semibold mb-6'}>Agir <br/>pour tous. <br/></span>
					<p style={{whiteSpace: "pre-line", textAlign: "justify", textJustify: "auto"}}
					   className={"font-normal"}>
						Nous nous engageons à reverser entre 1% et 3% de nos bénéfices chaque année à une association
						œuvrant pour une cause en lien avec le domaine du sport.
					</p>
				</div>
			</div>}/>
	</div>)
}