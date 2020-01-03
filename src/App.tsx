import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Confirm from "./Confirm";

interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
  confirmVisible: boolean;
  countDown: number;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      confirmOpen: false,
      confirmMessage: "Please hit the confirm button",
      confirmVisible: true,
      countDown: 10
    };
  }
  private timer = 0;

  public componentDidMount() {
    this.timer = window.setInterval(() => this.handleTimerTick(), 2000);
  }

  private handleTimerTick() {
    this.setState({
      confirmMessage: `Please hit the confirm button ${this.state.countDown} secs to go`,
      countDown: this.state.countDown - 1
    });

    if (this.state.countDown <= 0) {
    }
      clearInterval(this.timer);
      this.setState({
      confirmMessage: "Too late to confirm!",
      confirmVisible: false
      });
  }

  private handleCancelConfirmClick = () => {
    this.setState({ confirmOpen: true, confirmMessage: "ok" });
    console.log("Cancel clicked");
  };
  private handleOkConfirmClick = () => {
    this.setState({ confirmOpen: false, confirmMessage: "nop" });
    console.log("Ok clicked");
  };

  public static getDerivedStateFromProps(props: {}, state: IState) {
    console.log("getDerivedStateFromProps", props, state);
    return null;
   }

   private renderCount = 0;

   public getSnapshotBeforeUpdate(prevProps: {}, prevState:
    IState) {
     this.renderCount += 1;
     console.log("getSnapshotBeforeUpdate", prevProps, prevState,
    {
     renderCount: this.renderCount
     });
     return this.renderCount;
    }
    public componentDidUpdate(prevProps: {}, prevState: IState,
    snapshot: number) {
     console.log("componentDidUpdate", prevProps, prevState,
     snapshot, {
     renderCount: this.renderCount
     });
    }
    
      
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> This is some fine text</h1>
          <img src={logo} className="App-logo" />
        </header>
        <p>{this.state.confirmMessage}</p>
        <button onClick={this.handleCancelConfirmClick}>Confirm</button>
        <Confirm
          open={this.state.confirmOpen}
          onCancelClick={this.handleCancelConfirmClick} //tak mozna zrobic output funckji z komponentu
          onOkClick={this.handleOkConfirmClick}
          title="React and TypeScript"
          content="Are you sure you want to learn React and"
        />
      </div>
    );
  }
}

export default App;
