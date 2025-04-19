import { useField } from 'formik'
import { Input } from '@heroui/input'

type InputPropsType = {
  label: string
  type?: string
  name: string
  variant?: 'flat' | 'faded' | 'bordered' | 'underlined'
  className?: string
  isDisabled?: boolean
  isRequired?: boolean
  maxLength?: number
  minLength?: number
  errorMessage?: string
  pattern?: string
}

export const BasicInput = ({
  name,
  type = 'text',
  minLength = 3,
  maxLength = 100,
  variant = 'bordered',
  ...props
}: InputPropsType) => {
  const [field] = useField(name)

  return (
    <Input
      minLength={minLength}
      maxLength={maxLength}
      {...props}
      {...field}
      type={type}
      variant={variant}
    />
  )
}
