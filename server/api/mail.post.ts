export default defineEventHandler(async (event) => {
  const { from, to, subject, text, html } = await readBody(event)

  if (!to || (!text && !
    html)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No recipient or mail body provided'
    })
  }

  const { sendMail } = useNodeMailer()

  try {
    const result = await sendMail({
      ...(from && { from }),
      to,
      subject,
      text,
      html
    })

    return result
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: (error as Error).message
    })
  }
})