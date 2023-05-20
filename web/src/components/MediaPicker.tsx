'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  function onMediaSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target
    if (!files) return

    const preview = URL.createObjectURL(files[0])

    setPreview(preview)
  }
  return (
    <>
      <input
        onChange={onMediaSelected}
        type="file"
        id="media"
        name="coverUrl"
        accept="image/*"
        className="invisible h-0 w-0"
      />
      {preview && (
        /* eslint-disable @next/next/no-img-element */
        <img
          src={preview}
          alt="preview"
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
