const Notification = ({ message, classNameMessage }) => {
  console.log('Notification message:', message)
  if (message === null) {
    return null
  }

  return (
    <div className={classNameMessage}>
      {message}
    </div>
  )
}

export default Notification
