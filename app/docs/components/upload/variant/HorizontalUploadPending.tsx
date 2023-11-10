'use client'
import { useState } from 'react'
import { Upload } from '~/src'

const HorizontalUploadPending = () => {
  const [fileName, setFileName] = useState('')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      setFileName(file.name)
    }
  }
  return (
    <Upload
      onFileChange={handleFileChange}
      file={fileName}
      horizontal={true}
      showProgressBar={true}
      progressType="pending"
      progress={45}
      uploadTime="1 minutes left"
      id="horizontal_upload_pending"
    />
  )
}

const HorizontalUploadPendingCode = `
"use client";
import { useState } from "react";
import { Upload } from "keep-react";

export const UploadComponent = () => {
  const [fileName, setFileName] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <Upload
      onFileChange={handleFileChange}
      file={fileName}
      horizontal={true}
      showProgressBar={true}
      progressType="pending"
      progress={45}
      uploadTime="1 minutes left"
      id="upload"
    />
  );
}
`

export { HorizontalUploadPending, HorizontalUploadPendingCode }
