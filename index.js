require('dotenv').config();
const express = require("express");

const app = express();
const port = 3000;

const githubData = {"login": "Trickster2001",
"id": 104058142,
"node_id": "U_kgDOBjPNHg",
"avatar_url": "https://avatars.githubusercontent.com/u/104058142?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/Trickster2001",
"html_url": "https://github.com/Trickster2001",
"followers_url": "https://api.github.com/users/Trickster2001/followers",
"following_url": "https://api.github.com/users/Trickster2001/following{/other_user}",
"gists_url": "https://api.github.com/users/Trickster2001/gists{/gist_id}",
"starred_url": "https://api.github.com/users/Trickster2001/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/Trickster2001/subscriptions",
"organizations_url": "https://api.github.com/users/Trickster2001/orgs",
"repos_url": "https://api.github.com/users/Trickster2001/repos",
"events_url": "https://api.github.com/users/Trickster2001/events{/privacy}",
"received_events_url": "https://api.github.com/users/Trickster2001/received_events",
"type": "User",
"site_admin": false,
"name": "Sudip",
"company": null,
"blog": "",
"location": "India",
"email": null,
"hireable": null,
"bio": "Just a \"NORMAL\" developer who\r\nlikes to make everything simple...",
"twitter_username": "SudipMurkar",
"public_repos": 55,
"public_gists": 0,
"followers": 0,
"following": 0,
"created_at": "2022-04-20T07:02:41Z",
"updated_at": "2024-05-08T12:49:12Z"}

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/twit", (req, res) => {
  res.send("helo");
})

app.get("/github", (req, res) => {
  res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log("running the app on port ", port);
})