import i18nMiddleware, {matcher} from '@repo/i18n/middleware';

export default i18nMiddleware;

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
};
