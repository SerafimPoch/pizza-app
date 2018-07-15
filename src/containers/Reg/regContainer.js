import { fetchStore } from "../../store/actions/fetchStore";
import { createUser } from "../../store/actions/createUser";

export const mapStateToProps = state => {
  return {
    list: state.storeList,
    create: state.userCreate
  };
};

export const mapDispatchToProps = {
  fetchStore,
  createUser
};
