import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "../assests/scss/styles.scss";
import { getTodoName } from "../redux/actions/TODO";

class About extends React.Component {
    static async getInitialProps ({ query}) {
        return {
            params: query
        }
    }
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

  render() {
    console.log("props", this.props);
    return <div className="example">{this.state.todo}</div>;
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
)(About);
