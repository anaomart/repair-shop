import { LucideIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


type Props = {
    Icon: LucideIcon
    label:string,
    href?:string
}


export default function NavButton({Icon,label,href}: Props) {

  return (
    <Button
    variant={"ghost"}
    size={"icon"}
    aria-label={label}
    className='rounded-full'
    asChild
    >
        {href ?(
            <Link href={href}>
                <Icon   />
            </Link>
        ) :<Icon/>} 
    </Button>
  )
}
