---
layout: post
title: Will the future of books be more like Git?
---

![](https://d262ilb51hltx0.cloudfront.net/max/2000/1*5moklcdrPhG6WmN-KC3sLw.png)

When we think about languages and how they evolve, it’s usually at the needs of the people that use them. If we want to share a bit of information, whether that be an emotion, or description — we can create a new collection of letters to form a new word. As long as another person has a common understanding of this combination of letters, we can now use our new word in [sharing information from one mind to another](http://number27.org/wb-language). Languages can be pretty neat this way, and can get even more descriptive if we talk about emojis.

Software, on the other hand, has overhead and accessibility issues. Sure, it also allows you to invent new meanings, and even create new languages — but currently it only evolves when you tell the machine to do something specific, and with correct details. This makes it tough for most to get involved and interested in seeing how the web, and computers will shape publishing going forward.

[Max Bittker](https://twitter.com/maxbittker) and I were lucky enough to spend the last weekend in June on the West Coast working along side folks who also care about a number of these issues at [CODEX Hackathon](http://codexhackathon.com/). CODEX billed itself as an event to play with the future of publishing, but was really just a good excuse for smart designers, developers, and publishers to come together to build things that asked an important question of the direction of reading.

So over that very frenetic weekend, we built [forkpad.me](http://forkpad.me/) — a service that allows the remixing of stories on the popular writing site [Wattpad](https://www.wattpad.com/home) — to help their community become better writers, and keep the web weird. Along the way we realized that the process of writing could take inspiration from the open source software development process. This idea lead us to asking these three questions, which helped shape the tool we wanted to build:

* *What happens when writers are able to remix and reuse each others work?*
* *What happens when a story is never “finished”?*
* *What happens when a story can have multiple authors?*

Intrigued by this, Max and I asked ourselves how we could make a tool that could bring key aspects of Open Source Software (OSS) development to the writing and publishing process.

## Informality Will Rule Publishing

One of the things Max and I love about the web is its ability to share information easily. Thanks to all the underlying technical protocols, we’re now able to build tools to reach many. When we showed up to [Code for America’s](http://www.codeforamerica.org/) San Francisco office Saturday morning, we knew the community on Wattpad was something we could have a lot of fun with.

We were given early access to the API for Wattpad, a massive serial writing community with over [40 million users](https://www.wattpad.com/about) who collectively spend more than 900 million years on the Wattpad site each month (85% of it on mobile).

In the time you’ll spend reading this article, Wattpad will receive enough werewolf fan fiction to last the rest of your life, in addition to other fan fiction of all niches and all personalities. I personally recommend checking out the entire [50 Shades of Drake](https://www.wattpad.com/story/30644165-50-shades-of-drake-drake-fanfic-series) volume, fan fiction about the rapper, if you’re curious.

As we explored the number of story categories and forums within Wattpad we found prolific communities sharing the wildest parts of their minds through stories. By far the biggest success within fan fiction (and informal publishing) is 50 Shades of Grey, which [started as Twilight](https://en.wikipedia.org/wiki/Fifty_Shades_of_Grey#Background) fan fiction.

So we began thinking about the web and its impact on publishing. Traditionally, the final product would be a book in the local store, but what is the “final product” when the process to publishing is just a `≤button/>` on a page?

## The End of a Story is No Longer Static

Traditionally a book would go through a publisher’s Book Product™ machine — but the web now allows the final product to be something different. The final product for an online book is no longer a function of traditional publishing’s Book Product™ formula, but something much less refined. A novella can be quickly written and published, and then evolve with reader interest to spawn a whole series of stories.

As we began to work with Wattpad’s API, we took a closer look at the niches that existed within the story comments and forums on Wattpad. We saw authors discussing ideas, and adding thoughts in hopes of pushing each other to create new narratives. This public process means that the end product isn’t static thing — and because the web allows a story to be edited and rewritten, every story has the ability to be dynamic and changing. Stories may end, but the process for many books is always evolving — which is especially true on Wattpad.

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Ambient lighting. Gives <a href="https://twitter.com/pippinlee">@pippinlee</a> a nice glow. He worked on Forkpad with Max. <a href="http://t.co/ODK8B9ntdo">pic.twitter.com/ODK8B9ntdo</a></p>&mdash; CODEX Hackathon (@codexhackathon) <a href="https://twitter.com/codexhackathon/status/616069391357075457">July 1, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
*Hard at work at the CODEX Hackathon with a Canadian contingent.*

## Can Remixing Help the Writing Process?

From our quick study of Wattpad, Max and I realized that this community could likely use a tool to help create a better feedback loop for authors working through story ideas. The idea of the “remix loop”, where creators spin off each others work can be incredible powerful tools within the writing process. Forkpad allows writers to take a part (“chapter”) from a Wattpad story and adapt it to their own liking.

When developing Forkpad, we found the concept of being able to change an ending or adapt characters to follow our own ideas a fun and important tool in the writing process. The ability to “fork” a Wattpad story means that others can post a link to their Forkpad version back on Wattpad to better share their thoughts on a story, as well as build off of each others’ work.

This idea of “forking” code is now common in software development. When computers were giant room-sized machines, the people who operated them (usually academics) would use tape as a medium to “write” their programs on. They would then feed these lengths of tape into a reader which would interpret their programs and run them on the computer. The programs were usually relatively small because computers could only process small bits of information. The idea of open source can be traced back to these early computer users, who stored their tapes in a drawer so that anyone using the computer could use their completed code. This saved colleagues from having to write a similar program from scratch, because they could share their completed tape programs.

Despite a period of highly commercialized and proprietary software during the 1980s and 1990s (a shift catalyzed, in part, by [Microsoft](https://en.wikipedia.org/wiki/Open_Letter_to_Hobbyists)), developers’ natural desire to share their code has roared back to life in the last twenty years (embodied by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) and his software versioning system [Git](https://en.wikipedia.org/wiki/Git_%28software%29)).

![](https://d262ilb51hltx0.cloudfront.net/max/1200/1*YFy69Cx6aidKv8BrMit7VA.png)
*Early computers would run programs that were created by punching holes in tape. Photo: wikimedia*

Building off each other’s work is common in the open source world of software, where a team may spend a year solving a specific problem, and then they’ll share the code with other developers so that others don’t have to waste their time solving a problem that’s already been solved. Starting with an empty text box is a barrier to writing — so we wanted Forkpad to help get writers writing more. The process of consuming other’s work, and building off of it is one way that we can learn to be better writers, and Forkpad aims to make that easier.

As Saturday ended and Sunday began, we’d already built the main functionality of the Forkpad app — so we spent the last few hours before demo time getting our app up and running with a database so that writers could get a link that they could share. The ability to easily share their remixes means writers will hopefully be encouraged to build off each others work.

The process for using and publishing with Forkpad is much less formal than a traditional publishing process, but we think giving writers the ability to get writing will always trump a process that start with big end goals in mind. Writing is a process, so hopefully Forkpad can ask how that process can evolve for writers with the help of the machine. Much like the atmosphere at CODEX, it’s not a zero-sum game between the machine and publisher, but finding situations that allow both to be part of the creative process.

We’re not sure what writers will make, and we definitely don’t know what the end products will be, but we think it will be something fun.

[Forkpad.me](http://forkpad.me/) is live. Send us some Drake fanfic?


<script async src="https://static.medium.com/embed.js"></script><a class="m-story" data-collapsed="true" href="https://medium.com/codex-hack/will-the-future-of-writing-be-more-like-software-49f2a6900ca9">Thoughts from making tools for literature</a>