'use client';
 import { ReactNode } from 'react';
import {NextIntlClientProvider} from 'next-intl';
interface NextIntlClientProviderProps {
    locale: any;
    timeZone: any;
    now: any;
    children: ReactNode; // Thêm thuộc tính 'children' ở đây
   rest: any;
} 
export default function MyCustomNextIntlClientProvider({
  locale,
  timeZone,
  now,
  ...props
} : NextIntlClientProviderProps ) {
  return (
    <NextIntlClientProvider
      // Define non-serializable props here
      defaultTranslationValues={{
        i: (text) => <i>{text}</i>
      }}
      // Make sure to forward these props to avoid markup mismatches
      locale={locale}
      timeZone={timeZone}
      now={now}
      {...props}
    />
  );
}