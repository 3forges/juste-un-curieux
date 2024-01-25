import { useState } from "preact/hooks";
import { ChevronRightCircle, ChevronRight, ChevronLeftCircle } from 'lucide-preact'

export interface PaginationButtonProps {
  setPaginationState: Function
  paginationState: number
  itemsNumber: number
  itemsPerPage: number
}
export default function PaginationButtonRight(props: PaginationButtonProps) {
  const [disabled, SetDisabled] = useState<boolean>(false);
  const init = () => {
    let isEnabled = props.paginationState < Math.ceil(props.itemsNumber / props.itemsPerPage) - 1
    SetDisabled(!isEnabled)
  }
  init()
  const handlePagination = () => {
    props.setPaginationState(props.paginationState + 1)
    //SetDisabled(!disabled)
    let isEnabled = props.paginationState + 1 < Math.ceil(props.itemsNumber / props.itemsPerPage) - 1
    SetDisabled(!isEnabled)
  }
  const ChevronDisabledCss = `text-gray-400 pl-0`
  const ChevronEnabledCss = `hover:cursor-pointer pl-0`
  // const btnStyling = `text-white bg-white-700 hover:bg-white-800 focus:outline-none focus:ring-4 focus:ring-white-300 font-medium rounded-full text-sm p-0 text-center me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800`
  const btnStyling = `${disabled ? `disabled` : ``} ring-1 ring-white-900 text-white bg-transparent hover:bg-white-300 focus:outline-none focus:ring-4 focus:ring-white-800 font-medium rounded-full text-sm p-0 text-center me-0 mb-0 focus:p-[1px] p-[.5px] dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800`
  if (disabled) {
    return (
      <button disabled class={`${btnStyling}`} onClick={handlePagination}>
        <ChevronRight class={`${disabled ? ChevronDisabledCss : ChevronEnabledCss}`} />
      </button>
    )
  } else {
    return (
      <button class={`${btnStyling}`} onClick={handlePagination}>
        <ChevronRight class={`${disabled ? ChevronDisabledCss : ChevronEnabledCss}`} />
      </button>
    )
  }


}
