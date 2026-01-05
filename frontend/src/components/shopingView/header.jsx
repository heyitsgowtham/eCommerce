import { HousePlug } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Sheet, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'

function Shoppingheader (){
  return (
    <>
      <header className='sticky top-0 z-40 w-full border-b bg-background'>
        <div className='flex h-16 items-center justify-between px-4 md:px-6'>
          <Link className='flex items-center gap-2' to='/shop/home'>
          <HousePlug className='w-6 h-6'/>
          <span className='font-bold'>Ecommerce</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon' className='lg:hidden'>
                <span className='sr-only'>Toggle header menu</span>
              </Button>
            </SheetTrigger>
          </Sheet>
        </div>
      </header>
    </>
  )
}

export default Shoppingheader