import Container from "../../components/layout/container";
import Layout from "../../components/layout/layout";
import PageHeader from "../../components/layout/page-header";
import Head from "next/head";
import { SITE_NAME } from "../../lib/constants";

export default function CV() {
  return (
    <>
      <Layout>
        <Head>
          <title>CV | {SITE_NAME}</title>
        </Head>
        <PageHeader title="CV" />
        <Container>
          <iframe
            width="100%"
            height="800px"
            id="cv"
            src="/assets/cvs/corey-robinson-cv-usa-september-2022.pdf"
          ></iframe>
        </Container>
      </Layout>
    </>
  );
}
