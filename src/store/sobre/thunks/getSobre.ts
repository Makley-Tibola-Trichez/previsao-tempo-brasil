import { Dispatch } from "redux";
import Api from "../../../api/api";
import { appActions } from "../../app/app.actions";
import { ThunkStatefulAction } from "../../store";
import sobreSlice from "../sobreSlice";

export const getSobre =
  (): ThunkStatefulAction => async (dispatch: Dispatch) => {
    try {
      const result: any = await Api.fetchGithubProfile();

      dispatch(appActions.isLoading(true));

      dispatch(sobreSlice.actions.setSobre(result.data));

      dispatch(appActions.isLoading(false));
      return result;
    } catch (error) {
      console.error(error);
    }
  };
