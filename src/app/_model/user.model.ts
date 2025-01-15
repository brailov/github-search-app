
export interface userlogin{
    username: string;
    password: string;
}

export interface loginresponse{
    success: boolean;   
    token: string;
    error: string;
}

export interface menu{
    code: string;
    name: string;   
}