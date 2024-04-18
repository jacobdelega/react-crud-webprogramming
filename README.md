# Final project

This is the final project for class - Web Programming

# Commands to remember -- Docker

-   Prefix: docker-compose

*   up : starts and runs the entire application
*   down: stops and removes all containers
*   build: builds or rebuilds docker images
*   ps: list all running containers
*   logs: view output from containers
*   stop: stops running containers w/o removing
*   start: starts any stopped containers

# Breaking down JWT Auth

-   Within my authentication I read within the documentation thats its advised to regenerate and send another cookie for each user authentication
-   This approach will help prevent session fixation attacked - an attack where users reuse a cookie session to bypass authentication.

# JWT

Three main parts separated by dots (.),

-   Header
-   Payload
-   Signature

§ Example: xxxxx.yyyyy.zzzzz

\*\* Header typically consists of two parts: the type of the token (JWT) and then the signing algorithm
example:
{
"alg": "HS256",
"typ": "JWT"
}

\*\* Payload which contains the 3 claims: NOTE(name only three characters long)

-   registered claims
-   public claims
-   private claims

example :
{
"sub": "1234567890",
"name": "John Doe",
"admin": true
}

\*\* Signature where you take the encoded header, the encoded payload, a secret, the algorithm and sign it.
example:
HMACSHA256(
base64UrlEncode(header) + "." +
base64UrlEncode(payload),
secret)
