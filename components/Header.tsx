import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='header'>
      Search
      <div className='header-wrapper'>
        FileUploader
        <form>
          <Button type='submit' className='sign-out-button'>
            <Image
                src="/assets/icons/logout.svg"
                alt="logo"
                width={24}
                height={24}
                className="w-6"
              />
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Header