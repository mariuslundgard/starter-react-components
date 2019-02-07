import * as React from "react";
import { Story } from "../../dev/app/types";

const story: Story = {
  name: "textInput",
  title: "TextInput",
  patterns: [
    {
      title: "plain",
      props: [],
      render() {
        return <div>TextInput</div>;
      }
    }
  ]
};

export default story;
