import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from '@/components/ui/checkbox'

const FilterSection = ({selectionFilter, className}) => {
  return (
    <div className={className}>
      {selectionFilter?.map((filter, index) => (
        <Accordion type="single" collapsible key={index} defaultValue={filter?.title}>
            <AccordionItem value={filter?.title}>
                <AccordionTrigger className='text-[16px] items-center'>{filter?.title}</AccordionTrigger>
                {filter?.options?.map((option, optIndex) => (
                    <AccordionContent key={optIndex} className='flex items-center gap-2'>
                        <Checkbox id={`optFilter-${index}-${optIndex}`} /> 
                        <label htmlFor={`optFilter-${index}-${optIndex}`} className='text-txtHeader'>{option?.label} ({option?.count})</label>
                    </AccordionContent>
                ))}
            </AccordionItem>
        </Accordion>
    ))}
    </div>
  )
}
FilterSection.propTypes = {
  selectionFilter: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default FilterSection