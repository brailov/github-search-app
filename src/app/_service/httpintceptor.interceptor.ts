import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const httpintceptorInterceptor: HttpInterceptorFn = (req, next) => {
  let _token = localStorage.getItem('token');
  let jwttoken= req.clone({
    setHeaders:{
      Authorization : _token !=null? 'Bearer '+_token : ''
    }
  })
  return next(jwttoken);
};
