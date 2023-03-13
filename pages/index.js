import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

const Home = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Featured Events</h1>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default Home;
