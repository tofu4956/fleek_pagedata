import Container from "../components/container";
import Article from "../components/article";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { DOMAIN_NAME } from "../lib/constants";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const Posts = allPosts;
  return (
    <>
      <Layout>
        <meta name="og:title" content="korejyanaide.cyou"></meta>
        <Head>
          <title>{DOMAIN_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {Posts.length > 0 && <Article posts={Posts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);
  return {
    props: { allPosts },
  };
};
