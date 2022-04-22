import { Dispatch } from "redux";
import Api from "../../../api/api";
import { PrevisaoTempoResponseType } from "../../../api/api.types";
import { ResponseType } from "../../../api/treatResponse.types";
import { appActions } from "../../app/app.actions";
import { ThunkStatefulAction } from "../../store";
import previsaoTempoSlice from "../previsaoTempoSlice";

const getPrevisaoTempo =
  (geocode: number): ThunkStatefulAction =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(appActions.isLoading(true));

      const result: ResponseType<PrevisaoTempoResponseType[]> =
        await Api.fetchPrevisaoTempo(geocode);

      dispatch(previsaoTempoSlice.actions.setPrevisaoTempo(result));

      dispatch(appActions.isLoading(false));
    } catch (error) {
      console.error(error);
    }
  };

export default getPrevisaoTempo;
