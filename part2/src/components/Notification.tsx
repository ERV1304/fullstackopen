const Notification = ({ message, show, type }: {message: string, show: boolean, type: string}) => {
  console.log('Notification message:', message)
  if (message === null) {
    return null
  }

  const className = show ? `notification ${type}` : `notification ${type} hidden`

  return (
    <div className={className}>
      {message}
    </div>
  )
}

export default Notification
