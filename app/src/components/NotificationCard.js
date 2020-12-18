import Toast from "react-bootstrap/Toast";
import "./NotificationCard.css";

function NotificationCard({ id, title, description, severity }) {
  return (
    <Toast className={`notification-card severity-${severity}`}>
      <Toast.Header>
        <strong className="mr-auto"></strong>
      </Toast.Header>
      <Toast.Body className="text-left">
        <strong className="title">{title}</strong>
        <div className="desc">{description}</div>
      </Toast.Body>
    </Toast>
  );
}

export default NotificationCard;
