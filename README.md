# dadi-web-ssl-test

#### Looking at

- Transport security
- SSL handling

#### Use Cases

> Without proxy

| Web   | TS | Expected  | Result    | Notes |
|-------|----|-----------|-----------|-------|
| HTTP  | ❌ | 200 OK    | 200 OK    | -     |
| HTTP  | ✅ | 301 HTTPS | 301 HTTPS | -     |
| HTTPS | ❌ | 200 OK    | 200 OK    | 1     |
| HTTPS | ✅ | 200 OK    | 200 OK    | -     |

> With proxy

| Web   | Proxy | TS | TP | Expected  | Result    | Notes |
|-------|-------|----|----|-----------|-----------|-------|
| HTTP  | HTTP  | ❌ | ❌  | 200 OK    | 200 OK    | -     |
| HTTP  | HTTP  | ❌ | ✅  | 200 OK    | 200 OK    | -     |
| HTTP  | HTTP  | ✅ | ❌  | 301 HTTPS | 301 HTTPS | -     |
| HTTP  | HTTP  | ✅ | ✅  | 301 HTTPS | 301 HTTPS | -     |
| HTTP  | HTTPS | ❌ | ❌  | 200 OK    | 200 OK    | -     |
| HTTP  | HTTPS | ❌ | ✅  | 301 HTTP  | 301 HTTP  | -     |
| HTTP  | HTTPS | ✅ | ❌  | 301 HTTPS | 301 HTTPS | 2     |
| HTTP  | HTTPS | ✅ | ✅  | 200 OK    | 200 OK    | -     |

##### Notes

1 – Transport security set to true by server.protocol being set to HTTPS
2 – Will result in a redirect loop, but this is by design. Without trust proxy enabled, request appears as HTTP but requires HTTPS, redirects to HTTPS, etc.

##### Legend

> TS – Transport security, TP – Trust proxy
