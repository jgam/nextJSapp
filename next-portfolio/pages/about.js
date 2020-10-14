import Layout from "../components/Layout";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

export default class About extends Component {
  state = {
    user: null,
  };

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/jgam");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    return {
      user: data,
      statusCode,
    };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="about">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="me" height="200px" />
      </Layout>
    );
  }
}
