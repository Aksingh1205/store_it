import Sort from '@/components/Sort'
import { getFiles } from '@/lib/actions/file.actions'
import React from 'react'

const page = async({params} : SearchParamProps) => {
    const type = ((await params) ?.type as string) || ''

    const files = await getFiles()
  return (
    <div className='page-container'>
        <section className='w-full'>
            <h1 className='h1 capitalize'> 
                {type}
            </h1> 

            <div className='total-size-section'>
                <p className='body-1'>
                    Total: <span className='h5'>0 MB</span>
                </p>

                <div className='sort-container'>
                    <p className='body-1 hidden text-light-200 sm:block'>Sort by:</p>

                    <Sort/>
                </div>
            </div>  
        </section>

        {files.length > 0 ? (
            <section>

            </section>
        ) : <p className='empty-list'>No files uploaded</p>}
    </div>
  )
}

export default page