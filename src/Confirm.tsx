import * as React from 'react';
import "./Confirm.css";

interface ConfirmProps{
    title:string;
    content:string;
    cancelCaption?: string;
    okCaption?: string;
   
}

class Confirm extends React.Component<ConfirmProps> {

    public static defaultProps = {
        cancelCaption : "cancel",
        okCaption: "ok"
    }

    attachText(){
        return 'some other text';
    }

    public render() {
    //    const  props = {
    //         title: "React and TypeScript",
    //         otherText: this.attachText()
    //        };

        return (
            <div className="confirm-wrapper confirm-visible">
                <div className="confirm-container">
                    <div className="confirm-title-container">
                        <span>{this.props.title}</span>
                        <span>{this.props.content}</span>
                    </div>
                    <div className="confirm-content-container">
                        <p>This is where our content should go</p>
                    </div>
                    <div className="confirm-buttons-container">
                        <button className="confirm-cancel">{this.props.cancelCaption}</button>
                        <button className="confirm-ok">{this.props.okCaption}</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Confirm;