import Head from "next/head";
import { PageLayout } from "../sections/hoc";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PuMP</title>
      </Head>
      <PageLayout>
        <div style={{ height: "500px" }}>
          hello
        </div>
      </PageLayout>
    </div>
  );
}
