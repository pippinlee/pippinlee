---
layout: post
title: Driving dashboard
---


![drive](http://f.cl.ly/items/2j1W1w031w2Q432X1W0S/Screen%20Recording%202015-09-17%20at%2004.32%20PM.gif)
_[https://github.com/pippinlee/drive-dashboard](https://github.com/pippinlee/drive-dashboard)_

You can see a live version of this project here: [pippinlee.com/drive-dashboard](http://www.pippinlee.com/drive-dashboard)

This project started with a friend sending me ~51,000 points of data. He'd just bought an adapter that allowed him to start collecting the driving data his car's computer was producing. Car's have had computers built into them for quite a while, but only recently has their data become more thorough. The third-party market for accessories for accessing this information has also exploded.

There are also a growing number of products, like Eric Evenchick's [CANtact](http://linklayer.github.io/cantact/), that give car owner's more control over their car's internal computers.

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/pippinlee">@pippinlee</a> <a href="https://twitter.com/zmanji">@zmanji</a> <a href="http://t.co/Nh0IQYd0px">http://t.co/Nh0IQYd0px</a> bluetooth OBDII port adapter -&gt; Android Torque app -&gt; MySQL in real time (local logs are in .csv)</p>&mdash; Stephen Vescio (@stephenvescio) <a href="https://twitter.com/stephenvescio/status/539557867372965889">December 1, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Most of the work of making data useful is asking the right questions, which leads to being able to build a helpful interface. Along with avoiding [chartjunk](https://en.wikipedia.org/wiki/Chartjunk), filtering out many of the data points was helpful while building this dashboard.

Finally, it was a good excuse to work with d3.js and leaflet.


![](https://cldup.com/59wNcZfYyo.png)

_Zoomed out view of of the .csv_