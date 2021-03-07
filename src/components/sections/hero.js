import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Delivering </h1>;
  const two = <h2 className="big-heading">AI solutions for</h2>;
  const three = <h3 className="big-heading">tier-1 VC backed startups,</h3>;
  const four = <h3 className="big-heading">enterprise,</h3>;
  const five = <h3 className="big-heading">and government.</h3>;
  const six = (
    <p>
      Because there's no one size fits all solution in AI, weather you're looking for an AI
      transformation or a solution to a bespoke project that requires extending the state-of-the-art
      in machine learning and AI, we can help you reach those OKRs. We use Agile methodologies for
      execution and world recognised experts as a recipe for success.
    </p>
  );
  //Companies that shift from AI experimentation to execution achieve lasting ROI and competitive agility.
  //If unlocking the AI potential is one of your top OKRs, we can help getting it right. One client at a time.
  const seven = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five, six, seven];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
