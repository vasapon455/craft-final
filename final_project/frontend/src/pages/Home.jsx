import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ImageCard from "../components/ImageCard";
import '../styles/home.css'

const Home = () => {

const newArrivalItems = [{source:'1',altText:'Hello'},{source:'2',altText:'Hello'},{source:'3',altText:'Hello'},{source:'4',altText:'Hello'},{source:'5',altText:'Hello'},{source:'6',altText:'Hello'}]

  return (
    <Layout>
        <Section header="New Arrival">
           <section className="new-arrival">
          {newArrivalItems.map((item)=>
            <ImageCard source={item.source} altText={item.altText}/>
          )}
        </section>
        </Section>
        <Section header="About us">
        <section className="about-us">
            <img src="./about-us.jpeg" className="about-us-image"/>
            <div className="text-container">
            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed libero consectetur, consequat ligula a, iaculis enim. Etiam dictum neque non tristique auctor. Pellentesque aliquam mauris at nulla malesuada consequat. Aliquam vitae lectus in diam fermentum dignissim at id risus. Suspendisse commodo vitae nibh vel laoreet. Morbi odio mi, volutpat et augue ac, consequat ornare ante. Nulla ipsum leo, rhoncus eu nibh sed, ullamcorper tempus lacus. Sed augue diam, congue sit amet eros sodales, tempor sodales arcu. Aenean gravida sapien nibh, at dignissim neque pellentesque eget. Integer mollis at libero at sagittis. Donec elit diam, blandit quis magna consectetur, ultrices pulvinar justo. Fusce nisi massa, faucibus nec consequat et, lobortis dictum augue. Duis dolor leo, mattis sit amet magna in, dictum tristique eros. Morbi et tincidunt augue. In aliquet turpis ligula, sed cursus purus molestie id.</p>
            </div>
        </section>
        </Section>
    </Layout>
  );
};

export default Home;
