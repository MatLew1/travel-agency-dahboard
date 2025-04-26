import { Header } from "components"

const Dashboard = () => {
  const user = { name: 'Mateusz' }

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Witaj ${user?.name ?? 'Gościu'}`}
        description="Śledź aktywność, trendy i popularne miejsca docelowe w czasie rzeczywistym"
      />

      Strona Główna
    </main>
  )
}

export default Dashboard