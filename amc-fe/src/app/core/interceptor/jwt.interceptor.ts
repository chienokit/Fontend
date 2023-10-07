import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LANGUAGE_VI, PUBLIC_PATH} from '@shared/constants/base.constant';
import {LOCAL_STORAGE, SESSION_STORAGE} from '@shared/constants/local-session-cookies.constants';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {Observable} from 'rxjs';
import CommonUtil from '@shared/utils/common-utils';
import {environment} from '@env/environment';
import {AuthService} from '@shared/service/auth/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  urlsToNotUse = ['/authentication/login', './assets/i18n/vi.json', './assets/i18n/en.json'];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private authService: AuthService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    if (
      !request ||
      (request.url && this.urlsToNotUse.includes(request.url)) || request?.url.includes(PUBLIC_PATH)
    ) {
      return next.handle(request);
    }
    const token =
      this.localStorage.retrieve(LOCAL_STORAGE.JWT_TOKEN) || this.sessionStorage.retrieve(SESSION_STORAGE.JWT_TOKEN);
    const lang = this.localStorage.retrieve(LOCAL_STORAGE.LANGUAGE) || LANGUAGE_VI;
    if (!!token) {
      const decodeAccessToken = CommonUtil.decryptMessage(token, this.authService.getTokenPrivateKey());

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${decodeAccessToken}`,
          language: lang,
          'Accept-Language': lang
        },
      });
    }
    // else {
    //   this.router.navigate(['/authentication/login']);
    // }
    return next.handle(request);
  }
}
