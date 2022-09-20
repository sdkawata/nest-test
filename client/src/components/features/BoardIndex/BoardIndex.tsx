import { fetchIndex } from "../../../apis/Board"
import { useApi } from "../../../apis/useApi"

export const BoardIndex: React.FC = () => {
  const {data, loading} = useApi(fetchIndex);
  if (loading || ! data) {
    return <>loading</>
  }
  return <>{data.map((board) => <div key={board.id}>
    id:{board.id} name:{board.name}
  </div>)}</>
}