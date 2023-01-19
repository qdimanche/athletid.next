import React, {useState} from 'react';
import styled from 'styled-components';


const StyledBurger = styled.div`
  width: 2rem;
  height: 1.25rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  margin-top: ${({open}) => open ? '10px': '0'};
  transition-duration: 100ms;
  
  div {
    width: 2rem;
    height: 2px;
    border-radius: 2px;
    background-color: black;
    cursor: pointer;
    transition: all 0.4s linear;
    
    &:nth-child(1){
      transform: ${({open}) => open ? 'rotate(-45deg) ': 'rotate(0)'};
    }
    
    

    &:nth-child(2){
      transform: ${({open}) => open ? 'translateY(-10px) rotate(45deg)': 'rotate(0)'};
    }
    
  }
`;

const Burger = () => {


    const [open, setOpen] = useState(false);


    return (
        <div>
            <StyledBurger open={open} onClick={() => setOpen (!open)}>
                <div id={'bar'} ></div>
                <div id={'bar'} ></div>
            </StyledBurger>

        </div>
    );
};

export default Burger;
