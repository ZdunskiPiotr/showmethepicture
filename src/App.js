import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    users: "",
    password: "",
    pictureURL: "",
    text: "",
  };

  render() {
    // const users = [
    //   {
    //     password: "michał",
    //     pictureURL: "imagesNames/Michal.jpg",
    //     text: "Hej ho, hej ho, do pracy by się szło!",
    //   },
    //   {
    //     password: "michalina",
    //     pictureURL: "imagesNames/Michalina.jpg",
    //     text: "Piona gościu! Kicham, więc dyzenfykuj.",
    //   },
    //   {
    //     password: "marcin",
    //     pictureURL: "imagesNames/Marcin.jpg",
    //     text: "Siła! Masa!",
    //   },
    //   {
    //     password: "piotr",
    //     pictureURL: "imagesNames/Piotr.jpg",
    //     text: "Just smile!",
    //   },
    //   {
    //     password: "behemoth",
    //     pictureURL: "imagesNames/Behemot.jpg",
    //     text: "Just farted.",
    //   },
    //   {
    //     password: "mefisto",
    //     pictureURL: "imagesNames/Mefisto.jpg",
    //     text: "Just looking around.",
    //   },
    //   {
    //     password: "koty",
    //     pictureURL: "imagesNames/Koty.jpg",
    //     text: "Inspektor Kot, inspektor Pierzchała, wydział wewnętrzny",
    //   },
    // ];

    fetch("./data/data.json")
      .then((response) => response.json())
      .then((result) => {
        const users = result;
        this.setState({ users });
      })
      .catch((err) => console.log(err));

    const stateUsers = this.state.users;

    const handleChange = (e) => {
      this.setState({
        password: e.target.value.toLowerCase(),
      });

      const foundUser = stateUsers.find(
        (user) => user.password === e.target.value.toLowerCase()
      );

      if (foundUser) {
        this.setState({
          pictureURL: foundUser.pictureURL,
          text: foundUser.text,
        });
      } else {
        this.setState({
          pictureURL: "",
          text: "",
        });
      }
    };

    return (
      <>
        <h1>Show Me The Picture</h1>
        <br />
        <br />
        <span className="start"> Wprowadź imię :</span>
        <p> (człowieka lub kota, a nawet polityka)</p>
        <br />
        <input type="text" id="pass" onChange={handleChange} />
        <div className="image">
          <br />
          <img
            src={this.state.pictureURL}
            alt="Po wpisaniu imienia obrazek może się chwilę wczytywać"
          />
        </div>
        <div className="message">
          <br />
          <p>{this.state.text}</p>
        </div>
      </>
    );
  }
}

export default App;
