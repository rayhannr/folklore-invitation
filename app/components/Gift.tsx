import Image from 'next/image'
import { Jura } from 'next/font/google'
import './Gift.css'
import classNames from 'classnames'
import { Button } from './Button'
import { ClipboardIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const jura = Jura({ weight: '400', style: ['normal'], subsets: ['latin'] })

const DebitCard = ({ name, cardNumber, bankImage }: { name: string; cardNumber: string; bankImage: string }) => {
  const [isCopied, setIsCopied] = useState(false)
  return (
    <div
      className={classNames(
        'debit-card w-11/12 max-w-xs h-40 rounded-xl text-slate-900 flex flex-col justify-between shadow-lg p-3',
        jura.className
      )}
    >
      <div className="flex justify-end">
        <Image src={bankImage} alt="bank" loading="lazy" sizes="100%" width={0} height={0} className="w-10 h-auto" />
      </div>
      <div className="text-left">
        <Image src="/chip.png" alt="bsi" loading="lazy" sizes="100%" width={0} height={0} className="w-10 h-auto mb-1" />
        <p className="leading-3">{cardNumber}</p>
        <p className="uppercase">{name}</p>
      </div>
      <div className="flex justify-end">
        <Button
          theme="dark"
          className="px-2 py-1 mt-0 flex gap-1 items-center rounded not-italic text-sm bg-slate-500 hover:bg-slate-700"
        >
          <ClipboardIcon className="w-4 h-4" /> Salin
        </Button>
      </div>
    </div>
  )
}

export const Gift = () => {
  return (
    <div className="w-full text-center">
      <p className="title mb-3">amplop digital</p>
      <p>
        doa restu anda merupakan karunia yang sangat berarti bagi kami. jika memberi adalah ungkapan tanda kasih anda, anda
        dapat memberi kado secara cashless.
      </p>
      <div className="flex flex-col items-center mt-2">
        <DebitCard name="naruto uzumaki" cardNumber="1234567890" bankImage="/bsi.png" />
      </div>
    </div>
  )
}
