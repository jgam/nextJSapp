import Layout from "../components/Layout";

export default ({ statusCode }) => (
  <Layout title="Error">
    {statusCode
      ? `Could not load the page you wanted and had status code of ${statusCode}`
      : `Couldn't get that page, sorry!`}
  </Layout>
);
