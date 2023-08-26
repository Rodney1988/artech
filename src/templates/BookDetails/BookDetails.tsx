import React from 'react';
import styled from '@emotion/styled';
import { Doc } from '../../types/types';

interface Open {
  isOpen: boolean;
}

export const BookDetails = ({ rowState }: { rowState: Doc }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCoverClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(rowState);
  return (
    <CenterWrapper>
      <BookWrapper onClick={handleCoverClick}>
        {/* The left border of the book had to be done in inline styles */}
        <div
          style={{
            position: 'absolute',
            width: '50px', // Must be similar to the left attribute of front cover
            borderTopLeftRadius: '3px',
            borderBottomLeftRadius: '3px',
            bottom: '0',
            top: '0',
            left: '0',
            backgroundColor: '#7a5f4b',
            boxShadow: ' inset 0 0 15px brown',
          }}
        />
        <FrontCover onClick={handleCoverClick} isOpen={isOpen}>
          <FrontContentWrapper>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '2px dashed white',
                height: '100%',
                margin: '7px',
                padding: '25px',
              }}
            >
              <h2>{rowState.title}</h2>
              <h3>By {rowState.author_name}</h3>
            </div>
          </FrontContentWrapper>
          {/* <p>{rowState.}</p> */}
          <BackCoverBrown isOpen={isOpen} />
        </FrontCover>
        <ContentWrapper>
          <h3>Hi !!</h3>
        </ContentWrapper>
      </BookWrapper>
    </CenterWrapper>
  );
};

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FrontContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  height: 100%;
`;

const BookWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  min-height: 475px;
  height: 100%;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background: #d4c6b0; //paper color
  margin-top: 50px;
  box-shadow: 0px -10px 10px -5px rgba(0, 0, 0, 0.25),
    0px 10px 10px -5px rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.1) 0px -50px 136px -28px inset;
  perspective: 8000px;
  color: black;
  :hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    max-width: 250px;
  }
`;

const FrontCover = styled.div<{ isOpen: boolean }>`
  color: white;
  position: absolute;
  width: 89%;
  height: 100%;
  left: 49px;
  transform: ${({ isOpen }) =>
    isOpen ? 'rotateY(-170deg)' : 'rotateY(-5deg)'};
  transform-style: preserve-3d;
  transform-origin: left;
  transition: transform 0.6s;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background: #896952;
  box-shadow: ${({ isOpen }) =>
    isOpen
      ? `0px -10px 10px -5px rgba(0, 0, 0, 0.5),
      0px 10px 10px -5px rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.1) 0px -50px 136px -28px inset;`
      : ``} 
  font-weight: normal;
  font-family: cursive;
  :hover {
    cursor: pointer;
  }
`;

const BackCoverBrown = styled.div<Open>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #3d2427;
  transform-style: preserve-3d;
  transform-origin: left;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  transform: translateZ(-1px);
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  font-size: 22px;
  left: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
