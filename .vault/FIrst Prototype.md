---

kanban-plugin: basic

---

## # Server

- [ ] ## API Abstraction <br>- [ ] Create an abstraction that lets outside code use different API providers without worrying about implementation details.<br><br>- [ ] Make it work with GPT3 and GPT4
- [ ] ## Client-Server<br>- [ ] Create endpoints or use web sockets for client-server communication
- [ ] ## Context Building<br>- [ ] Write abstractions for preparing contexts, probably using [[#^API Abstraction]]


## # Storage

- [ ] ## DB Wrangling<br>- [ ] Set up a local instance of the graph database<br>- [ ] Insert some dummy data and run some queries
- [ ] ## Schema<br>- [ ] Design schemas for saving pages, messages, etc<br>- [ ] Define indexes on queried fields
- [ ] ## Data access code<br>- [ ] Set up a connection to the DB<br>- [ ] Write a module that runs some simple queries


## # Client

- [ ] ## History<br>- [ ] Implement lazy/on-demand rendering of pages<br>- [ ] Implement conversation pages with several messages<br>- [ ] Basic search of some sort<br>- [ ] Allow more than one conversation
- [ ] ## Send<br>- [ ] Make the sender component actually work<br>- [ ] Handle responses coming from the server<br>- [ ] Think about supporting streamed responses
- [ ] ##  Menus<br>- [ ] Create a basic menu for picking a conversation
- [ ] ## Misc elements<br>- [ ] Create message info modal<br>- [ ] Create a configuration display modal




%% kanban:settings
```
{"kanban-plugin":"basic"}
```
%%