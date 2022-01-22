import {useState, useRef, SetStateAction, FormEventHandler} from 'react'
import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import SuccessMessage from 'components/SuccessMessage'
import ErrorMessage from 'components/ErrorMessage'
import LoadingSpinner from 'components/LoadingSpinner'
import { RoughNotation } from 'react-rough-notation'

export default function Subscribe() {
  const [form, setForm] = useState<{ state?: string; message?:string; }>({state: ''})
  const inputEl = useRef<HTMLInputElement>(null);
  const { data } = useSWR('/api/subscribers', fetcher)
  const subscriberCount = Number(data?.count)

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setForm({ state: 'loading' })

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current?.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setForm({
        state: 'error',
        message: error,
      })
      return
    }

    inputEl.current!.value = ''
    setForm({
      state: 'success',
      message: `Yay! Thanks for subscribing.`,
    })
  }

  return (
    <div className="py-6 prose dark:prose-dark max-w-full">
      <div className=" border border-primary-200 rounded-lg p-5 bg-primary-100 dark:bg-primary-900">
        <h2 className="text-center">
          <RoughNotation
            animationDelay={3000}
            animationDuration={4000}
            type="underline"
            color="#0ea4e9"
            strokeWidth={3}
            show={true}
          >
            Subscribe to MetaView
          </RoughNotation>
        </h2>
        <p>An irregular digest about experiments with 2-3 interwebz bookmarks.</p>
        <form className="relative my-4" onSubmit={subscribe}>
          <input
            ref={inputEl}
            aria-label="Newsletter email subscription"
            placeholder="you.are@awesome.com"
            type="email"
            autoComplete="email"
            required
            className="dark:text-gray-600 text-gray-600 px-4 py-2 mt-1 text-lg border-none block w-full rounded-md "
          />
          <button
            className="flex items-center justify-center absolute right-2 top-1 px-6 font-bold h-9 bg-primary-500 hover:bg-primary-900 text-gray-100 dark:text-gray-100 rounded-md w-28"
            type="submit"
          >
            {form.state === 'loading' ? <LoadingSpinner /> : 'Subscribe'}
          </button>
        </form>
        {form.state === 'error' ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === 'success' ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <p className="text-lg text-center font-sans text-gray-600 dark:text-gray-300">
            {`${subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'} subscribers`}

            {/* <a>2 issues</a> */}
          </p>
        )}
      </div>
    </div>
  )
}
