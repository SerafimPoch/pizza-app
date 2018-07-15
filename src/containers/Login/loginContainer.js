import { loginUser } from "../../store/actions/loginUser";

export const mapStateToProps = state => {
  return {
    login: state.loginUser
  };
};

export const mapDispatchToProps = {
  loginUser
};
