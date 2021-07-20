import Head from "next/head";
import { PageLayout } from "../sections/hoc";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        hello
      </PageLayout>
    </div>
  );
}
