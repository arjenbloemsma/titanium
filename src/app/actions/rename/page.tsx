'use client'

import { retrieveName } from '../../server'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form'
import React from 'react'
import { renameFormSchema } from './types'

export default function Rename() {
   const form = useForm<z.infer<typeof renameFormSchema>>({
      resolver: zodResolver(renameFormSchema),
   })

   const onSubmit = async (data: z.infer<typeof renameFormSchema>) => {
      const name = await retrieveName(data)
      setName(name)
      console.log('name', name)
   }

   const [name, setName] = React.useState('')

   return (
      <>
         <h1>Rename</h1>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
               <FormField
                  control={form.control}
                  name="alias"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Alias</FormLabel>
                        <FormControl>
                           <Input placeholder="Site alias" {...field} />
                        </FormControl>
                        <FormDescription>
                           This is the site identifier that will be used in the URL
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                 )}
               />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem>
                       <FormLabel>Name</FormLabel>
                        <FormControl>
                           <Input placeholder="Site name" {...field} value={name} />
                        </FormControl>
                        <FormDescription>
                           This is the name of the site
                        </FormDescription>
                        <FormMessage />
                     </FormItem>

                 )}
               />
               <Button type="submit">Submit</Button>
            </form>
         </Form>
      </>
   )
}
