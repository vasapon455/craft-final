import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const blogData = [
    {
      header: "Hello World",
      createdDate: "20/12/2024",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed libero consectetur, consequat ligula a, iaculis enim. Etiam dictum neque non tristique auctor. Pellentesque aliquam mauris at nulla malesuada consequat. Aliquam vitae lectus in diam fermentum dignissim at id risus. Suspendisse commodo vitae nibh vel laoreet. Morbi odio mi, volutpat et augue ac, consequat ornare ante. Nulla ipsum leo, rhoncus eu nibh sed, ullamcorper tempus lacus. Sed augue diam, congue sit amet eros sodales, tempor sodales arcu. Aenean gravida sapien nibh, at dignissim neque pellentesque eget. Integer mollis at libero at sagittis. Donec elit diam, blandit quis magna consectetur, ultrices pulvinar justo. Fusce nisi massa, faucibus nec consequat et, lobortis dictum augue. Duis dolor leo, mattis sit amet magna in, dictum tristique eros. Morbi et tincidunt augue. In aliquet turpis ligula, sed cursus purus molestie id.",
    },
    {
      header: "Hello World",
      createdDate: "20/12/2024",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed libero consectetur, consequat ligula a, iaculis enim. Etiam dictum neque non tristique auctor. Pellentesque aliquam mauris at nulla malesuada consequat. Aliquam vitae lectus in diam fermentum dignissim at id risus. Suspendisse commodo vitae nibh vel laoreet. Morbi odio mi, volutpat et augue ac, consequat ornare ante. Nulla ipsum leo, rhoncus eu nibh sed, ullamcorper tempus lacus. Sed augue diam, congue sit amet eros sodales, tempor sodales arcu. Aenean gravida sapien nibh, at dignissim neque pellentesque eget. Integer mollis at libero at sagittis. Donec elit diam, blandit quis magna consectetur, ultrices pulvinar justo. Fusce nisi massa, faucibus nec consequat et, lobortis dictum augue. Duis dolor leo, mattis sit amet magna in, dictum tristique eros. Morbi et tincidunt augue. In aliquet turpis ligula, sed cursus purus molestie id.",
    },
    {
      header: "Hello World",
      createdDate: "20/12/2024",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed libero consectetur, consequat ligula a, iaculis enim. Etiam dictum neque non tristique auctor. Pellentesque aliquam mauris at nulla malesuada consequat. Aliquam vitae lectus in diam fermentum dignissim at id risus. Suspendisse commodo vitae nibh vel laoreet. Morbi odio mi, volutpat et augue ac, consequat ornare ante. Nulla ipsum leo, rhoncus eu nibh sed, ullamcorper tempus lacus. Sed augue diam, congue sit amet eros sodales, tempor sodales arcu. Aenean gravida sapien nibh, at dignissim neque pellentesque eget. Integer mollis at libero at sagittis. Donec elit diam, blandit quis magna consectetur, ultrices pulvinar justo. Fusce nisi massa, faucibus nec consequat et, lobortis dictum augue. Duis dolor leo, mattis sit amet magna in, dictum tristique eros. Morbi et tincidunt augue. In aliquet turpis ligula, sed cursus purus molestie id.",
    },
    {
      header: "Hello World",
      createdDate: "20/12/2024",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed libero consectetur, consequat ligula a, iaculis enim. Etiam dictum neque non tristique auctor. Pellentesque aliquam mauris at nulla malesuada consequat. Aliquam vitae lectus in diam fermentum dignissim at id risus. Suspendisse commodo vitae nibh vel laoreet. Morbi odio mi, volutpat et augue ac, consequat ornare ante. Nulla ipsum leo, rhoncus eu nibh sed, ullamcorper tempus lacus. Sed augue diam, congue sit amet eros sodales, tempor sodales arcu. Aenean gravida sapien nibh, at dignissim neque pellentesque eget. Integer mollis at libero at sagittis. Donec elit diam, blandit quis magna consectetur, ultrices pulvinar justo. Fusce nisi massa, faucibus nec consequat et, lobortis dictum augue. Duis dolor leo, mattis sit amet magna in, dictum tristique eros. Morbi et tincidunt augue. In aliquet turpis ligula, sed cursus purus molestie id.",
    },
  ];

  return (
    <Layout>
      <Section header="Blog">
        <section className="blog">
          <Link
            to="/"
            style={{
              fontFamily: "Kanit",
              color: "black",
              textDecoration: "underline",
            }}
          >
            +โพสใหม่
          </Link>
          {blogData.map((data) => (
            <BlogCard
              header={data.header}
              createdDate={data.createdDate}
              summary={data.summary}
            />
          ))}
        </section>
      </Section>
    </Layout>
  );
};

export default Blog;
