---
layout: post
title: Revenge of the deepfake detectives
---

![]({{site.baseurl}}/img/detector.jpeg)

[Full post on medium](https://medium.com/dessa-news/detecting-audio-deepfakes-f2edfd8e2b35) | 
[Axios write up](https://www.axios.com/deepfake-detectors-artificial-intelligence-bc86b182-0ca6-45fc-aecf-a1c9ce5563c9.html) | 
[Code on github](https://github.com/dessa-public/fake-voice-detection)

A few of my Dessa colleagues and I released a fake voice detection model. Kaveh wrote about it in this weekend’s Axios’ Future. One of the primary questions throughout this project was asking can *"can detectors keep up with new fake voice models?"*

The short answer is that it's going to be an uphill battle. To help with this we're sharing our code to encourage the ML community that this type of work is necessary.

One optimistic idea from this experience: the effort needed to build detector models is much less than creating them. If we motivate developers of generators (good actors) to build detectors as well, the additional time cost is minimal!

One pessimistic idea: any good detector model can be used to make an opposing generator model better. This cat and mouse game will continue.