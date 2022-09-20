import { CreateRequest, CreateResponse } from "../../../../server/src/apitypes/boards";

export const create = (request: CreateRequest): Promise<CreateResponse> => {
  return fetch('http://localhost:3000/boards', {
    method: 'POST',
    headers: {
        'Content-TYpe': 'application/json',
    },
    body: JSON.stringify(request),
  }).then((response) => response.json());
}