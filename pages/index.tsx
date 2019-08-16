import Layout from "../components/MyLayout";
import {NextPage} from "next";
import Link from "next/link";
import axios from "axios";

interface Props {
  userAgent?: string;
  shows: Array<any>;
}

const PostLink = (props: any) => (
  <li key={props.id}>
    <Link href="/post/[id]" as={`/post/${props.id}`}>
      <a>
        {props.name}
        <img src={props.thumbnail} />
      </a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Index: NextPage<Props> = ({shows}) => (
  <Layout>
    <h1>My Blog</h1>

    <ul>
      {shows.map((show: any) => (
        <PostLink
          name={show.name}
          id={show.id}
          key={show.id}
          thumbnail={show.image.medium}
        />
      ))}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await axios.get<any>(
    "https://api.tvmaze.com/search/shows?q=epace"
  );

  return {
    shows: res.data.map((entry: any) => entry.show)
  };
};

export default Index;
