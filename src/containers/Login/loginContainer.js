import { signIn } from "../../store/actions/sign-in";

export const mapStateToProps = state => {
  return {
    login: state.loginUser
  };
};

export const mapDispatchToProps = {
  signIn
};
