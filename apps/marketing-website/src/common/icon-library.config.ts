import type { IconLibrary } from './types'
import ArrowTopRightOnSquareIcon from '~icons/heroicons-solid/arrow-top-right-on-square'
import ArrowRightIcon from '~icons/heroicons-outline/arrow-right'
import Bars3Icon from '~icons/heroicons-outline/bars-3'
import CheckCircleIcon from '~icons/heroicons-outline/check-circle'
import ChevronDownIcon from '~icons/heroicons-solid/chevron-down'
import ChevronRightIcon from '~icons/heroicons-solid/chevron-right'
import FaceSmileIcon from '~icons/heroicons-outline/face-smile'
import PhoneIcon from '~icons/heroicons-outline/phone'
import PlayIcon from '~icons/heroicons-solid/play'
import ShoppingCartIcon from '~icons/heroicons-outline/shopping-cart'
import XMarkIcon from '~icons/heroicons-solid/x-mark'

// test icons
import ChartBarIcon from '~icons/heroicons-outline/chart-bar'
import ChartPieIcon from '~icons/heroicons-outline/chart-pie'
import SquaresPlusIcon from '~icons/heroicons-outline/squares-plus'
import CursorArrowRaysIcon from '~icons/heroicons-outline/cursor-arrow-rays'
import ArrowPathIcon from '~icons/heroicons-outline/arrow-path'
import FingerPrintIcon from '~icons/heroicons-outline/finger-print'
import BriefcaseIcon from '~icons/heroicons-outline/briefcase'

const icons: IconLibrary = {
  'arrow-top-right-square': ArrowTopRightOnSquareIcon,
  'arrow-right': ArrowRightIcon,
  'bars-3': Bars3Icon,
  'check-circle': CheckCircleIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-right': ChevronRightIcon,
  'face-smile': FaceSmileIcon, // default fallback icon for useIconX component
  'phone': PhoneIcon,
  'play': PlayIcon,
  'shopping-cart': ShoppingCartIcon,
  'x-mark': XMarkIcon,

  'chart-bar': ChartBarIcon,
  'chart-pie': ChartPieIcon,
  'squares-plus': SquaresPlusIcon,
  'cursor-arrow-rays': CursorArrowRaysIcon,
  'arrow-path': ArrowPathIcon,
  'finger-print': FingerPrintIcon,
  'briefcase': BriefcaseIcon,
}

export default { ...icons }
