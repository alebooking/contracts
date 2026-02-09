export interface PhoneChangedEvent {
    phone: string;
    code: string;
}

export const PhoneChangedPattern = 'account.phone.changed'