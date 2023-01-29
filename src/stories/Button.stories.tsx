import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../components/button";
const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      defaultValue: "Default button",
    },
  },
};
export default meta;
const Template: Story<Props> = (args) => <Button {...args} />;
export const Default = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
  buttonStyle: "rounded",
};
