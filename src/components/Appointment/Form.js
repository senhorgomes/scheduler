import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import { action } from "@storybook/addon-actions/dist/preview";

export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  function reset() {
    setName("");
    setInterviewer(null);
  }

  function cancel() {
    reset();
    props.onCancel();
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter Student Name"
          /*
            This must be a controlled component
          */
          />
        </form>
        {/* changed line 27 from value to interviewer to avoid issues in InterviewerList */}
        <InterviewerList interviewers={props.interviewers} interviewer={interviewer} onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={action("onSave")}>Save</Button>
        </section>
      </section>
    </main>
  )
}