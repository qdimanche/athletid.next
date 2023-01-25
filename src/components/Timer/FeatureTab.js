import React, {useState} from 'react';
import styled from 'styled-components';


const StyledPlus = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  position: absolute;
  bottom: 2.5rem; 
  right: 2.5rem;
  z-index: 3;
  border: 1px solid white;
  border-radius: 50%;
  padding: 8px;
  transition-duration: 300ms;
  cursor: pointer;
  
  transform: ${({open}) => open ? 'rotate(-45deg)': 'rotate(0)'};
  
  div {
    width: 100%;
    height: 2px;
    border-radius: 2px;
    left: 10px;
    background-color: white !important;
    transition: all 0.4s linear;
  }
  
  div:nth-child(1) {
    transition-duration: 300ms;
    transform: translateY(4px);
  }
  
  div:nth-child(2){
    transition-duration: 300ms;
    transform:  rotate(90deg) translateX(-3px) !important;
  }
  
`;


const Plus = (props) => {


    const [open, setOpen] = useState(false);
    const [countTab, setCountTab] = useState(1);


    return (
        <div>
            <StyledPlus open={open} onClick={() => setOpen (!open)}>
                <div id={'bar'} ></div>
                <div id={'bar'} ></div>
            </StyledPlus>


            <div className={open?'absolute width-[66.6%] bg-[#242629] text-white z-2 bottom-[1.5rem] left-[1.5rem] right-[1.5rem] !pb-[4rem] rounded-medium duration-1000 opacity-1':'opacity-0'} open={open}>

                <ul className={'flex lg:space-x-12 space-x-8 p-6 !pb-0 border-b-[1px] border-b-white/10'}>
                    <li onClick={() => setCountTab(1)} className={countTab === 1 ?'pb-6 border-b-[1px] border-b-white':'pb-6 border-b-0 cursor-pointer'}>{props.titleTab1}</li>
                    <li onClick={() =>setCountTab(2)} className={countTab === 2 ?'pb-6 border-b-[1px] border-b-white':'pb-6 border-b-0 cursor-pointer'}>{props.titleTab2}</li>
                    <li onClick={() =>setCountTab(3)} className={countTab === 3 ?'pb-6 border-b-[1px] border-b-white':'pb-6 border-b-0 cursor-pointer'}>{props.titleTab3}</li>
                </ul>

                {
                    countTab === 1 ?
                        <div className={'p-[1.5rem]'}>
                            <p>{props.textTab1}</p>
                        </div>
                        : countTab === 2 ?
                                <div className={'p-[1.5rem]'}>
                                    <p>{props.textTab2}</p>
                                </div>
                                :
                                    <div className={'p-[1.5rem]'}>
                                        <p>{props.textTab3}</p>
                                    </div>
                }



            </div>




        </div>
    );
};






export default Plus;
