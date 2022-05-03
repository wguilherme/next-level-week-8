import { ArrowLeft } from 'phosphor-react';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';
import { FeedbackType, feedbackTypes } from './../';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested
}: FeedbackContentStepProps) {

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>

        <button
          type="button"
          className="
          top-5 left-5 absolute
          text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />

        </button>

        <span className="text-xl leading-6">
          <img
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">

        <form className="my-4 w-full">

          <textarea
            className="
            min-w-[304px] w-full min-h-[112px]
            text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600
            bg-transparent rounded-md focus:border-brand-500 
            focus:ring-brand-500 focus:ring-1 focus:outline-none
            scrollbar scrollbar-thumb-zinc-700
            scrollbar-track-transparent
            scrollbar-thin
            resize-none"
            placeholder="Conte com detalhes o que está acontecendo"
          />

          <footer className='flex gap-2 mt-2'>


            <ScreenshotButton />

            <button
              type="submit"
              className="p-2 bg-brand-500 rounded-md border-transparent
            flex-1 flex justify-center items-center
            text-sm
            hover:bg-brand-300
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-offset-zinc-900 focus:ring-brand-500
            transition-colors
            ">
              Enviar feedback

            </button>
          </footer>


        </form>

      </div>
    </>
  )
}