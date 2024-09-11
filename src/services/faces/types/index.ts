import { AppResponse } from "@/services/AppResponse";

interface IRegisterFace {
  cpf: string;
  name: string;
  image: string;
}

interface IFaces {
  id: number;
  cpf: string;
  name: string;
  created_at: string;
  image: string;
}

interface IListFacesResponse extends AppResponse {
  count: number;
  list: IFaces[];
}

interface IOneToOne {
  faceId: number;
  otherFace: string;
}

interface ICreateOneToOne {
  face: string;
  similarity: number;
}

interface IOneToOneResponse extends AppResponse {
  data?: ICreateOneToOne;
}

export type {
  IRegisterFace,
  IListFacesResponse,
  IFaces,
  IOneToOne,
  IOneToOneResponse,
  ICreateOneToOne,
};
