'use client'

import { ArrowUpDown } from 'lucide-react'
import { ColumnDef } from '@tanstack/react-table'
import { ProvisioningRow } from './types'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

export const columns: ColumnDef<ProvisioningRow>[] = [
   {
      id: "select",
      header: ({ table }) => (
         <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
         />
      ),
      cell: ({ row }) => (
         <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
         />
      ),
      enableSorting: false,
      enableHiding: false,
   },
   {
      accessorKey: 'Requested',
      header: ({ column }) => {
         return (
            <Button
               variant='ghost'
               onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
               Requested
               <ArrowUpDown className='ml-2 h-4 w-4' />
            </Button>
         )
      },
      cell: ({ row }) => {
         const rawValue = row.getValue('Requested')
         if (!rawValue || typeof rawValue !== 'string') {
            return 'N/A'
         }
         const requestDate = Date.parse(rawValue)

         return new Date(requestDate).toLocaleString()
      }
   },
   {
      accessorKey: 'SiteAlias',
      header: 'Site Alias',
   },
   {
      accessorKey: 'SiteTitle',
      header: 'Site Title',
   },
   {
      accessorKey: 'PartitionKey',
      header: 'Type',
   },
   {
      accessorKey: 'SiteCreated',
      header: 'Created',
   },
]


