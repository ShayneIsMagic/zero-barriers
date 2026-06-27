'use client'

import { useId, useState } from 'react'

export type FaqItem = {
  question: string
  answer: string
}

type FaqAccordionProps = {
  items: FaqItem[]
  /** Show the first answer expanded on load */
  defaultOpenIndex?: number
}

export function FaqAccordion({ items, defaultOpenIndex = 0 }: FaqAccordionProps) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const panelId = `${baseId}-panel-${index}`
        const isOpen = openIndex === index

        return (
          <div key={item.question} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
            <h3 className="faq-question__heading">
              <button
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <i className="fas fa-chevron-down faq-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} className="faq-answer" hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
