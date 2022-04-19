export type ParseResponsetype = (response: Response) => {
  statusCode: number;
  data: any;
};

export type ResponseType<ApiResponseType> =
  | {
      statusCode: number;
      data: ApiResponseType;
    }
  | undefined;
