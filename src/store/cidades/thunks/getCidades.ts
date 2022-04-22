import { Dispatch } from "redux";
import Api from "../../../api/api";
import { CidadeResponseType } from "../../../api/api.types";
import { ResponseType } from "../../../api/treatResponse.types";
import { appActions } from "../../app/app.actions";
import { ThunkStatefulAction } from "../../store";
import cidadesSlice from "../cidadesSlice";

const getCidades =
  (geocode: number): ThunkStatefulAction =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(appActions.isLoading(true));

      const result: ResponseType<CidadeResponseType[]> =
        await Api.fetchCidadesEstado(geocode);

      const cidades = result?.data.map((cidade) => {
        return {
          label: cidade.nome,
          geocode: Number(cidade.id),
        };
      });

      if (result) {
        dispatch(cidadesSlice.actions.setCidades(cidades));
      }

      dispatch(appActions.isLoading(false));
    } catch (error) {
      console.error(error);
    }
  };

export default getCidades;
