import * as React from "react";
import Button from "./Button";
import { Story } from "../../dev/app/types";

const story: Story = {
  name: "button",
  title: "Button",
  patterns: [
    {
      title: "plain",
      props: [
        {
          type: "string",
          name: "color",
          label: "Color",
          options: [
            {
              label: "Blue",
              value: "blue"
            },
            {
              label: "Red",
              value: "red"
            }
          ]
        }
      ],
      render() {
        return <Button>Label</Button>;
      }
    }
  ]
};

export default story;
