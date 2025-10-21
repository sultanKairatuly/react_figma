import { AppSidebar } from './components/AppSidebar'
import { SidebarProvider } from './components/ui/sidebar'

import AppDashboard from './components/AppDashboard'

function App() {
  return (
    <>
      <SidebarProvider >
        <AppSidebar  />
        <AppDashboard />
      </SidebarProvider>
    </>
  )
}

export default App
