import React from 'react'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (props.store.getState().notification.show) {
    return (
      <div style={style}>
        {props.store.getState().notification.message}
      </div>
    )
  }
  return <></>
}

export default Notification
