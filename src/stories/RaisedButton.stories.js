import React from "react";
import { RaisedButton as RaisedButtonComponent } from "../components/Button/RaisedButton";

export default {
  title: "UI/Button",
  component: RaisedButtonComponent,
};

const Template = (args) => <RaisedButtonComponent {...args} />;

export const RaisedButton = Template.bind({});
RaisedButton.args = {
  text: "Button",
  disabled: false,
};
