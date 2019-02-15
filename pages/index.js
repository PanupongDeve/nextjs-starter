import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "../assests/scss/styles.scss";
import { getTodoName } from "../redux/actions/TODO";
import { Router } from './routes'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }

  componentWillMount() {
    const { todo } = this.props;
    this.setState({ todo });
    this.props.getTodoName();
  }

  componentWillReceiveProps(nextProps) {
    const { todo } = nextProps;
    this.setState({ todo });
  }

  handleClick () {
    // With route URL
    Router.pushRoute('/about/2')
  }

  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        <div className="example">{this.state.todo}</div>
        <button onClick={this.handleClick}>About</button>
      </React.Fragment>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.TODO.todo
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getTodoName
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
