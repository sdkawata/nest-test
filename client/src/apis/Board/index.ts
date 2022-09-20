import { IndexResponse } from '../../../../server/src/apitypes/boards'

export const fetchIndex = (): Promise<IndexResponse> => {
  return fetch('http://localhost:3000/boards').then((response) => response.json())
}