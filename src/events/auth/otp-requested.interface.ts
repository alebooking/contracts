export interface OtpRequestedEvent {
    identifier: string
    type: string
    code: string
}

export const OtpRequestedPattern = 'auth.otp.requested'