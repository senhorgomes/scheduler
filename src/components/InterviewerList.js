import React from "react";

import InterviewerListItem from "components/InterviewerListItem"
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  // const interviewsClass = classnames("interviewers", {
  //   "interviewers__header": props.selected,
  //   "interviewers__list": props.avatar,
  //   }
  // )
  

  const interviewersAvailable = props.interviewers.map((interviewer) => {
    return(
      <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name} 
      avatar={interviewer.avatar}
      selected={interviewer.id === props.interviewer}
      setInterviewer={event => props.setInterviewer(interviewer.id)}  
      />
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewersAvailable}</ul>
    </section>
  )
}