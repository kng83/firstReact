import * as React from "react";
import "./Confirm.css";

interface IProps {
  open: boolean;
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}

const Confirm: React.SFC<IProps> = props => {
  const handleCancelClick = () => {
    props.onCancelClick();
  };
  const handleOkClick = () => {
    props.onOkClick();
  };

  return (
    <div
      className={
        this.props.open ? "confirm-wrapper confirm-visible" : "confirm-wrapper"
      }
    ></div>
  );
};
