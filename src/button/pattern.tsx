import * as React from "react";
import Button from "./Button";

export default {
  name: "button",
  title: "Button",
  patterns: [
    {
      title: "plain",
      props: {
        color: { type: "string", options: ["blue", "red"] }
      },
      render() {
        return <Button>Label</Button>;
      }
    }
  ]
};
