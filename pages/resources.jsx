import Head from "next/head";
import { PageLayout } from "../sections/hoc";
import { ResourcesSection } from "../sections/resources";
import { Title } from "../components";

export default function Resources({ ...props }) {
  return (
    <div {...props}>
      <Head>
        <title>PuMP | Resources</title>
      </Head>
      <PageLayout>
        <Title title="Student Resources" />
        <ResourcesSection />
      </PageLayout>
    </div>
  );
}
