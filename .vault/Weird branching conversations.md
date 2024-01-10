Messages sequences are represented as *spindles.* A spindle is a 3d graph using the following set of dimensions.

# Dimensions

## Chainwise
Chainwise means in the direction of the message chain. So for instance the following direction is *chainwise*. The chainwise position of each message is the number shown.


```mermaid
flowchart LR
	subgraph abc[" "]
	direction LR
	Prompt1["1 USER\n5+5\n1"]-->Reply1["2 BOT\n2"]-->Prompt2["3 USER\n+5\n3"]-->Reply2["4 BOT\n15"]
	end
	subgraph branch[" "]
		direction LR
		Prompt2b["USER\n+3\n3"]-->Reply3["BOT\n13"]
	end
	Reply1-->branch
```

Chainwise is the natural direction of conversation flow.
## Branching
A branch is an alternative sequence of messages. Here is an example of a branch. 

```mermaid
timeline
    title History of Social Media Platform
    2002 : LinkedIn
    2004 : Facebook
         : Google
    2005 : Youtube
    2006 : Twitter
```


Branchwise is defined as the direction in which messages branch out into alternative 