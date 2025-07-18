import { useCallback } from 'react';
import styled from 'styled-components';
import { CardStatus } from './CardStatus';
import { CardTitle } from './CardTitle';

export function Card({ props, onClickHandler }) {
  const onCardClickHandler = useCallback(() => onClickHandler(props), [
    props,
    onClickHandler
  ]);

  return (
    <StyledCard onClick={onCardClickHandler}>
      <CardImg src={props.image} alt={props.name} />

      <CardInfo>
        <CardTitle name={props.name} gender={props.gender} />

        <CardStatus
          status={props.status}
          species={props.species}
          type={props.type}
        />
      </CardInfo>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  background: #263750;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
  }

  &:hover .card-title {
    color: #83bf46;
  }
`;

const CardImg = styled.img`
  border-radius: 10px 10px 0 0;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 20px;
`;
