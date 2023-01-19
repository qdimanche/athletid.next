import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import Image from 'next/image';

const FeatureSquare = (props, ref) => {
  return (
    <div
      ref={ref}
      className={"min-h-[93vh] relative px-4 lg:pb-20 pb-12"}
    >
      <div
        className={
          "flex flex-col items-center lg:w-1/2 md:w-3/4 mx-auto text-center lg:mb-12 mb-8"
        }
      >
        <h2 style={{ whiteSpace: "pre-line" }}>{props.titleFeatureSquare}</h2>
        <p className={"w-full mt-[10px]"}>{props.subTitleFeatureSquare}</p>
      </div>
      <div
        className={
          "md:grid hidden md:grid-cols-3 lg:gap-16 md:gap-10 gap-6 md:mb-0 mb-10 hidden"
        }
      >
        <div className={""}>
          <div className="rounded-[30px] overflow-hidden bg-[#F2F2F2]">
            <Image
              src={props.imgSquare1}
              className={"object-cover w-2/3 pt-14 mx-auto"}
              alt=""
            />
          </div>
          <div className={"text-center mt-6 md:px-10 flex flex-col"}>
            <span style={{ whiteSpace: "pre-line" }} className={"font-normal"}>
              {props.titleSquare1}
            </span>
          </div>
        </div>
        <div className={""}>
          <div className="rounded-[30px] overflow-hidden bg-[#F2F2F2]">
            <Image
              src={props.imgSquare2}
              className={"object-cover w-2/3 pt-14 mx-auto "}
              alt=""
            />
          </div>
          <div className={"text-center mt-6 md:px-10 flex flex-col"}>
            <span style={{ whiteSpace: "pre-line" }} className={"font-normal"}>
              {props.titleSquare2}
            </span>
          </div>
        </div>
        <div className={""}>
          <div className="rounded-[30px] overflow-hidden bg-[#F2F2F2]">
            <Image
              src={props.imgSquare3}
              className={"object-cover w-2/3 pt-14 mx-auto "}
              alt=""
            />
          </div>
          <div className={"text-center mt-6 md:px-10 flex flex-col"}>
            <span style={{ whiteSpace: "pre-line" }} className={"font-normal"}>
              {props.titleSquare3}
            </span>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide relative md:hidden block mx-auto"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <div className={"relative"}>
              <div
                className={"w-3/4 mx-auto bg-black/5 pt-8 px-8 !rounded-[30px]"}
              >
                <Image
                  src={props.imgSquare1}
                  className="block mx-auto w-3/4 "
                  alt="..."
                />
                <button
                  className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline "
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <BsChevronLeft
                    color={"black"}
                    size={28}
                    className="carousel-control-prev-icon inline-block bg-no-repeat absolute "
                    aria-hidden="true"
                  ></BsChevronLeft>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <BsChevronRight
                    color={"black"}
                    size={28}
                    className="carousel-control-next-icon inline-block bg-no-repeat absolute "
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="carousel-caption text-center text-black bottom-[-100px] flex flex-col">
              <p className={"font-bold"}>Trouve</p>
              <p> ce dont tu as besoin !</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className={"relative"}>
              <div
                className={"w-3/4 mx-auto bg-black/5 pt-8 px-8 !rounded-[30px]"}
              >
                <Image
                  src={props.imgSquare2}
                  className="block mx-auto w-3/4 "
                  alt="..."
                />
                <button
                  className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline "
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <BsChevronLeft
                    color={"black"}
                    size={28}
                    className="carousel-control-prev-icon inline-block bg-no-repeat absolute "
                    aria-hidden="true"
                  ></BsChevronLeft>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <BsChevronRight
                    color={"black"}
                    size={28}
                    className="carousel-control-next-icon inline-block bg-no-repeat absolute "
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="carousel-caption text-center text-black bottom-[-100px] flex flex-col">
              <p className={"font-bold"}>Découvre </p>
              <p> de nouveaux entraînements et conseils !</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className={"relative"}>
              <div
                className={"w-3/4 mx-auto bg-black/5 pt-8 px-8 !rounded-[30px]"}
              >
                <Image
                  src={props.imgSquare3}
                  className="block mx-auto w-3/4 "
                  alt="..."
                />
                <button
                  className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline "
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <BsChevronLeft
                    color={"black"}
                    size={28}
                    className="carousel-control-prev-icon inline-block bg-no-repeat absolute"
                    aria-hidden="true"
                  ></BsChevronLeft>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <BsChevronRight
                    color={"black"}
                    size={28}
                    className="carousel-control-next-icon inline-block bg-no-repeat absolute "
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="carousel-caption text-center text-black bottom-[-100px] flex flex-col">
              <p className={"font-bold"}>Partage</p>
              <p>tes performances et objectifs !</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSquare;
