import React from 'react'
import { File, HomeIcon, UserRound ,LogOut} from 'lucide-react'
import NavButton from './NavButton'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'

export default function Header() {
  return (
    <header className='animate-slide  h-12 p-2 border-b sticky top-0 z-20'>

        <div className='flex h-8 items-center justify-between w-full'>
            <div className='flex items-center gap-2'>
                <NavButton href='/home' label='Home' Icon={HomeIcon}/>

                <Link href='/home' className='flex justify-center gap-2 ml-0 items-center ' title='Home'>
                <h1 className='hidden sm:block text-xl font-bold m-0 mt-1'> Computer Repair Shop</h1>
                </Link>

            </div>
            
            <div className='flex items-center '>
            <NavButton href='/tickets' label='tickets' Icon={File}/>
            <NavButton href='/customers' label='Customers' Icon={UserRound}/>
            <ModeToggle/>
            <Button
            variant={"ghost"}
            size={"icon"}
            aria-label='Logout'
            title='Logout'
            className='rounded-full'

            >
              <LogoutLink>
                <LogOut size={18} />
              </LogoutLink>

            </Button>
            </div>
        </div>


    </header>
  )
}
