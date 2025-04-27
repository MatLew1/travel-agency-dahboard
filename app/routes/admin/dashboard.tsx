import { Header, StatsCard, TripCard } from "components"
import { dashboardStats, user, allTrips } from "~/constants";
const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole} = dashboardStats;

const Dashboard = () => {
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Witaj ${user?.name ?? 'Gościu'}`}
        description="Śledź aktywność, trendy i popularne miejsca docelowe w czasie rzeczywistym"
      />

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

        <StatsCard
          headerTitle="Wszyscy Urzytkownicy"
          total={totalUsers}
          currentMonthCount={usersJoined.currentMonth}
          lastMonthCount={dashboardStats.usersJoined.lastMonth}
        />
        <StatsCard
          headerTitle="Wszystkie Wydarzenia"
          total={totalTrips}
          currentMonthCount={tripsCreated.currentMonth}
          lastMonthCount={tripsCreated.lastMonth}
        />
        <StatsCard
          headerTitle="Aktywni Urzytkownicy"
          total={userRole.total}
          currentMonthCount={userRole.currentMonth}
          lastMonthCount={userRole.lastMonth}
        />

        </div>
      </section>
      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100">
          Najnowsze Wydarzenia
        </h1>

        <div className="trip-grid">
          {allTrips.slice(0, 4).map(({ id, name, imageUrls, itinerary, tags, estimatedPrice }) => (
            <TripCard
              key={id}
              id={id.toString()}
              name={name}
              imageUrl={imageUrls[0]}
              location={itinerary?.[0]?.location ?? ''}
              tags={tags}
              price={estimatedPrice}
            />
          ))}
        </div>
      </section>
      
    </main>
  )
}

export default Dashboard