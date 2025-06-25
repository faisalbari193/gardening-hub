import { useParams } from "react-router";

const eventData = {
  1: {
    title: "Plant Care Workshop",
    details:
      "This workshop focuses on soil, sunlight, and watering best practices to help your plants thrive. Join our live session with experts.",
  },
  2: {
    title: "Green Thumb Meetup",
    details:
      "An informal meetup for plant lovers to share tips, trade seeds, and build community bonds through gardening activities.",
  },
  3: {
    title: "Botanical Garden Tour",
    details:
      "Take a scenic guided tour through one of the most beautiful botanical gardens, featuring rare and exotic plants.",
  },
};

const EventDetails = () => {
  const { id } = useParams();
  const event = eventData[id];

  if (!event) {
    return <p className="text-red-500">Event not found.</p>;
  }

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
      <p className="text-gray-700 text-lg">{event.details}</p>
    </div>
  );
};

export default EventDetails;
