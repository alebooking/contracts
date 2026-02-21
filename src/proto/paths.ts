import { join } from "path";

export const PROTO_PATH = {
    AUTH: join(__dirname, '../../proto/auth.proto'),
    ACCOUNT: join(__dirname, '../../proto/account.proto'),
    USER: join(__dirname, '../../proto/user.proto'),
    MEDIA: join(__dirname, '../../proto/media.proto')
} as const