import { Dispatch } from "redux";
import Api from "../../../api/api";
import { EstadoResponseType } from "../../../api/api.types";
import { ResponseType } from "../../../api/treatResponse.types";
import { appActions } from "../../app/app.actions";
import { ThunkStatefulAction } from "../../store";
import cidadesSlice from "../cidadesEstadosSlice";

const getEstados = (): ThunkStatefulAction => async (dispatch: Dispatch) => {
  try {
    dispatch(appActions.isLoading(true));

    const result: ResponseType<EstadoResponseType[]> =
      await Api.fetchEstadosBrasil();

    if (result) {
      const _estados = result.data.map((estado) => ({
        id: estado.id,
        label: estado.nome,
      }));

      dispatch(cidadesSlice.actions.setEstados(_estados));

      dispatch(appActions.isLoading(false));
    }
  } catch (error) {
    console.error(error);
  }
};

export default getEstados;
