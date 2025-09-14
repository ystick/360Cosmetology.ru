import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

import { NEXT_PUBLIC_CLIENT_URL } from '@constants/seo.constants'

const username = process.env.EMAIL_USERNAME
const password = process.env.EMAIL_PASSWORD

const usernameAdditional = process.env.EMAIL_ADDITIONAL
const usernameAdditional_TWO = process.env.EMAIL_ADDITIONAL_TWO
const usernameAdditional_THREE = process.env.EMAIL_ADDITIONAL_THREE

const HCAPTCHA_SECRET = process.env.HCAPTCHA_SECRET!

export async function POST(req: Request) {
  const data = await req.json()

  const { phone, name, subject = '', staff, usluga, page, abonement, hcaptchaToken, utm } = data

  console.log(subject, 'subject')
  const transporter = nodemailer.createTransport({
    host: 'mail.hosting.reg.ru',
    port: 587,
    auth: {
      user: username,
      pass: password
    },
    secure: false
  })

  if (!hcaptchaToken) return NextResponse.json({ status: 400, message: 'hCaptcha token is missing' }, { status: 400 })

  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || req.headers.get('x-real-ip') || undefined

  const ok = await verifyHCaptcha(hcaptchaToken, typeof ip === 'string' ? ip : undefined)

  if (!ok) return NextResponse.json({ status: 400, message: 'hCaptcha verification failed' }, { status: 400 })

  const utmFields: Record<string, string | undefined> = {
    'UTM Source': utm?.utm_source,
    'UTM Medium': utm?.utm_medium,
    'UTM Campaign': utm?.utm_campaign,
    'UTM Content': utm?.utm_content,
    'UTM Term': utm?.utm_term,
    'UTM Referrer': utm?.utm_referrer
  }

  const fields: Record<string, string | undefined> = {
    'Запись к специалисту': staff,
    'Запись на услугу': usluga,
    'Запись через абонемент': abonement,
    Телефон: phone,
    Имя: name,
    Страница: page,
    ...utmFields
  }

  const htmlBody = Object.entries(fields)
    .filter(([_, value]) => value != null && value !== '')
    .map(([label, value]) => `<p><b>${label}:</b> ${String(value).replace(/</g, '&lt;')}</p>`)
    .join('\n')

  try {
    await transporter.sendMail({
      from: username,
      to: [usernameAdditional, usernameAdditional_TWO, usernameAdditional_THREE].filter(Boolean).join(', '),
      replyTo: username,
      subject: `${NEXT_PUBLIC_CLIENT_URL} | ${subject}`,
      html: htmlBody
    })

    return NextResponse.json({
      status: 200,
      message: 'Success: email was sent'
    })
  } catch (error) {
    console.error('Mail error:', error)
    return NextResponse.json({
      status: 400,
      message: 'Error: email not sent'
    })
  }
}

async function verifyHCaptcha(token: string, remoteip?: string) {
  const params = new URLSearchParams({
    secret: HCAPTCHA_SECRET,
    response: token
  })
  if (remoteip) params.set('remoteip', remoteip)

  const res = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString()
  })

  if (!res.ok) return false
  const data = await res.json()
  return Boolean(data?.success)
}
