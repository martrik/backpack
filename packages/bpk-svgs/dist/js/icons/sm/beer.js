import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M11 4V1.5c0-.3-.2-.5-.5-.5h-7c-.3 0-.5.2-.5.5V16c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-4c2.2 0 4-1.8 4-4s-1.8-4-4-4zM5 14.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-11c0-.3.2-.5.5-.5s.5.2.5.5v11zm2 0c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-11c0-.3.2-.5.5-.5s.5.2.5.5v11zm4-4.5V6c1.1 0 2 .9 2 2s-.9 2-2 2z" /></svg>;
  }

}