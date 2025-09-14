export interface IRequestCallForm {
  name: string
  phone: string
  privacyAgreement: boolean
  hcaptchaToken?: string
  page?: string
}

export interface IMakeAnAppointment {
  name: string
  phone: string
  privacyAgreement: boolean
  staff?: string
  usluga?: string
  abonement?: string
  hcaptchaToken?: string
  page?: string
}
