import { Dispatch } from "redux";
import Api from "../../../api/api";
import { appActions } from "../../app/app.actions";
import { ThunkStatefulAction } from "../../store";
import cidadesSlice from "../cidadesEstadosSlice";

const getCidades =
  (geocode: number): ThunkStatefulAction =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(appActions.isLoading(true));

      const result: any = await Api.fetchCidadesEstado(geocode);

      dispatch(cidadesSlice.actions.setCidades(result.data));

      dispatch(appActions.isLoading(false));
      return result;
    } catch (error) {
      console.error(error);
    }
  };

export default getCidades;
