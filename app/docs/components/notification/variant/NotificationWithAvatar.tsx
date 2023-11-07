'use client'
import { useState } from 'react'
import { Notification, Button, Avatar } from '~/src'

const NotificationWithAvatar = () => {
  const [showNotification, setShowNotification] = useState(false)
  const onDismiss = () => {
    setShowNotification(!showNotification)
  }

  const handleShowNotification = () => {
    setShowNotification(!showNotification)
  }

  return (
    <div className="px-2 py-3">
      <Button type="primary" onClick={handleShowNotification}>
        Show Notification
      </Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        className="max-w-[400px]"
        position="top-left"
        additionalContent={
          <div className="mt-2.5 text-sm font-normal text-slate-500 md:text-base">
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" type="primary" color="info">
                Accept
              </Button>
              <Button size="xs" type="outlineGray" color="info" customClass="ml-3">
                View Profile
              </Button>
            </div>
          </div>
        }
        infoIcon={
          <div className="h-12 w-12">
            <Avatar shape="circle" size="md" img="/images/avatar/avatar-4.png" />
          </div>
        }>
        <h3 className="text-base font-medium text-slate-700 md:text-xl">
          Rono Pixel
          <span className="pl-2 text-xs font-medium text-slate-400 md:text-sm">Product Designer</span>
        </h3>
      </Notification>
    </div>
  )
}

const NotificationWithAvatarCode = `
"use client";
import { useState } from "react";
import { Notification, Button, Avatar } from "keep-react";

export const NotificationComponent = () => {

  const [showNotification, setShowNotification] = useState(false);
  const onDismiss = () => {
    setShowNotification(!showNotification);
  };

  const handleShowNotification = () => {
    setShowNotification(!showNotification);
  };

  return (
    <>
      <Button type="primary" onClick={handleShowNotification}>Show Notification</Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        className="max-w-[400px]"
        position="top-left"
        additionalContent={
          <div className="mt-2.5 text-sm md:text-base font-normal text-slate-500">
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" type="primary" color="info">
                Accept
              </Button>
              <Button
                size="xs"
                type="outlineGray"
                color="info"
                customClass="ml-3"
              >
                View Profile
              </Button>
            </div>
          </div>
        }
        infoIcon={
          <div className="h-12 w-12">
            <Avatar
              shape="circle"
              size="md"
              img="/images/avatar/avatar-4.png"
            />
          </div>
        }
      >
        <h3 className="text-base md:text-xl font-medium text-slate-700">
          Rono Pixel
          <span className="pl-2 text-xs md:text-sm font-medium text-slate-400">
            Product Designer
          </span>
        </h3>
      </Notification>
    </>
  );
};
`

export { NotificationWithAvatar, NotificationWithAvatarCode }
