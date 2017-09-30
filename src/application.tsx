import * as React from "react";
import * as ReactDOM from "react-dom";
import { Controller } from "cerebral";
import { Container } from "@cerebral/react";

const controller = Controller({
  state: {
    isPannelOpen: false
  }
})

/**
* Render application into a div
*/
export const render = (element) => {
  // our app
  ReactDOM.render(
    <Container controller={controller}>
      <div className="test">
        Hello world !
      </div>
    </Container>
    ,
    document.querySelector(element) as HTMLElement
  );
};
