import EventItem from "./event-item";
import styles from "./event-list.module.scss";

const EventList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map(({ title, image, date, location, id }) => (
        <EventItem
          key={id}
          id={id}
          title={title}
          image={image}
          date={date}
          location={location}
        />
      ))}
    </ul>
  );
};

export default EventList;
