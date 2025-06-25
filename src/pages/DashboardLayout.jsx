import { NavLink, Outlet, useNavigate } from "react-router";
import { FaLeaf, FaRegLightbulb, FaListAlt } from "react-icons/fa"; // ✅ আইকন ইমপোর্ট

const events = [
  {
    id: 1,
    title: "Plant Care Workshop",
    description: "Learn expert techniques for better plant growth.",
    image:
      "https://i.postimg.cc/zB8qKVPd/gardening-equipment-with-peat-pots-plant-gardening-gloves-wooden-table.jpg",
  },
  {
    id: 2,
    title: "Green Thumb Meetup",
    description: "Meet fellow gardeners and exchange tips & seeds.",
    image:
      "https://i.postimg.cc/1zZS18P9/gardening-tools-rope-watering-can-gloves-concrete-backdrop-against-wooden-wall.jpg",
  },
  {
    id: 3,
    title: "Botanical Garden Tour",
    description: "Explore rare plants and take guided nature walks.",
    image: "https://i.postimg.cc/fTw0Dbzf/plants-pot-with-watering-can.jpg",
  },
];

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleEventClick = (id) => {
    navigate(`/dashboard/event/${id}`);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-green-100 p-6 space-y-6">
        <h2 className="text-xl font-bold border-b border-green-300 pb-2">
          Dashboard
        </h2>
        <nav className="flex flex-col space-y-3 mt-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-green-700 font-semibold" : "text-gray-700"
              }`
            }
          >
            <FaLeaf />
            Home
          </NavLink>
          <NavLink
            to="/dashboard/share-tip"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-green-700 font-semibold" : "text-gray-700"
              }`
            }
          >
            <FaRegLightbulb />
            Share Tips
          </NavLink>
          <NavLink
            to="/dashboard/my-tips"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-green-700 font-semibold" : "text-gray-700"
              }`
            }
          >
            <FaListAlt />
            My Tips
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => handleEventClick(event.id)}
              className="cursor-pointer border rounded-lg shadow hover:shadow-lg transition p-4 bg-green-50"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
