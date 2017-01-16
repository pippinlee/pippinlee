---
layout: post
title: "The Elements of Programming Style (1978)"

---

![]({{ site.baseurl }}/img/elements-of-style-op.png)

How do principles become timeless?

When I discovered Strunk and White's (1920) famous [The Element of Style](http://www.amazon.com/The-Elements-Style-Fourth-Edition/dp/020530902X) in school, it provided one of the best lessons in brevity I've experienced. I still keep it in mind whenever I'm asked to write, because its concise points are timeless––timeless in the sense that while it is about style, it is not binded to style. Strunk and White's style guide is still incredibly in-touch with writers almost 100 years later.

So I was happy to find this book, a derivative of the famous Strunk and White book, [The Elements of Programming Style](http://www.amazon.com/The-Elements-Programming-Style-Edition/dp/0070342075) by Kernighan and Plauger, written in 1978, close to 40 years ago.

TEPS uses Fortran as its example language, but much like the book that inspired it, the lessons it teaches are timeless and still hold up today. When you can distill rule and opinion to good practice, you can advice that lasts a longtime.

__I don't think it's quite right to call either the English, or programming style guide timeless, but it's still evidence that core principles can last many decades, even if the software world feels like it's evolving every hour.__

I took some time to summarize each chapter's points, and as you can see most still apply to modern software development.

### Introduction

* Write clearly- don't be too clever.


### Expression

* Say what you mean, simply and directly.
* Use library functions.
* Avoid temporary variable
* Write clearly -- don't sacrifice clarity for "efficiency"
* Let the machine do the directly work
* Replace repetitive expressions by calls to ca common function
* Parenthesize to avoid ambiguity
* Choose variable names that won't be confused
* Avoid the Fortran arithmetic IF
* Use the good features of a language; avoid the bad ones
* Use the "telephone test" for readability



### Control Structure

* Follow each decision as closely as possible with its associated action
* Don't stop with your first draft


### Program Structure

* Modularize
* Make the coupling between modules visible
* Each module should do one thing well
* Make sure every module hides something
* Let the data structure the program
* Don't patch bad code -- rewrite it


### Input and Output

* Test input for validity and plausibility
* Make sure input cannot violate the limits of the program
* Identify bad input; recover if possible
* Make input easy to prepare and output self-explanatory
* Make input easy to proofread


### Common Blunders

* Don't stop at one bug
* Watch out for off-by-one errors
* Avoid multiple exits from loops
* Make sure your code "does nothing" gracefully
* Test programs at their boundary values
* Program defensively
* 10.0 times 0.1 is hardly ever 1.0

### Efficiency and Instrumentation

* Make it right before you make it faster
* Keep it right when you make it faster
* Make it clear before you make it faster
* Don't sacrifice clarity for small gains in "efficiency"
* Let your compiler do the simple optimizations
* Don't strain to re-use code; reorganize instead
* Keep it simple to make it faster
* Don't diddle code to make it faster -- find a better algorithm
* Instrument your programs. Measure before making "efficiency" changes

### Documentation and readability

* Make sure comments and code agree
* Don't just echo the code with comments -- make every comment count
* Don't comment bad code -- rewrite it
* Use variable names that mean something
* Format a program to help the reader understand it
* Document your data layouts
* Don't over-comment






### Additional reading

[http://pu.inf.uni-tuebingen.de/users/klaeren/epigrams.html](http://pu.inf.uni-tuebingen.de/users/klaeren/epigrams.html)

[https://en.wikipedia.org/wiki/Turing_tarpit](https://en.wikipedia.org/wiki/Turing_tarpit)