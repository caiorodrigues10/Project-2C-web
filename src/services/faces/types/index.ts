import { AppResponse } from "@/services/AppResponse";

interface IRegisterFace {
  cpf: string;
  name: string;
  image: string;
}

interface IRegisterFaceQDrant {
  collection: string;
  faceId: number;
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
interface ICreateOneToN {
  image: string;
  collection?: string;
  threshold: number;
}

interface IFacesOneToN {
  id: number;
  image: string;
  similarity: number;
  name: string;
  doc: string;
}

interface ICreateOneToNResponse extends AppResponse {
  data?: {
    faces: IFacesOneToN[];
    count: number;
  };
}

interface IRegisterFaceResponse extends AppResponse {
  data?: {
    id: number;
    template: string;
    imageCrop: string;
  };
}

interface IFacesTransaction {
  id: number;
  createdAt: Date;
  action: string;
  image: string;
  facesFound: number;
}

interface IListFacesTransactionsResponse {
  count: number;
  list: IFacesTransaction[];
}

interface IFacesFound {
  id: number;
  image: string;
  createdAt: Date;
  similarity: number;
  cpf: string;
  name: string;
}

interface IFacesTransactionById extends AppResponse {
  data?: {
    transactionImage: string;
    similarities: IFacesFound[];
    threshold: number;
  };
}

export type {
  IRegisterFace,
  IListFacesResponse,
  IFaces,
  IOneToOne,
  IOneToOneResponse,
  ICreateOneToOne,
  ICreateOneToN,
  IFacesOneToN,
  ICreateOneToNResponse,
  IRegisterFaceQDrant,
  IRegisterFaceResponse,
  IFacesTransaction,
  IListFacesTransactionsResponse,
  IFacesFound,
  IFacesTransactionById,
};
