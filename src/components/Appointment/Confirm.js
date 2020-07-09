import React from "react";
import Button from "components/Button";
import "components/Appointment/styles.scss"
import { action } from "@storybook/addon-actions/dist/preview";

export default function Confirm(props) {
  return (
    <main className="appointment__card appointment__card--confirm">
  <h1 className="text--semi-bold">Delete the appointment?</h1>
  <section className="appointment__actions">
    <Button danger onClick={action("onCancel")}>Cancel</Button>
    <Button danger onClick={action("onConfirm")}>Confirm</Button>
  </section>
</main>
  )
}