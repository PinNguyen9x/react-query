// src/pages/tnx-details.tsx
import { useTnxDetails } from '@/hooks'
import { useSearchParams } from 'react-router-dom'

const TnxDetails = () => {
  const [searchParams] = useSearchParams()
  console.log('searchParams', searchParams)
  const tnxId = searchParams.get('id')

  const { data: transaction, isLoading, error } = useTnxDetails(tnxId!)

  if (!tnxId) {
    return <div>Transaction ID is required</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>
  }

  if (!transaction) {
    return <div>Transaction not found</div>
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction Details</h1>
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Transaction ID:</label>
            <p>{transaction.id}</p>
          </div>
          <div>
            <label className="font-semibold">Date:</label>
            <p>{new Date(transaction.date).toLocaleString()}</p>
          </div>
          <div>
            <label className="font-semibold">Amount:</label>
            <p>{transaction.amount}</p>
          </div>
          <div>
            <label className="font-semibold">Status:</label>
            <p className={`capitalize ${getStatusColor(transaction.status)}`}>{transaction.status}</p>
          </div>
          <div>
            <label className="font-semibold">Sender:</label>
            <p>{transaction.sender}</p>
          </div>
          <div>
            <label className="font-semibold">Receiver:</label>
            <p>{transaction.receiver}</p>
          </div>
          <div className="col-span-2">
            <label className="font-semibold">Description:</label>
            <p>{transaction.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to get status color
const getStatusColor = (status: string): string => {
  const colors = {
    processing: 'text-blue-600',
    completed: 'text-green-600',
    failed: 'text-red-600',
    cancelled: 'text-gray-600',
    pending: 'text-yellow-600',
  }
  return colors[status as keyof typeof colors] || 'text-gray-600'
}

export default TnxDetails
