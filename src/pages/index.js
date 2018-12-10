import React from "react"
import { css } from 'emotion';
import PersonQuote from '../components/PersonQuote';
import { backgroundColor } from '../shared/css/colors';
import Accolade from '../components/Accolade';
import PerksSection from '../components/PerksSection';
import SectionTitle from '../components/SectionTitle';
import '../shared/css/global.css';
import PhotoFeed from '../components/PhotoFeed';
import SearchBar from '../components/SearchBar';
import { mobileMedia } from '../shared/css/screenSizes';
import Headline from '../components/Headline';

const rootClass = css`
  background-color: ${backgroundColor};
`;

const mainClass = css`
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const headerClass = css`
  margin-top: 16px;
  margin-bottom: 16px;
  align-self: stretch;
`;

const backgroundImgClass = css`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/banner-background-gray.jpg");
`;

const bannerClass = css`
  ${backgroundImgClass};
  padding: 32px 32px 5rem;
  background-size: auto 115%;
  background-position-x: 60%;
  background-position-y: 77%;
  position: relative;
  align-self: stretch;
  
  ${mobileMedia} {
    background: none;
    padding: 0;
  }
`;

const bannerInnerClass = css`
  position: relative;
  z-index: 2;
`;

const bannerHeaderClass = css`
  ${mobileMedia} {
    ${backgroundImgClass};
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  }
`;

const quotesClass = css`
  display: flex;
  align-items: center;
  
  ${mobileMedia} {
    flex-direction: column;
  }
`;

const accoladesClass = css`
  align-self: stretch;
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  padding: 2.5rem 5% 3rem;
  
  ${mobileMedia} {
    flex-direction: column;
    align-items: center;
  }
`;

export default () => (
  <div className={rootClass}>
    <main className={mainClass}>
      <header className={headerClass}>
        <SearchBar />
      </header>
      <section className={bannerClass}>
        <div className={bannerInnerClass}>
          <Headline className={bannerHeaderClass} />
          <div className={quotesClass}>
            <PersonQuote
              name="Khoa"
              position="Lead Product Manager"
              quote="Smart, cool and ready to prove it"
              photoSrc="/images/banner-person-1.jpg"
            />
            <PersonQuote
              name="Alyssa"
              position="Sales Manager"
              quote="It's a new day, learn something"
              photoSrc="/images/banner-person-2.jpg"
              reverse
            />
            <PersonQuote
              name="Ravin"
              position="Director of Development"
              quote="We're growing fast, and so can you"
              photoSrc="/images/banner-person-3.jpg"
            />
          </div>
        </div>
      </section>
      <section className={accoladesClass}>
        <Accolade
          name="Glassdoor"
          awardText="Glassdoor's Best Place to Work 2015"
          imgSrc="/images/glassdoor.png"
        />
        <Accolade
          name="Fortune"
          awardText="Fortune's Great Place to Work in Tech"
          imgSrc="/images/fortune.png"
        />
        <Accolade
          name="Outside"
          awardText="Outside's Best Places to Work"
          imgSrc="/images/outside.png"
        />
      </section>
      <PerksSection />
      <SectionTitle
        title="Our Culture"
        subtitle="A Family Named Cornerstone"
      />
      <div>
        <PhotoFeed />
      </div>
    </main>
  </div>
)
