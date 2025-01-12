'use client'
import React, { useEffect } from 'react'
import * as Sentry from '@sentry/nextjs';
export default function Error({error,rest}:{
    error:Error & {digest?:string},
    rest:()=> void
}) {

    useEffect(() => {
        Sentry.captureException(error);
      }, [error]);

  return (

    <html lang="en">
            <body>
                <h2>Something went wrong Error</h2>
                <button onClick={()=>rest()}>Try again</button>
            </body>
    </html>
  )
}
