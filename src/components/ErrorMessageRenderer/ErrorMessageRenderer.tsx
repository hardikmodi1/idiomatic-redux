import React from "react";
import "./errorMessageRenderer.css";

const ErrorMessageRenderer = (props: { errorMessage: string }) =>
  props.errorMessage ? <div className="error">{props.errorMessage}</div> : null;

export default React.memo(ErrorMessageRenderer);
