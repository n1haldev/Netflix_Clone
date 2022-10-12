import React from "react";
import mflixlogo from "./resources/Mflix_Brand_Logo2.png";
import sl1_bg from "./resources/netflix_sl1_bg.jpg";
import netflix_on_tv from "./resources/netflix_on_tv.gif";
import netflix_children_profiles from "./resources/netflix_children_profiles.png";
import "./style.css";

class NavBar extends React.Component {
  style_div = {
    position: "fixed",
    display: "grid",
    background: "#222222",
    width: "100%",
    height: "90px",
    zIndex: "5",
  };
  style_img = {
    height: "70%",
  };
  style_button = {
    backgroundColor: "#db4dce",
    color: "white",
    width: "100px",
    height: "40px",
    borderRadius: "5px",
    position: "absolute",
    margin: "20px",
    right: "20px",
  };
  render() {
    return (
      <div style={this.style_div}>
        <img src={mflixlogo} alt="logo" style={this.style_img} />
        <button style={this.style_button}>Sign In</button>
      </div>
    );
  }
}

class WelcomeSlide extends React.Component {
  style_img = {
    width: "100%",
    height: "800px",
    opacity: "50%",
  };
  style_p = {
    fontSize: "30px",
    color: "white",
    fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
  };
  style_input = {
    width: "400px",
    height: "50px",
    padding: "0px 10px",
    borderRadius: "10px",
    fontSize: "18px",
  };
  style_button = {
    backgroundColor: "#db4dce",
    color: "white",
    // display: "inline-block",
    width: "100px",
    height: "40px",
    borderRadius: "5px",
  };
  style_center={
    margin:"center",

  }
  render() {
    return (
      <div style={{ backgroundColor: "#3f053a" }}>
        <img src={sl1_bg} alt="demo pic" style={this.style_img} />
        <div style={this.style_center}>
          <p style={this.style_p}>
            Subscribe to get unlimited access to Movies and TV Shows that you
            can <br />
            watch from anywhere anytime. Cancel Subscription when you want to.
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            style={this.style_input}
          />
          <button style={this.style_button}>
            <b>See Plans</b>
          </button>
        </div>
      </div>
    );
  }
}

class Slide extends React.Component {
  render() {
    return (
      <div
        style={{
          // display: "inline-block",
          height: "350px",
          backgroundColor: "black",
        }}
      >
        <img src={netflix_on_tv} alt="demo pic" />
        <p
          style={{
            color: "white",
            position: "absolute",
            padding: "100px",
            display: "inline-block",
            marginTop: "60px",

            fontSize: "30px",
            fontFamily:
              "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
          }}
        >
          Watch your favourite Movies and TV Shows on your big screen
        </p>
      </div>
    );
  }
}

class Slide1 extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "black",
          // display: "inline-block",
          height: "450px",
        }}
      >
        <img
          src={netflix_children_profiles}
          alt="demo pic"
          style={{ width: "600px" }}
        />
        <p
          style={{
            color: "white",
            position: "absolute",
            padding: "100px",
            marginTop: "100px",
            display: "inline-block",
            fontSize: "30px",
            fontFamily:
              "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
          }}
        >
          Create Profiles for Kids and set them free to play and explore in
          entertainment made for them
        </p>
      </div>
    );
  }
}

// class FAQButton extends React.Component {
//   render() {
//     const faqb = {};
//     return (
//       <div>
//         <button style={faqb}>{this.props.children}</button>
//       </div>
//     );
//   }
// }

class FAQ extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <button>1. What is MFLIX?</button>
        <button>2. What plans can I choose?</button>
        <button>3. How many devices can I use this on?</button>
        <button>4. When can I cancel my Subscription</button>
        <button>
          5. Are there any hidden charges for deleting my subscription?
        </button>
      </div>
    );
  }
}

class Divider extends React.Component {
  render() {
    return <div style={{ height: "10px", backgroundColor: "grey" }}></div>;
  }
}

export { NavBar, Divider, WelcomeSlide, Slide, Slide1, FAQ };
