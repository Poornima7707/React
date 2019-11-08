import React, { Component } from "react";
import styles from "./User.module.css";
import Usercomp from "./Usercomp.js";

export default class FetchRandomUser extends Component {
  state = {
    loading: true,
    people: null
  };

  async componentDidMount() {
    const url = "https://api.github.com/users";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      people: data,
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>didn't get a person</div>;
    }

    return (
      <div className={styles.container}>
        {this.state.people.map(person => (
          <div>
             <Usercomp src={person.avatar_url} />
            <div className={styles.text}>{person.login}</div>
          </div>
        ))}
      </div>
    );
  }
}
