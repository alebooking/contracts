export interface EmailChangedEvent {
    email: string;
    code: string;
}

export const EmailChangedPattern = 'account.email.changed'