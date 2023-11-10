import type { keepTabTheme } from '.'
export const tabTheme: keepTabTheme = {
  base: 'flex flex-col gap-2',
  tablist: {
    base: 'flex text-center',
    styles: {
      default: 'flex-wrap  border-slate-200',
      underline: 'flex-wrap -mb-px border-slate-200',
      pills: 'flex-wrap font-medium text-sm text-slate-700',
      fullWidth: 'hidden text-sm font-medium divide-x divide-slate-200 border-slate-200 sm:flex',
    },
    borderPosition: {
      top: 'border-t',
      bottom: 'border-b',
    },
    tabitem: {
      base: 'flex items-center justify-center px-3.5 py-2.5 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-slate-400',
      styles: {
        default: {
          base: 'rounded-none',
          active: {
            on: 'bg-primary-25 text-primary-500',
            off: 'text-slate-700 hover:bg-primary-25 hover:text-primary-500',
          },
          borderPosition: {
            top: '',
            bottom: '',
          },
        },
        underline: {
          base: 'rounded-none',
          active: {
            on: 'bg-primary-25 text-primary-500 border-primary-200 active',
            off: 'border-transparent text-slate-700 hover:bg-primary-25 hover:border-primary-200 hover:text-primary-500',
          },
          borderPosition: {
            top: 'border-t-2',
            bottom: 'border-b-2',
          },
        },
        pills: {
          base: '',
          active: {
            on: 'rounded-md bg-primary-25 text-primary-500 border border-primary-200',
            off: 'rounded-md hover:text-primary-500 hover:bg-primary-25 hover:border hover:border-primary-200',
          },
          borderPosition: {
            top: '',
            bottom: '',
          },
        },
        fullWidth: {
          base: 'ml-2 first:ml-0 w-full',
          active: {
            on: 'inline-block px-3.5 py-2.5 w-full text-primary-500 bg-primary-25 active focus:outline-none',
            off: 'bg-white text-slate-700 hover:text-primary-500 hover:bg-primary-25',
          },
          borderPosition: {
            top: '',
            bottom: '',
          },
        },
      },
      icon: {
        left: 'mr-2',
        right: 'ml-2',
      },
      notification: {
        base: 'bg-inherit ml-2 border text-sm',
        type: {
          number: 'px-1 py-.5 rounded-full',
          text: 'px-1.5 py-.5 rounded-md',
        },
        notificationColor: {
          gray: 'border-slate-200 text-slate-500',
          info: 'border-primary-200 text-primary-500',
          error: 'border-error-200 text-error-500',
          success: 'border-success-100 text-success-600',
          warning: 'border-warning-200 text-warning-500',
        },
      },
    },
  },
  tabpanel: 'p-4',
}
