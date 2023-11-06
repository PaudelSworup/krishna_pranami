import { Layout } from "@/interfaces/interface";
import Head from "next/head";

export default function Layout(props: Layout) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.children}
    </div>
  );
}
