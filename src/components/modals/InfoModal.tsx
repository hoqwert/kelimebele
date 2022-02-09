import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="NASIL OYNANIR" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Kelimeyi tahmin etmek için 6 hakkınız var. </p>
        <p  className="text-sm text-gray-500 dark:text-gray-300">
        Her tahmin 5 harfli anlamlı bir kelime olmalıdır. 
        </p>
        <p   className="text-sm text-gray-500 dark:text-gray-300">
        Tahmin için Enter'a basın. 
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">
        Her tahminden sonra kutucukların renkleri tahmininizin yakınlığına göre değişecektir.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" status="correct" />
        <Cell value="A" />
        <Cell value="K" />
        <Cell value="İ" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        V harfi kelimede var ve doğru yerde.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="İ" />
        <Cell value="L" status="present" />
        <Cell value="O" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        İ harfi kelimede var fakat yanlış yerde.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="K" />
        <Cell value="O" />
        <Cell value="L" />
        <Cell value="A" />
        <Cell value="Y" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Y harfi kelimede yok.
      </p>
    </BaseModal>
  )
}
