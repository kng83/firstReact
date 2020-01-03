import * as React from "react";
import "./Confirm.css";

interface ConfirmProps {
  open: boolean;
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}

class Confirm extends React.Component<ConfirmProps> {
  public static defaultProps = {
    cancelCaption: "cancel",
    okCaption: "ok"
  };

  attachText() {
    return "some other text";
  }

  private handleCancelClick = () => {
    this.props.onCancelClick();
  };

  private handleOkClick = () => {
    this.props.onOkClick();
  };

  

  public render() {
    return (
      <div className={ this.props.open ? "confirm-wrapper confirm-visible": "confirm-wrapper"}>
        <div className="confirm-container">
          <div className="confirm-title-container">
            <span>{this.props.title}</span>
            <span>{this.props.content}</span>
          </div>
          <div className="confirm-content-container">
            <p>This is where our content should go</p>
          </div>
          <div className="confirm-buttons-container">
            <button className="confirm-cancel" onClick={this.handleCancelClick}>
              {this.props.cancelCaption}
            </button>
            <button className="confirm-ok" onClick={this.handleOkClick}>
              {this.props.okCaption}{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//A tak wygladalaby klasa confirm
//let some = new Confirm({title:"some",content:"some content"});
//console.log(some);

export default Confirm;
