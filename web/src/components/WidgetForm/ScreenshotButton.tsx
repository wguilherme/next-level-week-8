import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from 'react';
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook
}: ScreenshotButtonProps) {

  const [isTakingScreenShot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenShot() {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTook(base64image)
    setIsTakingScreenshot(false)
  }


  if (screenshot) {
    return (
      <button
        onClick={() => onScreenshotTook(null)}
        className="
      text-zinc-400
      hover:text-zinc-100
      transition-colors
      p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end"

        style={{
          backgroundImage: `url(${screenshot})`,
          // for preview
          backgroundPosition: 'right bottom',
          backgroundSize: 188

        }}
        type="button">

        <Trash weight="fill" className="" />

      </button>
    )
  }

  return (
    <button
      type='button'
      onClick={handleTakeScreenShot}
      className="
  p-2 bg-zinc-800 rounded-md border-transparent
  hover:bg-zinc-700 transition-colors
  focus:outline-none focus:ring-2 focus:ring-offset-2
  focus:ring-offset-zinc-900 focus:ring-brand-500
  "
    >
      {isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100" />}


    </button>
  )
}