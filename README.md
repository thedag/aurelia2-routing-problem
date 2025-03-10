# aurelia2-routing-problem
Repo to demonstrate my problems getting basic routing to work in a new Aurelia 2 project.
Run it: `yarn start`

## Steps to recreate from scratch
```shell
nvm use 23
npx makes aurelia demo-app -s typescript,vitest
cd demo-app
```

Create some components so we have something to route to:

| file                      | file contents                 |
| ------------------------- | ----------------------------- |
| home/gdpr-home.html       | `<h1>HOME</h1>`               |
| home/gdpr-home.ts         | `export class GdprHome {}`    |
| servers/gdpr-servers.html | `<h1>SERVERS</h1>`            |
| servers/gdpr-servers.ts   | `export class GdprServers {}` |


Modify main in accordance with the doc, starting at https://docs.aurelia.io/getting-to-know-aurelia/routing/aurelia-router/getting-started.

- register the router configuration with Aurelia (main.ts)
- expose my routes via static 'routes' prop (my-app.ts)
- render some anchors with the magical 'load' attribute matching routes (my-app.html)

Run with `yarn start`.
