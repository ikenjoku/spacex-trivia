import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const Circle = styled.div`
  animation: circles-to-diamond 1200ms linear infinite;
  background: transparent;
  border: 3px solid blueviolet;
  border-radius: 10%;
  height: 35px;
  margin-left: 39.375px;
  overflow: hidden;
  transform: rotate(45deg);
  width: 35px;

  &:nth-child(1) {
    animation-delay: calc(150ms * 1);
    margin-left: 0;
  }
  &:nth-child(2) {
    animation-delay: calc(150ms * 2);
  }
  &:nth-child(3) {
    animation-delay: calc(150ms * 3);
  }

  @keyframes circles-to-diamond {
    0% {
      border-radius: 10%;
    }
    17.5% {
      border-radius: 10%;
    }
    50% {
      border-radius: 100%;
    }
    93.5% {
      border-radius: 10%;
    }
    100% {
      border-radius: 10%;
    }
  }
`

export const Loader = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  transition: 0.5s;
  width: 100%;
  z-index: 900;

  background-color: 'white';
  opacity:  1;
  pointer-events:'all';
  visibility: 'visible';
`
