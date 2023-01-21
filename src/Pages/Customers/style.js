import styled from "styled-components";

export const ClientsGrid = styled.figure`
  width: 70%;
  margin: clamp(2rem, 6vw, 7rem) auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  place-items: center;
  gap: 2rem 4rem;

  img {
    width: 100%;
  }

  @media screen and (max-width: 31.25em) {
    width: 100%;
    padding-inline: 1rem;
  };
`;

export const CardWrapper = styled.div`
  width: 80%;
  margin: 4rem auto 3rem;
  display: flex;
  justify-content: space-between;
  gap: 3rem 1rem;

  img {
    width: clamp(70px, 5vw, 100px);
  }

  @media screen and (max-width:53em){
    flex-direction: column;
    align-items: center;
  };
`;

export const WorkGrid = styled.div`
  width: 80%;
  margin: clamp(2rem, 6vw, 7rem) auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: clamp(2rem, 6vw, 7rem) 2rem;

  img{
    width: 100%;
  }

  div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2{
    font-size: clamp(1.5rem, 2.4vw, 3rem);
  }

  button{
    grid-area: 4 / 2 span;
  }

  @media screen and (max-width:53em){
    width: 90%;
    grid-template-columns: 1fr;

    div{
      gap: .5rem;
    }

    div:nth-child(3){
      grid-area: 4 / 1;
    }

    button{
      grid-area: 7 / 1 span;
    }
  };
`;

export const JoinGrid = styled.div`
  width: 85%;
  margin: 4rem auto 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  place-items: center;
  gap: 3rem 1rem;

  @media screen and (max-width:53em){
    width: 90%;
    margin: 0 auto 1rem;
  };
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul{
    list-style: none;
  }

  li, a{
    margin-block-start: .5rem;
    font-size: clamp(1rem, 1.1vw, 1.4rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    color: var(--txt-clr);
    text-decoration: none;
    text-align: center;
  }

  li:nth-child(4){
    margin-block-start: 1rem;
  }

  a{
    font-weight: var(--fw-700);
  }
`;