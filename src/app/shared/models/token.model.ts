export interface TokenModel {
    accessToken: string;
    error: any;
    errorDescription: string;
    errorModel: AuthErrorModel;
    expiresIn: number;
    httpErrorReason: string;
    httpStatusCode: number;
    identityToken: string;
    isError: boolean;
    raw: string;
    refreshToken: string;
    tokenType: string;
}

export interface AuthErrorModel {
    error: any;
    errorDescription: string;
}