interface MailOptions {
  to: string
  subject?: string
  text?: string
  html?: string
  from?: string
}

export default function useMail() {
  const mail = (options: MailOptions) => {
    if (!options.to || (!options.text && !options.html)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No recipient or mail body provided'
      })
    }
    return $fetch('/api/mail', { method: 'POST', body: options })
  }
  return mail
}