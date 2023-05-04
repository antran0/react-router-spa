import { useNavigate, useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("..");
  };

  return (
    <>
      <h1>Event Detail Page</h1>
      <p>{params.eventId}</p>
      <p>
        <button type="button" onClick={clickHandler}>
          Back
        </button>
      </p>
    </>
  );
};

export default EventDetailPage;
