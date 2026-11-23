import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  idPrefix?: string;
}

export function FaqAccordion({ items, idPrefix = 'faq' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#17324D]/10 border-y border-[#17324D]/10">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `${idPrefix}-panel-${idx}`;
        const buttonId = `${idPrefix}-button-${idx}`;

        return (
          <div key={item.question} className="py-1">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex min-h-[52px] w-full items-center justify-between gap-6 py-4 text-left font-display text-base font-semibold text-[#17324D] transition-colors hover:text-[#0877C9] sm:text-lg"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#0877C9] transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-8 text-[15px] leading-relaxed text-[#17324D]/75">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
