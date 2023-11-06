import { Layout } from "@/interfaces/interface";
import Head from "next/head";

export default function Layout(props: Layout) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {props.children}
    </div>
  );
}
