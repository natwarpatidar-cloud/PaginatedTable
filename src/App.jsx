import CustomizedTables from './components/table/Table';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <div className="border-none p-5">
            <CustomizedTables />
        </div>
    </QueryClientProvider>
  )
}

export default App
