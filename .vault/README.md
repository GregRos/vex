# Vex

This is the experimental chat UI project. I got to 'vex' like this:

```
Conversation Codex (too long) -> Convex (too mathy) -> Vex
```

However, I'm not sure if I like it. I'm open to suggestions.

## Goals
To make an advanced UI for AI conversations for personal computers. 

### Limitations
1. Optimized for 1080p and 1440p ONLY, with conessions for 720p
2. Use memory and storage like a desktop app, i.e. high usage is okay
2. Mostly non-responsive to resizing etc
3. Not be super optimized in terms of performance

### Basic characteristics
1. Self-hosted. Can run either locally or on someone's server.
2. Can use different AI backends.
3. Use either a graph DB or document DB
4. Text-based, at least in the start. i.e. no support for images

### UI concepts
1. Use screen realestate.
2. Assume window is maximized.
3. conversation branching.
4. optimized history display
5. strong keyboard navigation and shortcuts
6. keywords/hashtags
7. UI elements of different types to display conversations
8. Powerful search

## Development plan
I have lots of ideas, but we only have finite energy and need to decide what to focus on.

Also, with UI, you can't easily tell what will work right off the bat. We'll need to try different designs
and some might not be successful. 

We should try to focus on things that:

1. Are absolutely necessary even for a prototype
2. Define the broad user experience
3. Don't require too much work
4. Are likely to be successful

We should prioritize getting a basic, working prototype out as soon as possible and only then add complicated features.

However, some of the choices in the basic prototype will be permanent, so they should be in line with future development.
## Techs used
1. Node.js
2. TypeScript
3. React

## Development tools
1. npm
2. Obsidian for documentation, drawing stuff
3. VSCode or PyCharm
4. git
2. Adobe XD for UI design (optional)

## Components
1. ProseMirror, an open source rich text editor and viewer.

## Storage
Right now we'll use JSON files and stuff. However, in the future:
1. If graph DB, then probably https://memgraph.com/
2. If regular DB, probably cassandra


