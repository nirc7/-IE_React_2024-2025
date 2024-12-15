import { useParams } from 'react-router-dom';

export default function MenuComp(props) {
    const params = useParams();

  return (
    <div>
      <h3>Menu Page</h3>
      user id = {params.userId}
    </div>
  )
}
