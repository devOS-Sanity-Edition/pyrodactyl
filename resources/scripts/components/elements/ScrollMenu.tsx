import * as React from 'react';

import { Checkbox } from '@/components/elements/CheckboxLabel';

import { cn } from '@/lib/utils';

interface Props {
    appVersion;
    baseUrl: string;
}

const ScrollMenu = React.forwardRef<
    React.ElementRef<'div'>,
    React.ComponentPropsWithoutRef<'div'> & { items: string[] }
>(({ className, items, ...props }, ref) => {
    const [checkedItems, setCheckedItems] = React.useState<string[]>([]);

    const handleCheckboxChange = (item: string) => {
        setCheckedItems((prev) => {
            const updatedItems = prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item];

            // Log the name of the item that was selected/deselected
            // console.log(`${item} is now ${updatedItems.includes(item) ? 'selected' : 'deselected'}`);
            // console.log(updatedItems);

            return updatedItems;
        });
    };

    return (
        <div ref={ref} className={cn('relative', className)} {...props}>
            <div className='overflow-y-auto max-h-48 scrollbar-thin scrollbar-thumb-[#FF343C] hover:scrollbar-thumb-[#F06F53] scrollbar-track-[#000000]'>
                <ul>
                    {items.map((item) => (
                        <li key={item}>
                            <Checkbox
                                label={item}
                                // checked={checkedItems.includes(item)}
                                onChange={() => handleCheckboxChange(item)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

ScrollMenu.displayName = 'ScrollMenu';

export { ScrollMenu };