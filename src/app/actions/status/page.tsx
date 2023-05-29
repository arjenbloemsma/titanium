import { columns } from './columns'
import fs from 'fs'
import { ProvisioningRow } from './types'
import {
   DataTable,
} from "@/components/ui/data-table"
import { Suspense } from 'react'

const getData = async () => {
   const data = fs.readFileSync('src/data/provisioning-storage-table.json', 'utf8')
   const provisioningData: ProvisioningRow[] = JSON.parse(data)
   console.log(provisioningData)
   await new Promise(resolve => setTimeout(resolve, 1700))
   if (provisioningData) {
      return provisioningData
   }
   return []
}

export default async function Status() {

   const provisioningData = await getData()
   console.log(provisioningData)

   return (
      <div className='container mx-auto py-10'>
         <Suspense fallback={<div>Loading...</div>}>
            <DataTable columns={columns} data={provisioningData} />
         </Suspense>
      </div>
   )
}

