import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTable } from '@/components/ui/data-table'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ApplicationData from './data/application.json'
import { Badge } from '@/components/ui/badge'

const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
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
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Full Name
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "score",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Score
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">
      <div className='flex items-center gap-2'>
        <img width='18' height='18' src={row.getValue("score") > 0 ? '/assets/imgs/svg/star-fill.svg' : '/assets/imgs/svg/star-outline.svg'} alt='' />
        <span>{row.getValue("score")}</span>
      </div>
    </div>,
  },
  {
    accessorKey: "hiring_stage",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Hiring stage
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <Badge variant="outline">{row.getValue("hiring_stage")}</Badge>,
  },
  {
    accessorKey: "application_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Applied Date
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("application_date")}</div>,
  },
  {
    accessorKey: "job_role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Job Role
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("job_role")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <>
          <Button size="lg" variant="outline" className="text-primary bg-grayE9 shadow-md hover:bg-grayE9 hover:text-primary hover:opacity-85">See Application</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )
    },
  },
]
const JobScreen = () => {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    setJobList(ApplicationData)
  }, [])
  return (
    <div className='px-4'>
      <div className='flex items-center w-1/2 gap-5 mb-6'>
        <h3 className='font-bold w-1/2'>Total Applicants: {jobList?.length}</h3>
        <div className='flex-1'>
          <Input placeholder="Search Applicants" />
        </div>
      </div>
      <DataTable data={jobList} columns={columns} />
    </div>
  )
}

export default JobScreen