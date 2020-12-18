import NotificationCard from "./NotificationCard";
import "./NotificationList.css";

function NotificationList({ notifications }) {
  const cards = notifications.map((notification) => (
    <NotificationCard {...notification}></NotificationCard>
  ));

  return <div className="notification-list">{cards}</div>;
}

export default NotificationList;
