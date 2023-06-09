'use server'

import * as z from 'zod'
import { renameFormSchema } from './actions/rename/types'

const mockedSiteData = [
   {
      name: 'Ninja',
      alias: 'inst-1234',
   },
   {
      name: 'Samurai',
      alias: 'inst-5678',
   },
   {
      name: 'Ronin',
      alias: 'inst-9012',
   },
]

export const retrieveName = async (data: z.infer<typeof renameFormSchema>) => {
   const alias = data.alias
   const result = mockedSiteData.find(item => item.alias === alias)
   console.log(result)
   return result?.name
}
