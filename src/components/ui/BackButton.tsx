'use client'
import React, { ButtonHTMLAttributes } from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation'

type props = {
    title : string , 
    className?:string,
    variant?:'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | null | undefined
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function BackButton({title,variant,className,...props}:props) {
    const router = useRouter()
  return (
    <Button 
    variant={variant}
    onClick={() => router.back()}
    className={className}
    {...props}
    title={title}
    > {title}</Button>
  )
}

