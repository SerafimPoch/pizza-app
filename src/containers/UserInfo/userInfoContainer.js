import { userInf } from "../../store/actions/userInfo";
import { cleanLogin } from "../../store/actions/loginUser";

export const mapStateToProps = state => {
  return {
    user: state.userInfo,
    ticket: state.ticket
  };
};

export const mapDispatchToProps = {
  userInf,
  cleanLogin
};
